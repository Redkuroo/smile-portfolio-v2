const fs = require('fs');
const s = fs.readFileSync('c:\\Users\\Admin\\smile-portfolio-v2\\app\\components\\Footer.js','utf8');
const lines = s.split('\n');
let stack = [];
for (let i=0;i<lines.length;i++){
  const line = lines[i];
  const openMatches = [...line.matchAll(/<div(\s|>|\/)/g)];
  const closeMatches = [...line.matchAll(/<\\/div>/g)];
  openMatches.forEach(m=> stack.push({line:i+1, text: line.trim().slice(0,120)}));
  closeMatches.forEach(m=> stack.pop());
}
console.log('remaining open divs:', stack.length);
if(stack.length) console.log(stack.map(x=>`line ${x.line}: ${x.text}`).join('\n'));
else console.log('all divs closed');
