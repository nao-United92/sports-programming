import { upperFirst } from './string-upper-first-utils.js';

describe('upperFirst', () => {
  test('should convert the first character of a string to uppercase', () => {
    expect(upperFirst('fred')).toBe('Fred');
    expect(upperFirst('FRED')).toBe('FRED');
  });

  test('should handle empty string', () => {
    expect(upperFirst('')).toBe('');
  });

  test('should handle non-string inputs', () => {
    expect(upperFirst(null)).toBe('');
    expect(upperFirst(undefined)).toBe('');
    expect(upperFirst(123)).toBe('');
  });
});
