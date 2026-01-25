const { capitalize } = require('./string-capitalize-first-letter-utils');

describe('capitalize', () => {
  test('should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('should return an empty string if an empty string is provided', () => {
    expect(capitalize('')).toBe('');
  });

  test('should handle already capitalized strings', () => {
    expect(capitalize('World')).toBe('World');
  });

  test('should handle strings with only one character', () => {
    expect(capitalize('a')).toBe('A');
  });

  test('should handle non-string inputs by returning an empty string', () => {
    expect(capitalize(123)).toBe('');
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
    expect(capitalize({})).toBe('');
    expect(capitalize([])).toBe('');
  });

  test('should not change the rest of the string', () => {
    expect(capitalize('hELLo wORLd')).toBe('HELLo wORLd');
  });
});
