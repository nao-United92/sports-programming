import { reverseString } from './string-reverse-utils.js';

describe('reverseString', () => {
  test('should reverse a given string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
  });

  test('should return an empty string for an empty input', () => {
    expect(reverseString('')).toBe('');
  });

  test('should handle a single character string', () => {
    expect(reverseString('a')).toBe('a');
  });

  test('should handle strings with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  test('should handle non-string inputs', () => {
    expect(reverseString(null)).toBe('');
    expect(reverseString(undefined)).toBe('');
    expect(reverseString(123)).toBe('');
  });
});
