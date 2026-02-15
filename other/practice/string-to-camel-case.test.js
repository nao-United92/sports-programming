const toCamelCase = require('./string-to-camel-case');

describe('toCamelCase', () => {
  test('should convert a dash-separated string to camelCase', () => {
    expect(toCamelCase('hello-world')).toBe('helloWorld');
  });

  test('should convert a space-separated string to camelCase', () => {
    expect(toCamelCase('hello world')).toBe('helloWorld');
  });

  test('should convert an underscore-separated string to camelCase', () => {
    expect(toCamelCase('hello_world')).toBe('helloWorld');
  });

  test('should convert a mixed-separator string to camelCase', () => {
    expect(toCamelCase('hello-world_again and-again')).toBe('helloWorldAgainAndAgain');
  });

  test('should handle a string that is already camelCase', () => {
    expect(toCamelCase('alreadyCamelCase')).toBe('alreadyCamelCase');
  });

  test('should handle a single word string', () => {
    expect(toCamelCase('word')).toBe('word');
  });

  test('should handle an empty string', () => {
    expect(toCamelCase('')).toBe('');
  });

  test('should handle a string with leading/trailing separators', () => {
    expect(toCamelCase('-hello-world-')).toBe('helloWorld');
    expect(toCamelCase('_hello_world_')).toBe('helloWorld');
    expect(toCamelCase(' hello world ')).toBe('helloWorld');
  });

  test('should handle a string with numbers', () => {
    expect(toCamelCase('some-value-123')).toBe('someValue123');
  });

  test('should throw an error if the argument is not a string', () => {
    expect(() => toCamelCase(null)).toThrow('Argument must be a string.');
    expect(() => toCamelCase(123)).toThrow('Argument must be a string.');
    expect(() => toCamelCase([])).toThrow('Argument must be a string.');
  });
});
