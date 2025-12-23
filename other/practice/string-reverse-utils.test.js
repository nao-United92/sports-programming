const reverseString = require('./string-reverse-utils');

describe('reverseString', () => {
  test('should reverse a simple string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('should reverse a string with multiple words', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  test('should return an empty string for an empty input string', () => {
    expect(reverseString('')).toBe('');
  });

  test('should return the same string for a single character string', () => {
    expect(reverseString('a')).toBe('a');
  });

  test('should handle numbers as part of the string', () => {
    expect(reverseString('12345')).toBe('54321');
  });

  test('should handle special characters', () => {
    expect(reverseString('!@#$')).toBe('$#@!');
  });

  test('should return an empty string for non-string input (null)', () => {
    expect(reverseString(null)).toBe('');
  });

  test('should return an empty string for non-string input (undefined)', () => {
    expect(reverseString(undefined)).toBe('');
  });

  test('should return an empty string for non-string input (number)', () => {
    expect(reverseString(123)).toBe('');
  });

  test('should return an empty string for non-string input (object)', () => {
    expect(reverseString({})).toBe('');
  });
});
