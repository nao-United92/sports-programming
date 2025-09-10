import { isNull } from './is-null-utils.js';

describe('isNull', () => {
  it('should return true for null', () => {
    expect(isNull(null)).toBe(true);
  });

  it('should return false for undefined', () => {
    expect(isNull(undefined)).toBe(false);
  });

  it('should return false for other values', () => {
    expect(isNull(0)).toBe(false);
    expect(isNull('')).toBe(false);
    expect(isNull(false)).toBe(false);
    expect(isNull([])).toBe(false);
    expect(isNull({})).toBe(false);
    expect(isNull('hello')).toBe(false);
    expect(isNull(123)).toBe(false);
    expect(isNull(true)).toBe(false);
    expect(isNull(() => {})).toBe(false);
  });
});
