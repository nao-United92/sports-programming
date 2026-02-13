import isNumber from './is-number';

describe('isNumber', () => {
  test('should return true for number primitives', () => {
    expect(isNumber(1)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(-10.5)).toBe(true);
    expect(isNumber(Infinity)).toBe(true);
    expect(isNumber(-Infinity)).toBe(true);
    expect(isNumber(NaN)).toBe(true);
  });

  test('should return false for Number objects', () => {
    expect(isNumber(new Number(1))).toBe(false);
  });

  test('should return false for non-number values', () => {
    expect(isNumber('1')).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber('abc')).toBe(false);
  });
});
