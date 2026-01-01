const { capitalize } = require('./string-capitalize-utils');

describe('capitalize', () => {
  test('should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('should return an empty string if input is empty', () => {
    expect(capitalize('')).toBe('');
  });

  test('should handle already capitalized strings', () => {
    expect(capitalize('World')).toBe('World');
  });

  test('should handle strings with mixed case', () => {
    expect(capitalize('hELLo')).toBe('HELLo');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
    expect(capitalize(123)).toBe('');
    expect(capitalize({})).toBe('');
  });
});