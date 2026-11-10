const fs = require('fs'), vm = require('vm'), path = require('path'), crypto = require('crypto');
const script = JSON.parse(fs.readFileSync('planning/presentation-script.json', 'utf8'));
const ctx = vm.createContext({});
vm.runInContext(fs.readFileSync('museum-3d-single-03.js', 'utf8') + ';globalThis.s=STORY_DATA', ctx);
const clips = [];
for (const [i, p] of script.pieces.entries()) {
    const story = ctx.s[i];
    if (story.id !== p.pieceId || story.intro !== p.intro.display || story.steps.length !== p.steps.length) throw Error('Script mismatch: ' + p.pieceId);
    clips.push({ id: p.pieceId + '-intro', text: p.intro.text });
    p.steps.forEach((step, j) => {
        if (story.steps[j].id !== step.stepId || story.steps[j].narration !== step.display) throw Error('Script mismatch: ' + step.stepId);
        clips.push({ id: step.stepId, text: step.text });
    });
}
// Chạy `node scripts/build-presentation-script.cjs` trước để script khớp museum-3d-single-03.js. `text` là bản đọc (số bằng chữ).
fs.mkdirSync('audio/presentation', { recursive: true });
const sleep = ms => new Promise(r => setTimeout(r, ms));
async function generate(c, i) {
    const file = path.join('audio/presentation', c.id + '.mp3');
    const marker = file + '.sha256', hash = crypto.createHash('sha256').update(c.text).digest('hex');
    if (fs.existsSync(file) && fs.statSync(file).size > 1000 && fs.existsSync(marker) && fs.readFileSync(marker, 'utf8') === hash) { console.log('Existing', i + 1, c.id); return; }
    for (let attempt = 1; attempt <= 5; attempt++) {
        try {
            const response = await fetch('http://localhost:5050/v1/audio/speech', {
                method: 'POST', headers: { Authorization: 'Bearer ' + (process.env.VNR_TTS_API_KEY || 'your_api_key_here'), 'Content-Type': 'application/json' },
                body: JSON.stringify({ model: 'tts-1', input: c.text, voice: 'vi-VN-NamMinhNeural', response_format: 'mp3' }), signal: AbortSignal.timeout(120000)
            });
            if (!response.ok) {
                const data = await response.json().catch(() => ({}));
                const message = data.details === 'No audio was received. Please verify that your parameters are correct.' ? data.details : (data.error || 'TTS request failed');
                throw Error('HTTP ' + response.status + ' ' + message);
            }
            const bytes = Buffer.from(await response.arrayBuffer());
            if (bytes.length < 1000 || bytes.subarray(0, 1).toString() === '{') throw Error('Invalid MP3 response');
            fs.writeFileSync(file, bytes); fs.writeFileSync(marker, hash);
            console.log('Generated', (i + 1) + '/' + clips.length, c.id, bytes.length); return;
        } catch (error) {
            if (attempt === 5) throw Error(c.id + ': ' + error.message);
            console.log('Retry', c.id, attempt, error.message.slice(0, 100)); await sleep(attempt * 2000);
        }
    }
}
(async () => {
    let next = 0;
    await Promise.all(Array.from({ length: 2 }, async () => { while (next < clips.length) { const i = next++; await generate(clips[i], i); } }));
    fs.writeFileSync('audio/presentation/manifest.json', JSON.stringify({ revision: script.revision, voice: script.voice, model: 'tts-1', clips: clips.map(c => ({ id: c.id, file: c.id + '.mp3', textHash: crypto.createHash('sha256').update(c.text).digest('hex') })) }, null, 2));
    console.log('Generation complete');
})().catch(e => { console.error(e); process.exitCode = 1; });
