import { isAlphanumeric } from './string-is-alpha-numeric';

describe('isAlphanumeric', () => {
  test('should return true for alphanumeric strings', () => {
    expect(isAlphanumeric('abc123')).toBe(true);
    expect(isAlphanumeric('ABC')).toBe(true);
    expect(isAlphanumeric('123')).toBe(true);
  });

  test('should return false for non-alphanumeric strings', () => {
    expect(isAlphanumeric('abc 123')).toBe(false);
    expect(isAlphanumeric('abc!@#')).toBe(false);
    expect(isAlphanumeric('')).toBe(false);
  });
});
