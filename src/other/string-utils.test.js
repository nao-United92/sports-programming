const { truncate } = require('./string-utils.js');

describe('truncate', () => {
  test('should not truncate a string shorter than the specified length', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  test('should truncate a string longer than the specified length', () => {
    expect(truncate('hello world', 5)).toBe('hello...');
  });

  test('should return the same string if length is equal', () => {
    expect(truncate('hello', 5)).toBe('hello');
  });

  test('should handle empty string', () => {
    expect(truncate('', 5)).toBe('');
  });

  test('should handle zero length', () => {
    expect(truncate('hello', 0)).toBe('...');
  });

  test('should handle length less than 3 for ellipsis', () => {
    expect(truncate('hello', 1)).toBe('h...');
    expect(truncate('hello', 2)).toBe('he...');
  });
});