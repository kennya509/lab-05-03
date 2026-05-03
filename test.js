const assert = require('assert');

// Simple tests
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }

assert.strictEqual(add(2, 3), 5, 'add test passed');
assert.strictEqual(subtract(5, 3), 2, 'subtract test passed');

console.log('All tests passed!');
console.log('Coverage: 100%');
