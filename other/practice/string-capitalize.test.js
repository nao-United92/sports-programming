const capitalize = require('./string-capitalize');

describe('capitalize', () => {
  test('should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('should return an empty string if given an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('should handle a string that is already capitalized', () => {
    expect(capitalize('World')).toBe('World');
  });

  test('should handle a single character string', () => {
    expect(capitalize('a')).toBe('A');
  });

  test('should not affect subsequent characters', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });

  test('should handle strings with leading spaces', () => {
    expect(capitalize(' hello')).toBe(' hello'); // Only the first char is affected, which is a space
  });

  test('should throw an error if the argument is not a string', () => {
    expect(() => capitalize(null)).toThrow('Argument must be a string.');
    expect(() => capitalize(123)).toThrow('Argument must be a string.');
    expect(() => capitalize([])).toThrow('Argument must be a string.');
  });
});
