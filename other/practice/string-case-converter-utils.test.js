const { toCamelCase, toSnakeCase, toKebabCase } = require('./string-case-converter-utils');

describe('toCamelCase', () => {
  test('should convert snake_case to camelCase', () => {
    expect(toCamelCase('hello_world')).toBe('helloWorld');
  });

  test('should convert kebab-case to camelCase', () => {
    expect(toCamelCase('hello-world')).toBe('helloWorld');
  });

  test('should handle already camelCase string', () => {
    expect(toCamelCase('helloWorld')).toBe('helloWorld');
  });

  test('should handle empty string', () => {
    expect(toCamelCase('')).toBe('');
  });

  test('should handle multiple delimiters', () => {
    expect(toCamelCase('my-super_long-string')).toBe('mySuperLongString');
  });
});

describe('toSnakeCase', () => {
  test('should convert camelCase to snake_case', () => {
    expect(toSnakeCase('helloWorld')).toBe('hello_world');
  });

  test('should convert kebab-case to snake_case', () => {
    expect(toSnakeCase('hello-world')).toBe('hello_world');
  });

  test('should handle already snake_case string', () => {
    expect(toSnakeCase('hello_world')).toBe('hello_world');
  });

  test('should handle empty string', () => {
    expect(toSnakeCase('')).toBe('');
  });

  test('should handle multiple capital letters and spaces', () => {
    expect(toSnakeCase('mySuperLongString with Spaces')).toBe('my_super_long_string_with_spaces');
  });
});

describe('toKebabCase', () => {
  test('should convert camelCase to kebab-case', () => {
    expect(toKebabCase('helloWorld')).toBe('hello-world');
  });

  test('should convert snake_case to kebab-case', () => {
    expect(toKebabCase('hello_world')).toBe('hello-world');
  });

  test('should handle already kebab-case string', () => {
    expect(toKebabCase('hello-world')).toBe('hello-world');
  });

  test('should handle empty string', () => {
    expect(toKebabCase('')).toBe('');
  });

  test('should handle multiple capital letters and spaces', () => {
    expect(toKebabCase('mySuperLongString with Spaces')).toBe('my-super-long-string-with-spaces');
  });
});