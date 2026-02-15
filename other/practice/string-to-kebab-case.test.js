const toKebabCase = require('./string-to-kebab-case');

describe('toKebabCase', () => {
  test('should convert a camelCase string to kebab-case', () => {
    expect(toKebabCase('helloWorld')).toBe('hello-world');
  });

  test('should convert a PascalCase string to kebab-case', () => {
    expect(toKebabCase('HelloWorld')).toBe('hello-world');
  });

  test('should convert a space-separated string to kebab-case', () => {
    expect(toKebabCase('hello world')).toBe('hello-world');
  });

  test('should convert an underscore-separated string to kebab-case', () => {
    expect(toKebabCase('hello_world')).toBe('hello-world');
  });

  test('should convert a mixed-separator string to kebab-case', () => {
    expect(toKebabCase('hello-World_again And-Again')).toBe('hello-world-again-and-again');
  });

  test('should handle a single word string', () => {
    expect(toKebabCase('word')).toBe('word');
  });

  test('should handle an empty string', () => {
    expect(toKebabCase('')).toBe('');
  });

  test('should handle a string with leading/trailing spaces/separators', () => {
    expect(toKebabCase(' Hello World ')).toBe('hello-world');
    expect(toKebabCase('-hello-world-')).toBe('hello-world');
    expect(toKebabCase('_hello_world_')).toBe('hello-world');
  });

  test('should handle a string with numbers', () => {
    expect(toKebabCase('someValue123')).toBe('some-value123');
    expect(toKebabCase('some-value-123')).toBe('some-value-123');
  });

  test('should throw an error if the argument is not a string', () => {
    expect(() => toKebabCase(null)).toThrow('Argument must be a string.');
    expect(() => toKebabCase(123)).toThrow('Argument must be a string.');
    expect(() => toKebabCase([])).toThrow('Argument must be a string.');
  });
});
