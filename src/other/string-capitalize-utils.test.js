const { capitalize } = require('./string-capitalize-utils.js');

describe('capitalize', () => {
  test('should capitalize the first letter of a string', () => {
    expect(capitalize('fred')).toBe('Fred');
  });

  test('should convert the rest of the string to lowercase', () => {
    expect(capitalize('FRED')).toBe('Fred');
    expect(capitalize('fRED')).toBe('Fred');
  });

  test('should handle empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('should handle single character string', () => {
    expect(capitalize('a')).toBe('A');
    expect(capitalize('Z')).toBe('Z');
  });

  test('should handle strings with spaces', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });

  test('should handle non-string input', () => {
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
    expect(capitalize(123)).toBe('');
  });
});
