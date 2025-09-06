import { isEmptyString } from './string-is-empty-utils.js';

describe('isEmptyString', () => {
  test('should return true for an empty string', () => {
    expect(isEmptyString('')).toBe(true);
  });

  test('should return false for a non-empty string', () => {
    expect(isEmptyString('hello')).toBe(false);
  });

  test('should return false for a string with only spaces', () => {
    expect(isEmptyString('   ')).toBe(false);
  });

  test('should return false for non-string inputs', () => {
    expect(isEmptyString(null)).toBe(false);
    expect(isEmptyString(undefined)).toBe(false);
    expect(isEmptyString(123)).toBe(false);
    expect(isEmptyString([])).toBe(false);
    expect(isEmptyString({})).toBe(false);
  });
});
