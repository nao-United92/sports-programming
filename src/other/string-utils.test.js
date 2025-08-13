const { truncate } = require('./string-utils');

describe('truncate', () => {
  test('should not truncate a string shorter than the specified length', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  test('should truncate a string longer than the specified length', () => {
    expect(truncate('hello world', 8)).toBe('hello...');
  });

  test('should return the string itself if its length is equal to the specified length', () => {
    expect(truncate('hello', 5)).toBe('hello');
  });

  test('should use a custom suffix if provided', () => {
    expect(truncate('hello world', 8, '... more')).toBe('h... more');
  });

  test('should handle empty string', () => {
    expect(truncate('', 10)).toBe('');
  });

  test('should handle zero length', () => {
    expect(truncate('hello', 0)).toBe('');
  });
});
