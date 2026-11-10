// Tạo planning/presentation-script.json từ museum-3d-single-03.js (nguồn duy nhất của lời thuyết trình).
// `display` là chữ hiện ở phụ đề (số bằng chữ số); `text` là bản đọc (số bằng chữ) để gửi TTS và tính hash.
// Chạy: node scripts/build-presentation-script.cjs
const fs = require('fs');
const path = require('path');
const { toSpoken } = require('./spoken-text.cjs');
const ROOT = path.resolve(__dirname, '..');
const src = fs.readFileSync(path.join(ROOT, 'museum-3d-single-03.js'), 'utf8');
const S = JSON.parse(src.slice(src.indexOf('const STORY_DATA = ') + 19, src.indexOf(';\nfunction getStory')));
const pieces = Object.keys(S).map(k => ({
    pieceId: S[k].id, intro: { display: S[k].intro, text: toSpoken(S[k].intro) },
    steps: S[k].steps.map(s => ({ stepId: s.id, display: s.narration, text: toSpoken(s.narration) }))
}));
fs.writeFileSync(path.join(ROOT, 'planning/presentation-script.json'), JSON.stringify({ course: 'VNR202', revision: 5, voice: 'vi-VN-NamMinhNeural', status: 'draft-unapproved', pieces }, null, 2), 'utf8');
console.log('ok', pieces.length, 'tranh');
