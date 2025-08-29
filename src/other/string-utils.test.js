const { truncate } = require('./string-utils.js');

describe('truncate', () => {
  test('should not truncate a string shorter than the specified length', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  test('should truncate a string longer than the specified length', () => {
    expect(truncate('hello world', 8)).toBe('hello...');
  });

  test('should use a custom suffix', () => {
    expect(truncate('hello world', 9, '!!!')).toBe('hello !!!');
  });

  test('should handle edge case where length is equal to string length', () => {
    expect(truncate('hello world', 11)).toBe('hello world');
  });

  test('should handle edge case where length is less than suffix length', () => {
    expect(truncate('hello world', 2)).toBe('...');
  });
});