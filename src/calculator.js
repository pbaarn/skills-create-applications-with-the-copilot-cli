#!/usr/bin/env node

// Calculator CLI (supports: addition, subtraction, multiplication, division)
// Commands:
//   add <a> <b>       -> a + b
//   subtract <a> <b>  -> a - b
//   multiply <a> <b>  -> a * b
//   divide <a> <b>    -> a / b  (division by zero handled)
// Usage examples:
//   node src/calculator.js add 2 3      # outputs: 5
//   node src/calculator.js divide 5 2   # outputs: 2.5

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
switch (cmd) {
  case 'add':
    result = a + b;
    break;
  case 'subtract':
    result = a - b;
    break;
  case 'multiply':
    result = a * b;
    break;
  case 'divide':
    if (b === 0) {
      console.error('Error: division by zero');
      process.exit(3);
    }
    result = a / b;
    break;
  default:
    console.error(`Error: unknown command '${cmd}'`);
    console.log('Supported commands: add, subtract, multiply, divide');
    process.exit(1);
}

// Print result to stdout
if (Number.isInteger(result)) console.log(result);
else console.log(result);
