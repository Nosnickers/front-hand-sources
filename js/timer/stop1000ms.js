const start = performance.now();
let count = 0;
while (performance.now() - start < 1000) {}
console.log('done!');

