const stringCapitalize = require('./string-capitalize');

describe('stringCapitalize', () => {
  test('should capitalize the first letter of a lowercase string', () => {
    expect(stringCapitalize('hello')).toBe('Hello');
  });

  test('should not change a string that is already capitalized', () => {
    expect(stringCapitalize('World')).toBe('World');
  });

  test('should handle a single character string', () => {
    expect(stringCapitalize('a')).toBe('A');
  });

  test('should return an empty string if input is empty', () => {
    expect(stringCapitalize('')).toBe('');
  });

  test('should handle non-string inputs gracefully', () => {
    expect(stringCapitalize(123)).toBe('');
    expect(stringCapitalize(null)).toBe('');
    expect(stringCapitalize(undefined)).toBe('');
  });
});