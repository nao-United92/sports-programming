import { truncate } from './string-utils.js';

describe('truncate', () => {
  test('should not truncate a string shorter than the specified length', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  test('should truncate a string longer than the specified length', () => {
    expect(truncate('hello world', 8)).toBe('hello...');
  });

  test('should use the default suffix', () => {
    expect(truncate('a long sentence', 10)).toBe('a long...');
  });

  test('should use a custom suffix', () => {
    expect(truncate('a long sentence', 10, '!!!')).toBe('a long !!!');
  });

  test('should handle edge case where length is equal to string length', () => {
    expect(truncate('exact', 5)).toBe('exact');
  });

  test('should handle edge case where length is very small', () => {
    expect(truncate('a long sentence', 3)).toBe('...');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(truncate(null, 10)).toBe('');
    expect(truncate(undefined, 10)).toBe('');
    expect(truncate(123, 10)).toBe('');
    expect(truncate({}, 10)).toBe('');
    expect(truncate([], 10)).toBe('');
  });
});
