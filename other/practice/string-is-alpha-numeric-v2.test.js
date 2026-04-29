import { isAlphanumericV2 } from './string-is-alpha-numeric-v2';

describe('isAlphanumericV2', () => {
  test('should return true for alphanumeric strings', () => {
    expect(isAlphanumericV2('abc123')).toBe(true);
    expect(isAlphanumericV2('ABC')).toBe(true);
  });

  test('should return false for non-alphanumeric strings', () => {
    expect(isAlphanumericV2('abc!@#')).toBe(false);
    expect(isAlphanumericV2('')).toBe(false);
  });
});
