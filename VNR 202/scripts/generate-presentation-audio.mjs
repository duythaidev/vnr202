// Tạo MP3 voice từ planning/presentation-script.json bằng service TTS local. Chạy TRƯỚC buổi thuyết trình, không chạy trong trình duyệt.
//   set TTS_API_KEY=... (PowerShell: $env:TTS_API_KEY="...")   rồi:   node scripts/generate-presentation-audio.mjs [--force] [--only vnr-p03-s02]
// Chỉ tạo lại clip có nội dung/voice/model đổi hoặc chưa có file. Sau khi chạy xong: node scripts/build-presentation-audio-manifest.cjs
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'audio/presentation');
const HASHES = path.join(OUT, 'hashes.json');
const ENDPOINT = process.env.TTS_ENDPOINT || 'http://localhost:5050/v1/audio/speech';
const KEY = process.env.TTS_API_KEY;
const MODEL = 'tts-1';
const args = process.argv.slice(2);
const force = args.includes('--force');
const only = args.includes('--only') ? args[args.indexOf('--only') + 1] : null;
if (!KEY) { console.error('Thiếu TTS_API_KEY (biến môi trường).'); process.exit(1); }

const script = JSON.parse(fs.readFileSync(path.join(ROOT, 'planning/presentation-script.json'), 'utf8'));
const hashOf = (text) => crypto.createHash('sha1').update([script.voice, MODEL, text].join('|')).digest('hex').slice(0, 16);
const hashes = fs.existsSync(HASHES) ? JSON.parse(fs.readFileSync(HASHES, 'utf8')) : {};
const jobs = [];
for (const p of script.pieces) {
    jobs.push({ id: `${p.pieceId}-intro`, text: p.intro });
    for (const s of p.steps) jobs.push({ id: s.stepId, text: s.text });
}
fs.mkdirSync(OUT, { recursive: true });

async function run(job) {
    const file = path.join(OUT, job.id + '.mp3');
    const h = hashOf(job.text);
    if (!force && fs.existsSync(file) && fs.statSync(file).size > 0 && hashes[job.id] === h) return 'skip';
    let buf;
    for (let attempt = 1; attempt <= 6; attempt++) {
        try {
            const res = await fetch(ENDPOINT, {
                method: 'POST',
                headers: { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({ model: MODEL, input: job.text, voice: script.voice, response_format: 'mp3' }),
                signal: AbortSignal.timeout(120000)
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            buf = Buffer.from(await res.arrayBuffer());
            if (buf.length < 1000) throw new Error('file audio quá nhỏ');
            break;
        } catch (error) {
            if (attempt === 6) throw error;
            console.log(job.id, `thử lại ${attempt}: ${error.message}`);
            await new Promise(resolve => setTimeout(resolve, attempt * 2000));
        }
    }
    fs.writeFileSync(file + '.tmp', buf);
    fs.renameSync(file + '.tmp', file);
    hashes[job.id] = h;
    fs.writeFileSync(HASHES, JSON.stringify(hashes, null, 2));
    return 'ok';
}

const todo = jobs.filter(j => !only || j.id === only);
let next = 0, failed = [];
async function worker() {
    while (next < todo.length) {
        const job = todo[next++];
        try { console.log(job.id, await run(job)); } catch (e) { console.error(job.id, 'LỖI', e.message); failed.push(job.id); }
    }
}
await Promise.all([worker(), worker()]);   // tối đa 2 request đồng thời
console.log(failed.length ? `Lỗi ${failed.length} clip, chạy lại để thử tiếp: ${failed.join(', ')}` : 'Xong, không lỗi.');
process.exit(failed.length ? 1 : 0);
