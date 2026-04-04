const factorial = require('./nebula-math-factorial');

describe('nebula-math-factorial', () => {
  test('should return 1 for 0 and 1', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
  });

  test('should return factorial for positive integers', () => {
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
    expect(factorial(4)).toBe(24);
    expect(factorial(5)).toBe(120);
    expect(factorial(10)).toBe(3628800);
  });

  test('should throw error for negative numbers', () => {
    expect(() => factorial(-1)).toThrow('Input must be a non-negative integer');
  });

  test('should throw error for non-integers', () => {
    expect(() => factorial(1.5)).toThrow('Input must be a non-negative integer');
    expect(() => factorial('a')).toThrow('Input must be a non-negative integer');
    expect(() => factorial(NaN)).toThrow('Input must be a non-negative integer');
  });
});
