const isEven = require('./number-is-even-utils');

describe('isEven', () => {
  test('should return true for even numbers', () => {
    expect(isEven(0)).toBe(true);
    expect(isEven(2)).toBe(true);
    expect(isEven(-4)).toBe(true);
    expect(isEven(100)).toBe(true);
  });

  test('should return false for odd numbers', () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(-3)).toBe(false);
    expect(isEven(99)).toBe(false);
  });

  test('should throw an error for non-numeric input', () => {
    expect(() => isEven('hello')).toThrow('Input must be a finite number.');
    expect(() => isEven(null)).toThrow('Input must be a finite number.');
    expect(() => isEven(undefined)).toThrow('Input must be a finite number.');
    expect(() => isEven({})).toThrow('Input must be a finite number.');
    expect(() => isEven([])).toThrow('Input must be a finite number.');
    expect(() => isEven(true)).toThrow('Input must be a finite number.');
  });

  test('should throw an error for Infinity and -Infinity', () => {
    expect(() => isEven(Infinity)).toThrow('Input must be a finite number.');
    expect(() => isEven(-Infinity)).toThrow('Input must be a finite number.');
  });

  test('should throw an error for NaN', () => {
    expect(() => isEven(NaN)).toThrow('Input must be a finite number.');
  });

  test('should return true for floating point numbers that are mathematically even', () => {
    // While typically used for integers, the modulo operator works.
    // However, for practical purposes, `isEven` is usually for integers.
    // Given the current implementation, it will work for 2.0, 4.0 etc.
    expect(isEven(2.0)).toBe(true);
  });

  test('should return false for floating point numbers that are mathematically odd', () => {
    expect(isEven(3.0)).toBe(false);
  });
});