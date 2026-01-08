import snakeCase from './string-snake-case-utils';

describe('snakeCase', () => {
  test('should convert camelCase to snake_case', () => {
    expect(snakeCase('helloWorld')).toBe('hello_world');
    expect(snakeCase('fooBarBaz')).toBe('foo_bar_baz');
  });

  test('should convert PascalCase to snake_case', () => {
    expect(snakeCase('HelloWorld')).toBe('hello_world');
    expect(snakeCase('FooBarBaz')).toBe('foo_bar_baz');
  });

  test('should convert kebab-case to snake_case', () => {
    expect(snakeCase('hello-world')).toBe('hello_world');
    expect(snakeCase('foo-bar-baz')).toBe('foo_bar_baz');
  });

  test('should convert space-separated words to snake_case', () => {
    expect(snakeCase('Hello World')).toBe('hello_world');
    expect(snakeCase('foo bar baz')).toBe('foo_bar_baz');
  });

  test('should handle mixed delimiters', () => {
    expect(snakeCase('Hello-world_this Is A-test')).toBe('hello_world_this_is_a_test');
  });

  test('should handle leading/trailing spaces and multiple delimiters', () => {
    expect(snakeCase('  --Hello World--  ')).toBe('hello_world');
    expect(snakeCase('__foo   bar__')).toBe('foo_bar');
  });

  test('should handle strings with numbers', () => {
    expect(snakeCase('fooBar123')).toBe('foo_bar_123');
    expect(snakeCase('foo-123-bar')).toBe('foo_123_bar');
  });

  test('should handle empty string', () => {
    expect(snakeCase('')).toBe('');
  });

  test('should throw TypeError if argument is not a string', () => {
    expect(() => snakeCase(null)).toThrow(TypeError);
    expect(() => snakeCase(undefined)).toThrow(TypeError);
    expect(() => snakeCase(123)).toThrow(TypeError);
    expect(() => snakeCase({})).toThrow(TypeError);
  });
});