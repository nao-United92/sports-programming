import { isNumber } from './is-number-utils';

describe('isNumber', () => {
  it('should return true for number primitives', () => {
    expect(isNumber(123)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(-10)).toBe(true);
    expect(isNumber(3.14)).toBe(true);
  });

  it('should return true for Number objects', () => {
    expect(isNumber(new Number(5))).toBe(true);
  });

  it('should return true for NaN and Infinity', () => {
    expect(isNumber(NaN)).toBe(true);
    expect(isNumber(Infinity)).toBe(true);
    expect(isNumber(-Infinity)).toBe(true);
  });

  it('should return false for non-number types', () => {
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber('string')).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber(() => {})).toBe(false);
  });
});
