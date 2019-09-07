const fs = require('fs');
let multiplier = parseInt(1024+(1024**2)*Math.random());
let randomCrap = "lets just pretend this is the result of some pkg script or something :) ".repeat(multiplier)
fs.writeFileSync('dist/out.exe', randomCrap);
console.log(`File created with size ${randomCrap.length}`);
