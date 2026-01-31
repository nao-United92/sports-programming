const reverseString = require('./string-reverse');

describe('reverseString', () => {
  test('should reverse a standard string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('should handle a string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  test('should return an empty string for an empty input', () => {
    expect(reverseString('')).toBe('');
  });

  test('should handle non-string inputs gracefully', () => {
    expect(reverseString(12345)).toBe('');
    expect(reverseString(null)).toBe('');
    expect(reverseString(undefined)).toBe('');
  });

  test('should handle palindromes', () => {
    expect(reverseString('madam')).toBe('madam');
  });
});