const rect = require('./Shape/rectangle');
console.log(`The area is: ${rect.area(10, 20)}`);
console.log(`The circumference is: ${rect.circumference(10, 20)}`);
console.log(`Current time is: ${rect.currentDateTime}`);
console.log(`Directory name: ${rect.directoryName}`);
console.log(`File name: ${rect.fileName}`);
let aCircle = require('./Shape/circle');
console.log(`aCircle's area: ${aCircle.area(5)}`);