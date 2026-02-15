const toSnakeCase = require('./string-to-snake-case');

describe('toSnakeCase', () => {
  test('should convert a camelCase string to snake_case', () => {
    expect(toSnakeCase('helloWorld')).toBe('hello_world');
  });

  test('should convert a PascalCase string to snake_case', () => {
    expect(toSnakeCase('HelloWorld')).toBe('hello_world');
  });

  test('should convert a space-separated string to snake_case', () => {
    expect(toSnakeCase('hello world')).toBe('hello_world');
  });

  test('should convert a dash-separated string to snake_case', () => {
    expect(toSnakeCase('hello-world')).toBe('hello_world');
  });

  test('should convert a mixed-separator string to snake_case', () => {
    expect(toSnakeCase('hello-World_again And-Again')).toBe('hello_world_again_and_again');
  });

  test('should handle a single word string', () => {
    expect(toSnakeCase('word')).toBe('word');
  });

  test('should handle an empty string', () => {
    expect(toSnakeCase('')).toBe('');
  });

  test('should handle a string with leading/trailing spaces/separators', () => {
    expect(toSnakeCase(' Hello World ')).toBe('hello_world');
    expect(toSnakeCase('-hello-world-')).toBe('hello_world');
    expect(toSnakeCase('_hello_world_')).toBe('hello_world');
  });

  test('should handle a string with numbers', () => {
    expect(toSnakeCase('someValue123')).toBe('some_value123');
    expect(toSnakeCase('some-value-123')).toBe('some_value_123');
  });

  test('should throw an error if the argument is not a string', () => {
    expect(() => toSnakeCase(null)).toThrow('Argument must be a string.');
    expect(() => toSnakeCase(123)).toThrow('Argument must be a string.');
    expect(() => toSnakeCase([])).toThrow('Argument must be a string.');
  });
});
