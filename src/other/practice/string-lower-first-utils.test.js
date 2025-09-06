import { lowerFirst } from './string-lower-first-utils.js';

describe('lowerFirst', () => {
  test('should convert the first character of a string to lowercase', () => {
    expect(lowerFirst('Fred')).toBe('fred');
    expect(lowerFirst('FRED')).toBe('fRED');
  });

  test('should handle empty string', () => {
    expect(lowerFirst('')).toBe('');
  });

  test('should handle non-string inputs', () => {
    expect(lowerFirst(null)).toBe('');
    expect(lowerFirst(undefined)).toBe('');
    expect(lowerFirst(123)).toBe('');
  });
});
