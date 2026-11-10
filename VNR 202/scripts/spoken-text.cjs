// Đọc số tiếng Việt cho input TTS: chữ trên phụ đề giữ chữ số (1939), giọng đọc nhận dạng chữ (một nghìn chín trăm ba mươi chín).
const ones = ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];
function readNumber(n) {
    if (n < 10) return ones[n];
    if (n < 20) return 'mười' + (n % 10 ? ' ' + (n % 10 === 5 ? 'lăm' : ones[n % 10]) : '');
    if (n < 100) { const t = Math.floor(n / 10), u = n % 10; return ones[t] + ' mươi' + (u ? ' ' + (u === 1 ? 'mốt' : u === 5 ? 'lăm' : ones[u]) : ''); }
    if (n < 1000) { const h = Math.floor(n / 100), r = n % 100; return ones[h] + ' trăm' + (r === 0 ? '' : r < 10 ? ' linh ' + ones[r] : ' ' + readNumber(r)); }
    const k = Math.floor(n / 1000), r = n % 1000;
    return ones[k] + ' nghìn' + (r === 0 ? '' : r < 100 ? ' không trăm ' + (r < 10 ? 'linh ' + ones[r] : readNumber(r)) : ' ' + readNumber(r));
}
function toSpoken(text) {
    return String(text)
        .replace(/(\d+)\s*-\s*(\d+)/g, '$1 đến $2')
        .replace(/\d+/g, (m) => readNumber(parseInt(m, 10)))
        .replace(/\s+/g, ' ').trim();
}
module.exports = { readNumber, toSpoken };
