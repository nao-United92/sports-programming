import { trimStart } from './string-trim-start-utils.js';

describe('trimStart', () => {
  test('should remove whitespace from the start of a string', () => {
    expect(trimStart('  hello world  ')).toBe('hello world  ');
  });

  test('should return an empty string for an empty input', () => {
    expect(trimStart('')).toBe('');
  });

  test('should handle a string with only leading spaces', () => {
    expect(trimStart('   hello')).toBe('hello');
  });

  test('should handle a string with no leading spaces', () => {
    expect(trimStart('hello')).toBe('hello');
  });

  test('should handle non-string inputs', () => {
    expect(trimStart(null)).toBe('');
    expect(trimStart(undefined)).toBe('');
    expect(trimStart(123)).toBe('');
  });
});
