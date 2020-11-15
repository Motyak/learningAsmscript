const assert = require("assert");
const myModule = require("..");
assert.strictEqual(myModule.fib(13), 233);
console.log("ok");
