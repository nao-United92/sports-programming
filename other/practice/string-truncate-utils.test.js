const truncate = require('./string-truncate-utils');

describe('truncate', () => {
  test('should return the original string if its length is less than or equal to maxLength', () => {
    expect(truncate('Hello World', 20)).toBe('Hello World');
    expect(truncate('Short', 5)).toBe('Short');
  });

  test('should truncate string and add ellipsis if longer than maxLength', () => {
    expect(truncate('Hello World', 10)).toBe('Hello W...');
    expect(truncate('Long string example', 7)).toBe('Long...');
  });

  test('should use custom ellipsis', () => {
    expect(truncate('Hello World', 8, '...')).toBe('Hello...'); // Default ellipsis
    expect(truncate('Hello World', 8, '...')).toBe('Hello...');
    expect(truncate('Hello World', 7, '..')).toBe('Hello..');
    expect(truncate('Hello World', 10, '---')).toBe('Hello W---');
  });

  test('should return only ellipsis if maxLength is less than or equal to ellipsis length', () => {
    expect(truncate('Hello World', 3)).toBe('...');
    expect(truncate('Hello World', 2, '..')).toBe('..');
    expect(truncate('Hello World', 1, '.')).toBe('.');
    expect(truncate('Hello World', 0, '')).toBe('');
    expect(truncate('Hello World', 0)).toBe(''); // default ellipsis '...' has length 3
  });

  test('should throw an error for negative maxLength', () => {
    expect(() => truncate('Hello World', -5)).toThrow('maxLength must be a non-negative number.');
  });

  test('should throw an error for non-numeric maxLength', () => {
    expect(() => truncate('Hello World', 'abc')).toThrow('maxLength must be a non-negative number.');
    expect(() => truncate('Hello World', null)).toThrow('maxLength must be a non-negative number.');
  });

  test('should handle empty string input', () => {
    expect(truncate('', 5)).toBe('');
    expect(truncate('', 0)).toBe('');
  });

  test('should return empty string for non-string input', () => {
    expect(truncate(123, 5)).toBe('');
    expect(truncate(null, 5)).toBe('');
    expect(truncate(undefined, 5)).toBe('');
    expect(truncate({}, 5)).toBe('');
  });
});
