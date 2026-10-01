const assert = require("assert");

function add(a, b) {
    return a + b;
}

const result = add(2, 3);

assert.strictEqual(result, 5);

console.log("All tests passed!");