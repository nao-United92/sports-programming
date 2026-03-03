const fibonacci = require('./math-fibonacci');

describe('math-fibonacci', () => {
  test('computes first few Fibonacci numbers', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(6)).toBe(8);
    expect(fibonacci(7)).toBe(13);
  });

  test('throws error for negative numbers', () => {
    expect(() => fibonacci(-1)).toThrow('Fibonacci is not defined for negative numbers');
  });
});
