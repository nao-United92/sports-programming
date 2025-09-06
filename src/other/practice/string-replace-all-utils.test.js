import { replaceAll } from './string-replace-all-utils.js';

describe('replaceAll', () => {
  test('should replace all occurrences of a substring', () => {
    expect(replaceAll('hello world world', 'world', 'there')).toBe('hello there there');
  });

  test('should handle empty string', () => {
    expect(replaceAll('', 'a', 'b')).toBe('');
  });

  test('should handle non-string inputs', () => {
    expect(replaceAll(null, 'a', 'b')).toBe('');
    expect(replaceAll(undefined, 'a', 'b')).toBe('');
    expect(replaceAll(123, 'a', 'b')).toBe('');
  });

  test('should handle search string not found', () => {
    expect(replaceAll('hello', 'x', 'y')).toBe('hello');
  });
});
