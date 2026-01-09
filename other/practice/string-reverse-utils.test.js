import { reverseString } from './string-reverse-utils.js';

describe('reverseString', () => {
  test('should reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('should return an empty string for an empty input string', () => {
    expect(reverseString('')).toBe('');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(reverseString(123)).toBe('');
    expect(reverseString(null)).toBe('');
  });

  test('should handle palindromic strings', () => {
    expect(reverseString('madam')).toBe('madam');
  });

  test('should handle strings with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });
});