
import { truncate, repeat } from './string-manipulation-utils.js';

describe('truncate', () => {
  test('should not truncate if string is shorter than or equal to maxLength', () => {
    expect(truncate('test', 10)).toBe('test');
    expect(truncate('test', 4)).toBe('test');
  });

  test('should truncate string and add default suffix', () => {
    expect(truncate('hello world', 8)).toBe('hello...');
  });

  test('should truncate string and add custom suffix', () => {
    expect(truncate('hello world', 8, '..')).toBe('hello ..');
  });

  test('should return only a truncated suffix if maxLength is too small', () => {
    expect(truncate('hello world', 3)).toBe('...');
    expect(truncate('hello world', 2)).toBe('..');
  });

  test('should return an empty string if maxLength is 0', () => {
    expect(truncate('hello world', 0)).toBe('');
  });

  test('should handle empty string input', () => {
    expect(truncate('', 5)).toBe('');
  });
});

describe('repeat', () => {
  test('should repeat the string a specified number of times', () => {
    expect(repeat('abc', 3)).toBe('abcabcabc');
  });

  test('should return an empty string if times is 0', () => {
    expect(repeat('abc', 0)).toBe('');
  });

  test('should handle empty string input', () => {
    expect(repeat('', 5)).toBe('');
  });

  test('should handle negative times (though String.prototype.repeat handles this by throwing an error)', () => {
    // JavaScript's String.prototype.repeat throws a RangeError for negative counts.
    // Our wrapper simply calls it, so it should also throw.
    expect(() => repeat('abc', -1)).toThrow(RangeError);
  });
});
