const {
  capitalize
} = require('./string-capitalize-utils');

describe('capitalize', () => {
  test('should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('should convert the rest of the string to lowercase', () => {
    expect(capitalize('wORLd')).toBe('World');
  });

  test('should handle an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('should handle non-string inputs', () => {
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
    expect(capitalize(123)).toBe('');
  });

  test('should handle single-character strings', () => {
    expect(capitalize('a')).toBe('A');
    expect(capitalize('B')).toBe('B');
  });
});