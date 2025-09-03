import { truncate } from './string-truncate-utils.js';

describe('truncate', () => {
  test('should not truncate a string shorter than the specified length', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  test('should truncate a string longer than the specified length', () => {
    expect(truncate('hello world', 8)).toBe('hello...');
  });

  test('should use a custom suffix if provided', () => {
    expect(truncate('hello world', 8, '...')).toBe('hello...');
  });

  test('should handle edge cases', () => {
    expect(truncate('hello', 5)).toBe('hello');
    expect(truncate('hello', 4)).toBe('h...');
    expect(truncate('', 10)).toBe('');
  });
});