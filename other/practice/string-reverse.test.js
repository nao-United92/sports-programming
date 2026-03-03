const reverseString = require('./string-reverse');

describe('string-reverse', () => {
  test('reverses a simple string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('reverses a string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  test('handles empty strings', () => {
    expect(reverseString('')).toBe('');
  });

  test('handles single character strings', () => {
    expect(reverseString('a')).toBe('a');
  });

  test('handles non-string inputs', () => {
    expect(reverseString(null)).toBe(null);
    expect(reverseString(123)).toBe(123);
  });
});
