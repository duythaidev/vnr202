// Tạo manifest voice thuyết trình từ audio/presentation/*.mp3.
// Chạy tại thư mục môn:  node scripts/build-presentation-audio-manifest.cjs
// Ra: presentation-audio.js (nạp runtime, dùng được với file://), planning/presentation-audio.json,
// và cập nhật planning/presentation-clip-index.json. Cần ffprobe trong PATH để đo thời lượng.
// Không gọi TTS. Clip thiếu hoặc rỗng được báo và để trạng thái "missing".
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const AUDIO_DIR = 'audio/presentation';
const hashesFile = path.join(ROOT, AUDIO_DIR, 'hashes.json');
const hashes = fs.existsSync(hashesFile) ? JSON.parse(fs.readFileSync(hashesFile, 'utf8')) : {};
const MODEL = 'tts-1';
const script = JSON.parse(fs.readFileSync(path.join(ROOT, 'planning/presentation-script.json'), 'utf8'));

function duration(file) {
    try {
        const out = execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', file], { encoding: 'utf8' });
        const d = parseFloat(out);
        return Number.isFinite(d) ? Math.round(d * 100) / 100 : null;
    } catch (e) { return null; }
}

const clips = {};
const missing = [];
function add(clipId, kind, pieceId, stepId, text) {
    const rel = `${AUDIO_DIR}/${clipId}.mp3`;
    const abs = path.join(ROOT, rel);
    const want = crypto.createHash('sha256').update(text).digest('hex');
    // clip chỉ "ready" khi file có VÀ hash nội dung khớp kịch bản hiện hành (tránh phát voice của bản cũ)
    const ok = fs.existsSync(abs) && fs.statSync(abs).size > 1000 && fs.existsSync(abs + '.sha256') && fs.readFileSync(abs + '.sha256', 'utf8') === want;
    const dur = ok ? duration(abs) : null;
    if (!ok || !dur) missing.push(clipId);
    clips[clipId] = {
        kind, pieceId, ...(stepId ? { stepId } : {}),
        file: rel, status: ok && dur ? 'ready' : 'missing', duration: dur,
        bytes: ok ? fs.statSync(abs).size : 0,
        textHash: want
    };
}
script.pieces.forEach(p => {
    add(`${p.pieceId}-intro`, 'piece-intro', p.pieceId, null, p.intro.text);
    p.steps.forEach(s => add(s.stepId, 'step', p.pieceId, s.stepId, s.text));
});

const manifest = { course: 'VNR202', revision: script.revision, voice: script.voice, generatedBy: 'scripts/build-presentation-audio-manifest.cjs', clips };
fs.writeFileSync(path.join(ROOT, 'planning/presentation-audio.json'), JSON.stringify(manifest, null, 2), 'utf8');
const runtime = Object.fromEntries(Object.entries(clips).filter(([, c]) => c.status === 'ready').map(([k, c]) => [k, { file: c.file, duration: c.duration }]));
fs.writeFileSync(path.join(ROOT, 'presentation-audio.js'),
    '// Sinh tự động bởi scripts/build-presentation-audio-manifest.cjs. Không sửa tay.\n' +
    'const PRESENTATION_AUDIO = ' + JSON.stringify(runtime, null, 4) + ';\n', 'utf8');

const idxPath = path.join(ROOT, 'planning/presentation-clip-index.json');
const idx = JSON.parse(fs.readFileSync(idxPath, 'utf8'));
idx.revision = script.revision;
idx.status = missing.length ? 'partial' : 'generated';
idx.clips.forEach(c => {
    const m = clips[c.clipId];
    if (!m) return;
    c.expectedFile = m.file; c.status = m.status === 'ready' ? 'generated' : 'missing'; c.duration = m.duration;
});
fs.writeFileSync(idxPath, JSON.stringify(idx, null, 2), 'utf8');

const total = Object.values(clips).reduce((a, c) => a + (c.duration || 0), 0);
console.log(`clips: ${Object.keys(clips).length}, ready: ${Object.keys(runtime).length}, missing: ${missing.join(',') || 'none'}, tổng ${Math.round(total)}s`);
