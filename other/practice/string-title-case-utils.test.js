const { titleCase } = require('./string-title-case-utils');

describe('titleCase', () => {
  test('should convert a string to title case', () => {
    expect(titleCase('hello world')).toBe('Hello World');
  });

  test('should handle already title cased strings', () => {
    expect(titleCase('Hello World')).toBe('Hello World');
  });

  test('should handle strings with mixed case', () => {
    expect(titleCase('jAvAsCrIpT iS fUn')).toBe('Javascript Is Fun');
  });

  test('should handle empty string', () => {
    expect(titleCase('')).toBe('');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(titleCase(null)).toBe('');
    expect(titleCase(undefined)).toBe('');
    expect(titleCase(123)).toBe('');
  });
});
