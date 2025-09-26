const { trim } = require('./string-trim-utils.js');

describe('trim', () => {
  test('should trim leading and trailing whitespace', () => {
    expect(trim('  abc  ')).toBe('abc');
  });

  test('should trim specified characters', () => {
    expect(trim('_-abc-_', '_- ')).toBe('abc');
  });

  test('should handle empty string', () => {
    expect(trim('')).toBe('');
  });

  test('should handle string with only whitespace', () => {
    expect(trim('   ')).toBe('');
  });

  test('should handle string with only specified characters', () => {
    expect(trim('--- ', ' - ')).toBe('');
  });

  test('should not modify the string if no trimming is needed', () => {
    expect(trim('abc')).toBe('abc');
  });

  test('should handle non-string input', () => {
    expect(trim(null)).toBe('');
    expect(trim(undefined)).toBe('');
    expect(trim(123)).toBe('');
  });
});
