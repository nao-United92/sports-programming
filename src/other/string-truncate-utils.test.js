import { truncate, truncateMiddle } from './string-truncate-utils.js';

describe('truncate', () => {
  test('should not truncate if string is shorter than or equal to length', () => {
    expect(truncate('hello', 10)).toBe('hello');
    expect(truncate('hello', 5)).toBe('hello');
  });

  test('should truncate string to the specified length', () => {
    expect(truncate('hello world', 8)).toBe('hello...');
  });

  test('should use custom omission string', () => {
    expect(truncate('hello world', 8, '...')).toBe('hello...');
    expect(truncate('hello world', 9, '---')).toBe('hello ---');
  });

  test('should handle edge cases', () => {
    expect(truncate('abc', 2, '...')).toBe('...');
    expect(truncate('abcdef', 6)).toBe('abcdef');
  });

  test('should return an empty string for non-string input', () => {
    expect(truncate(null, 10)).toBe('');
    expect(truncate(undefined, 10)).toBe('');
    expect(truncate(123, 10)).toBe('');
  });
});

describe('truncateMiddle', () => {
  test('should not truncate if string is shorter than or equal to length', () => {
    expect(truncateMiddle('hello', 10)).toBe('hello');
    expect(truncateMiddle('hello', 5)).toBe('hello');
  });

  test('should truncate string in the middle', () => {
    expect(truncateMiddle('hello world', 9)).toBe('hel...rld');
    expect(truncateMiddle('abcdefghijkl', 10)).toBe('abcd...ijkl');
  });

  test('should use custom omission string', () => {
    expect(truncateMiddle('hello world', 10, '---')).toBe('hel---orld');
  });

  test('should handle edge cases where length is very small', () => {
    expect(truncateMiddle('abcdefgh', 3)).toBe('...');
    expect(truncateMiddle('abcdefgh', 4)).toBe('a...h');
  });

  test('should return an empty string for non-string input', () => {
    expect(truncateMiddle(null, 10)).toBe('');
    expect(truncateMiddle(undefined, 10)).toBe('');
    expect(truncateMiddle(123, 10)).toBe('');
  });
});
