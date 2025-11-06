import { isLight, isDark } from './color-is-light-or-dark-utils.js';

describe('isLight', () => {
  test('should return true for light colors', () => {
    expect(isLight('#ffffff')).toBe(true);
    expect(isLight('#ffff00')).toBe(true); // Yellow
  });

  test('should return false for dark colors', () => {
    expect(isLight('#000000')).toBe(false);
    expect(isLight('#ff0000')).toBe(false); // Red
  });

  test('should allow custom threshold', () => {
    expect(isLight('#ff0000', 0.2)).toBe(true);
  });

  test('should return null for invalid hex', () => {
    expect(isLight('invalid')).toBeNull();
  });
});

describe('isDark', () => {
  test('should return true for dark colors', () => {
    expect(isDark('#000000')).toBe(true);
    expect(isDark('#ff0000')).toBe(true); // Red
  });

  test('should return false for light colors', () => {
    expect(isDark('#ffffff')).toBe(false);
    expect(isDark('#ffff00')).toBe(false); // Yellow
  });

  test('should allow custom threshold', () => {
    expect(isDark('#808080', 0.6)).toBe(true);
  });

  test('should return null for invalid hex', () => {
    expect(isDark('invalid')).toBeNull();
  });
});
