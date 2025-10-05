
const { truncate } = require('./string-truncate-utils');

describe('truncate', () => {
  test('should not truncate a string shorter than the specified length', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  test('should truncate a string longer than the specified length', () => {
    expect(truncate('hello world', 5)).toBe('hello...');
  });

  test('should return the same string if length is equal to string length', () => {
    expect(truncate('hello', 5)).toBe('hello');
  });

  test('should handle empty strings', () => {
    expect(truncate('', 5)).toBe('');
  });

  test('should handle zero length', () => {
    expect(truncate('hello', 0)).toBe('...');
  });
});
