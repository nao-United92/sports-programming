const isOdd = require('./number-is-odd-utils');

describe('isOdd', () => {
  it('should return true for odd numbers', () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(-3)).toBe(true);
    expect(isOdd(99)).toBe(true);
  });

  it('should return false for even numbers', () => {
    expect(isOdd(2)).toBe(false);
    expect(isOdd(0)).toBe(false);
    expect(isOdd(-4)).toBe(false);
    expect(isOdd(100)).toBe(false);
  });

  it('should return false for non-numeric values', () => {
    expect(isOdd('1')).toBe(false);
    expect(isOdd(null)).toBe(false);
    expect(isOdd(undefined)).toBe(false);
    expect(isOdd({})).toBe(false);
    expect(isOdd([])).toBe(false);
  });

  it('should return false for floating-point numbers', () => {
    expect(isOdd(2.5)).toBe(false);
    expect(isOdd(0.0)).toBe(false); // 0 is an even number
    expect(isOdd(-4.0)).toBe(false); // -4 is an even number
  });

  it('should return false for Infinity and NaN', () => {
    expect(isOdd(Infinity)).toBe(false);
    expect(isOdd(-Infinity)).toBe(false);
    expect(isOdd(NaN)).toBe(false);
  });
});