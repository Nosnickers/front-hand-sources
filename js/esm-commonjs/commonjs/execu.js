const helloMul = require("./exports-mult");
console.log(helloMul);

const helloObj = require("./exports-obj");
const { c } = helloObj;
console.log(helloObj, "exports-obj", c);
