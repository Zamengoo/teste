const assert = require("assert");
const { somar, subtrair, multiplicar } = require("./src/calc");

assert.strictEqual(somar(2, 3), 5);
assert.strictEqual(subtrair(10, 4), 6);
assert.strictEqual(multiplicar(3, 5), 15);

console.log("pass");