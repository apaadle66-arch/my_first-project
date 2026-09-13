import fs from 'node:fs';
const s = fs.readFileSync('client/src/pages/Home.tsx','utf8').split('\n')[25];
for (let i = 1235; i < 1270; i++) console.log(i, JSON.stringify(s[i]), s.charCodeAt(i));
