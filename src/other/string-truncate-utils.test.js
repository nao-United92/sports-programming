import { truncate } from './string-truncate-utils.js';

describe('truncate', () => {
  test('should not truncate a string shorter than the specified length', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  test('should truncate a string longer than the specified length', () => {
    expect(truncate('hello world', 8)).toBe('hello...');
  });

  test('should handle an empty string', () => {
    expect(truncate('', 5)).toBe('');
  });

  test('should handle a string equal to the specified length', () => {
    expect(truncate('hello', 5)).toBe('hello');
  });
});