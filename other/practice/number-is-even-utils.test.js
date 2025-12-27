import isEven from './number-is-even-utils';

describe('isEven', () => {
  it('should return true for even numbers', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(0)).toBe(true);
    expect(isEven(-4)).toBe(true);
    expect(isEven(100)).toBe(true);
  });

  it('should return false for odd numbers', () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(-3)).toBe(false);
    expect(isEven(99)).toBe(false);
  });

  it('should return false for non-numeric values', () => {
    expect(isEven('2')).toBe(false);
    expect(isEven(null)).toBe(false);
    expect(isEven(undefined)).toBe(false);
    expect(isEven({})).toBe(false);
    expect(isEven([])).toBe(false);
  });

  it('should return false for floating-point numbers', () => {
    expect(isEven(2.5)).toBe(false);
    expect(isEven(0.0)).toBe(true); // 0 is an even number
    expect(isEven(-4.0)).toBe(true); // -4 is an even number
  });

  it('should return false for Infinity and NaN', () => {
    expect(isEven(Infinity)).toBe(false);
    expect(isEven(-Infinity)).toBe(false);
    expect(isEven(NaN)).toBe(false);
  });
});