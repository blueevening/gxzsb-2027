const fs = require('fs');
const path = require('path');
const s = fs.readFileSync(path.join(__dirname, '..', 'syllabus.js'), 'utf8');
const i = s.indexOf('id: "net"');
console.log(s.slice(i, i + 4000));
// also ee and c point titles only
function titles(id) {
  const j = s.indexOf('id: "' + id + '"');
  const chunk = s.slice(j, j + 8000);
  const re = /\["([^"]+)"/g;
  let m;
  const out = [];
  while ((m = re.exec(chunk))) out.push(m[1]);
  return out;
}
console.log('EE points:', titles('ee').slice(0, 30));
console.log('C points:', titles('c').slice(0, 30));
console.log('NET points:', titles('net').slice(0, 30));
