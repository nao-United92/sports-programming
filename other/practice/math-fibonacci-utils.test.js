const fibonacci = require('./math-fibonacci-utils');

describe('fibonacci', () => {
  test('generates Fibonacci sequence of length 5', () => {
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
  });

  test('generates Fibonacci sequence of length 1', () => {
    expect(fibonacci(1)).toEqual([0]);
  });

  test('returns empty array for length 0', () => {
    expect(fibonacci(0)).toEqual([]);
  });

  test('generates Fibonacci sequence of length 10', () => {
    expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});
