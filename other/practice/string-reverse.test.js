// other/practice/string-reverse.test.js
const stringReverse = require('./string-reverse');

describe('stringReverse', () => {
  test('should reverse a basic string', () => {
    expect(stringReverse('hello')).toBe('olleh');
  });

  test('should reverse a string with multiple words', () => {
    expect(stringReverse('hello world')).toBe('dlrow olleh');
  });

  test('should return an empty string for an empty input', () => {
    expect(stringReverse('')).toBe('');
  });

  test('should handle a single character string', () => {
    expect(stringReverse('a')).toBe('a');
  });

  test('should handle strings with special characters', () => {
    expect(stringReverse('!@#$')).toBe('$#@!');
  });

  test('should handle strings with numbers', () => {
    expect(stringReverse('12345')).toBe('54321');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(stringReverse(null)).toBe('');
    expect(stringReverse(undefined)).toBe('');
    expect(stringReverse(123)).toBe('');
    expect(stringReverse({})).toBe('');
    expect(stringReverse([])).toBe('');
  });
});
