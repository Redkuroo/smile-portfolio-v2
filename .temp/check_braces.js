const fs = require('fs');
const path = 'c:\\Users\\Admin\\smile-portfolio-v2\\app\\components\\Footer.js';
const s = fs.readFileSync(path, 'utf8');
function countChars(ch) {
  let n = 0;
  for (let i=0;i<s.length;i++) if (s[i]===ch) n++;
  return n;
}
console.log('length', s.length);
console.log('{', countChars('{'));
console.log('}', countChars('}'));
console.log('(', countChars('('));
console.log(')', countChars(')'));
console.log('[', countChars('['));
console.log(']', countChars(']'));
// simple tag check for <div and </div>
const openDiv = (s.match(/<div\b/g) || []).length;
const closeDiv = (s.match(/<\/div>/g) || []).length;
console.log('<div', openDiv, '</div>', closeDiv);
const openFooter = (s.match(/<footer\b/g) || []).length;
const closeFooter = (s.match(/<\/footer>/g) || []).length;
console.log('<footer', openFooter, '</footer>', closeFooter);
// output excerpt around last 200 chars
console.log('\n--- tail ---\n', s.slice(-300));
