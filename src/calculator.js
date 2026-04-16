#!/usr/bin/env node

// Calculator CLI (supports: addition, subtraction, multiplication, division)
// Commands:
//   add <a> <b>       -> a + b
//   subtract <a> <b>  -> a - b
//   multiply <a> <b>  -> a * b
//   divide <a> <b>    -> a / b  (division by zero handled)
// This file is a thin CLI wrapper around calculatorLib.js

const lib = require('./calculatorLib');

const args = process.argv.slice(2);
if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
  console.log('Usage: node src/calculator.js <add|subtract|multiply|divide> <a> <b>');
  process.exit(0);
}

const [cmd, aRaw, bRaw] = args;
const a = Number(aRaw);
const b = Number(bRaw);

if (aRaw === undefined || bRaw === undefined) {
  console.error('Error: missing operands. Expected: <a> <b>');
  console.log('Usage: node src/calculator.js <add|subtract|multiply|divide> <a> <b>');
  process.exit(1);
}

if (Number.isNaN(a) || Number.isNaN(b)) {
  console.error('Error: operands must be numeric');
  process.exit(2);
}

let result;
try {
  switch (cmd) {
    case 'add':
      result = lib.add(a, b);
      break;
    case 'subtract':
      result = lib.subtract(a, b);
      break;
    case 'multiply':
      result = lib.multiply(a, b);
      break;
    case 'divide':
      result = lib.divide(a, b);
      break;
    default:
      console.error(`Error: unknown command '${cmd}'`);
      console.log('Supported commands: add, subtract, multiply, divide');
      process.exit(1);
  }
} catch (err) {
  console.error('Error: ' + err.message);
  process.exit(3);
}

// Print result to stdout
console.log(Number.isInteger(result) ? result : result);
