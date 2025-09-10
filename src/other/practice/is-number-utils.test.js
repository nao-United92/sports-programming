import { isNumber } from './is-number-utils.js';

describe('isNumber', () => {
  it('should return true for number primitives', () => {
    expect(isNumber(1)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(-1)).toBe(true);
    expect(isNumber(1.23)).toBe(true);
    expect(isNumber(Infinity)).toBe(true);
    expect(isNumber(-Infinity)).toBe(true);
  });

  it('should return true for Number objects', () => {
    expect(isNumber(new Number(1))).toBe(true);
  });

  it('should return false for non-number values', () => {
    expect(isNumber('1')).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber(() => {})).toBe(false);
    expect(isNumber(NaN)).toBe(true); // NaN is a number
  });
});
