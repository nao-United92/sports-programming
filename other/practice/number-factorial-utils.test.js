import factorial from './number-factorial-utils';

describe('factorial', () => {
  test('should return 1 for 0!', () => {
    expect(factorial(0)).toBe(1);
  });

  test('should return 1 for 1!', () => {
    expect(factorial(1)).toBe(1);
  });

  test('should calculate factorial for positive integers', () => {
    expect(factorial(2)).toBe(2);    // 2 * 1
    expect(factorial(3)).toBe(6);    // 3 * 2 * 1
    expect(factorial(4)).toBe(24);   // 4 * 3 * 2 * 1
    expect(factorial(5)).toBe(120);  // 5 * 4 * 3 * 2 * 1
    expect(factorial(10)).toBe(3628800);
  });

  test('should throw an error for non-integer arguments', () => {
    expect(() => factorial(1.5)).toThrow(TypeError);
    expect(() => factorial('abc')).toThrow(TypeError);
    expect(() => factorial(null)).toThrow(TypeError);
    expect(() => factorial(undefined)).toThrow(TypeError);
  });

  test('should throw an error for negative integers', () => {
    expect(() => factorial(-1)).toThrow(Error);
    expect(() => factorial(-5)).toThrow(Error);
  });
});
