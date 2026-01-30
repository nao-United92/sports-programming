// other/practice/string-truncate.test.js
const stringTruncate = require('./string-truncate');

describe('stringTruncate', () => {
  test('should truncate a string longer than maxLength with ellipsis', () => {
    expect(stringTruncate('long string to truncate', 15)).toBe('long string...');
  });

  test('should not truncate a string shorter than or equal to maxLength', () => {
    expect(stringTruncate('hello', 10)).toBe('hello');
    expect(stringTruncate('hello world', 11)).toBe('hello world');
    expect(stringTruncate('abc', 3)).toBe('abc'); // Corrected expectation
  });

  test('should handle maxLength equal to ellipsis length', () => {
    expect(stringTruncate('any string that is longer than 3', 3)).toBe('...');
  });

  test('should handle maxLength less than ellipsis length', () => {
    expect(stringTruncate('any string', 2)).toBe('..');
    expect(stringTruncate('any string', 1)).toBe('.');
    expect(stringTruncate('any string', 0)).toBe('');
  });

  test('should handle empty string input', () => {
    expect(stringTruncate('', 10)).toBe('');
  });

  test('should use default maxLength if invalid maxLength is provided', () => {
    // The current implementation sets maxLength to 10 if invalid
    expect(stringTruncate('abcdefghijklmnopqrstuvwxyz', null)).toBe('abcdefg...'); // Corrected expectation
    expect(stringTruncate('abcdefghijklmnopqrstuvwxyz', -5)).toBe('abcdefg...'); // Corrected expectation
  });

  test('should return an empty string for non-string inputs', () => {
    expect(stringTruncate(null, 10)).toBe('');
    expect(stringTruncate(undefined, 10)).toBe('');
    expect(stringTruncate(123, 10)).toBe('');
    expect(stringTruncate({}, 10)).toBe('');
    expect(stringTruncate([], 10)).toBe('');
  });

  test('should not truncate if string length is equal to maxLength', () => {
    expect(stringTruncate('abc', 3)).toBe('abc');
  });
});
