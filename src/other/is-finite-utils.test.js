import { isFinite } from './is-finite-utils';

describe('isFinite', () => {
  it('should return true for finite numbers', () => {
    expect(isFinite(0)).toBe(true);
    expect(isFinite(123)).toBe(true);
    expect(isFinite(-10)).toBe(true);
    expect(isFinite(3.14)).toBe(true);
  });

  it('should return false for Infinity and -Infinity', () => {
    expect(isFinite(Infinity)).toBe(false);
    expect(isFinite(-Infinity)).toBe(false);
  });

  it('should return false for NaN', () => {
    expect(isFinite(NaN)).toBe(false);
  });

  it('should return false for non-number types', () => {
    expect(isFinite(null)).toBe(false);
    expect(isFinite(undefined)).toBe(false);
    expect(isFinite('123')).toBe(false);
    expect(isFinite(true)).toBe(false);
    expect(isFinite({})).toBe(false);
    expect(isFinite([])).toBe(false);
  });

  it('should return true for Number objects', () => {
    expect(isFinite(new Number(5))).toBe(true);
  });
});
