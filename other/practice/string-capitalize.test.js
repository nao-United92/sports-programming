// other/practice/string-capitalize.test.js
const stringCapitalize = require('./string-capitalize');

describe('stringCapitalize', () => {
  test('should capitalize the first letter of a lowercase string', () => {
    expect(stringCapitalize('hello')).toBe('Hello');
  });

  test('should capitalize the first letter of an uppercase string', () => {
    expect(stringCapitalize('WORLD')).toBe('WORLD');
  });

  test('should capitalize the first letter of a mixed case string', () => {
    expect(stringCapitalize('wOrLd')).toBe('WOrLd');
  });

  test('should return an empty string for an empty input', () => {
    expect(stringCapitalize('')).toBe('');
  });

  test('should handle a single character string', () => {
    expect(stringCapitalize('a')).toBe('A');
    expect(stringCapitalize('Z')).toBe('Z');
  });

  test('should handle strings that already start with a capital letter', () => {
    expect(stringCapitalize('Hello')).toBe('Hello');
  });

  test('should handle strings with numbers or symbols at the beginning', () => {
    expect(stringCapitalize('1hello')).toBe('1hello');
    expect(stringCapitalize('$hello')).toBe('$hello');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(stringCapitalize(null)).toBe('');
    expect(stringCapitalize(undefined)).toBe('');
    expect(stringCapitalize(123)).toBe('');
    expect(stringCapitalize({})).toBe('');
    expect(stringCapitalize([])).toBe('');
  });
});
