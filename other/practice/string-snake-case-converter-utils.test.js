const { snakeCase } = require('./string-snake-case-converter-utils');

describe('snakeCase', () => {
  test('should convert a space-separated string to snake_case', () => {
    expect(snakeCase('hello world')).toBe('hello_world');
  });

  test('should convert a kebab-case string to snake_case', () => {
    expect(snakeCase('hello-world')).toBe('hello_world');
  });

  test('should convert a camelCase string to snake_case', () => {
    expect(snakeCase('helloWorld')).toBe('hello_world');
  });

  test('should handle multiple spaces and special characters', () => {
    expect(snakeCase('  foo   bar-baz_qux  ')).toBe('foo_bar_baz_qux');
  });

  test('should handle leading/trailing spaces', () => {
    expect(snakeCase('  leading and trailing  ')).toBe('leading_and_trailing');
  });

  test('should handle already snake_case strings', () => {
    expect(snakeCase('already_snake_case')).toBe('already_snake_case');
  });

  test('should handle empty string', () => {
    expect(snakeCase('')).toBe('');
  });

  test('should handle single word string', () => {
    expect(snakeCase('word')).toBe('word');
  });

  test('should handle PascalCase to snake_case', () => {
    expect(snakeCase('PascalCaseString')).toBe('pascal_case_string');
  });
});
