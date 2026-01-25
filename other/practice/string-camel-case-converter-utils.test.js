const { camelCase } = require('./string-camel-case-converter-utils');

describe('camelCase', () => {
  test('should convert a space-separated string to camelCase', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
  });

  test('should convert a kebab-case string to camelCase', () => {
    expect(camelCase('hello-world')).toBe('helloWorld');
  });

  test('should convert a snake_case string to camelCase', () => {
    expect(camelCase('hello_world')).toBe('helloWorld');
  });

  test('should handle multiple spaces and special characters', () => {
    expect(camelCase('  foo   bar-baz_qux  ')).toBe('fooBarBazQux');
  });

  test('should handle leading/trailing spaces', () => {
    expect(camelCase('  leading and trailing  ')).toBe('leadingAndTrailing');
  });

  test('should handle already camelCase strings', () => {
    expect(camelCase('alreadyCamelCase')).toBe('alreadyCamelCase');
  });

  test('should handle empty string', () => {
    expect(camelCase('')).toBe('');
  });

  test('should handle single word string', () => {
    expect(camelCase('word')).toBe('word');
  });

  test('should convert PascalCase to camelCase', () => {
    expect(camelCase('HelloWorld')).toBe('helloWorld');
  });
});
