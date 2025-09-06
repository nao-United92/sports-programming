import { trim } from './string-trim-utils.js';

describe('trim', () => {
  test('should remove whitespace from both ends of a string', () => {
    expect(trim('  hello world  ')).toBe('hello world');
  });

  test('should return an empty string for an empty input', () => {
    expect(trim('')).toBe('');
  });

  test('should handle a string with only spaces', () => {
    expect(trim('   ')).toBe('');
  });

  test('should handle a string with no leading or trailing spaces', () => {
    expect(trim('hello')).toBe('hello');
  });

  test('should handle non-string inputs', () => {
    expect(trim(null)).toBe('');
    expect(trim(undefined)).toBe('');
    expect(trim(123)).toBe('');
  });
});
