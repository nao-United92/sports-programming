import { truncate } from './string-truncate-utils.js';

describe('truncate', () => {
  test('should truncate a string to a specified length', () => {
    expect(truncate('hello world', 7)).toBe('hell...');
  });

  test('should not truncate if string is shorter than length', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  test('should handle empty string', () => {
    expect(truncate('', 5)).toBe('');
  });

  test('should handle non-string inputs', () => {
    expect(truncate(null, 5)).toBe('');
    expect(truncate(undefined, 5)).toBe('');
    expect(truncate(123, 5)).toBe('');
  });

  test('should handle length less than omission length', () => {
    expect(truncate('hello world', 2)).toBe('..');
  });

  test('should use custom omission', () => {
    expect(truncate('hello world', 7, '--')).toBe('hello--');
  });
});
