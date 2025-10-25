const { truncate } = require('./string-truncate-utils');

describe('truncate', () => {
  test('should not truncate a string shorter than the specified length', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  test('should not truncate a string equal to the specified length', () => {
    expect(truncate('hello', 5)).toBe('hello');
  });

  test('should truncate a string longer than the specified length', () => {
    expect(truncate('hello world', 5)).toBe('hello...');
  });

  test('should use a custom suffix if provided', () => {
    expect(truncate('hello world', 8, '--')).toBe('hello wo--');
  });

  test('should handle an empty string', () => {
    expect(truncate('', 5)).toBe('');
  });

  test('should handle zero length', () => {
    expect(truncate('hello', 0)).toBe('...');
  });

  test('should throw an error for invalid argument types', () => {
    expect(() => truncate(123, 5)).toThrow('Invalid arguments: str must be a string and length must be a number.');
    expect(() => truncate('hello', '5')).toThrow('Invalid arguments: str must be a string and length must be a number.');
  });
});