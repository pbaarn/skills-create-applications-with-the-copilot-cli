const { add, subtract, multiply, divide } = require('../calculatorLib');

describe('calculator basic operations', () => {
  test('addition of integers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('addition of floats', () => {
    expect(add(2.5, 1.2)).toBeCloseTo(3.7);
  });

  test('subtraction', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('multiplication', () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test('division produces float', () => {
    expect(divide(5, 2)).toBeCloseTo(2.5);
  });

  test('division of small fractions', () => {
    expect(divide(1, 3)).toBeCloseTo(1 / 3);
  });

  test('negative numbers', () => {
    expect(add(-2, 3)).toBe(1);
  });

  test('division by zero throws', () => {
    expect(() => divide(5, 0)).toThrow('division by zero');
  });
});
