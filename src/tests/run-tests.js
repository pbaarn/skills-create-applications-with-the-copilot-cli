// Lightweight test runner for calculator functions (fallback when Jest can't run)
const assert = require('assert');
const { add, subtract, multiply, divide } = require('../calculatorLib');

function closeTo(actual, expected, tol = 1e-9) {
  return Math.abs(actual - expected) <= tol;
}

const tests = [
  () => assert.strictEqual(add(2, 3), 5, 'add integers'),
  () => assert.ok(closeTo(add(2.5, 1.2), 3.7), 'add floats'),
  () => assert.strictEqual(subtract(10, 4), 6, 'subtract'),
  () => assert.strictEqual(multiply(6, 7), 42, 'multiply'),
  () => assert.ok(closeTo(divide(5, 2), 2.5), 'divide produces float'),
  () => assert.ok(closeTo(divide(1, 3), 1 / 3), 'divide small fractions'),
  () => assert.strictEqual(add(-2, 3), 1, 'negative numbers'),
  () => { try { divide(5, 0); throw new Error('expected throw'); } catch (e) { if (e.message === 'expected throw') throw e; if (!/division by zero/.test(e.message)) throw e; } },
];

let passed = 0;
for (let i = 0; i < tests.length; i++) {
  try {
    tests[i]();
    console.log(`ok ${i + 1}`);
    passed++;
  } catch (err) {
    console.error(`FAIL ${i + 1}: ${err.message}`);
    process.exitCode = 1;
  }
}

console.log(`${passed}/${tests.length} tests passed`);
if (process.exitCode && process.exitCode !== 0) process.exit(1);
else process.exit(0);
