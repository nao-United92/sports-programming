const { kebabCase } = require('./string-kebab-case-converter-utils');

describe('kebabCase', () => {
  test('should convert a space-separated string to kebab-case', () => {
    expect(kebabCase('hello world')).toBe('hello-world');
  });

  test('should convert a snake_case string to kebab-case', () => {
    expect(kebabCase('hello_world')).toBe('hello-world');
  });

  test('should convert a camelCase string to kebab-case', () => {
    expect(kebabCase('helloWorld')).toBe('hello-world');
  });

  test('should handle multiple spaces and special characters', () => {
    expect(kebabCase('  foo   bar_baz-qux  ')).toBe('foo-bar-baz-qux');
  });

  test('should handle leading/trailing spaces', () => {
    expect(kebabCase('  leading and trailing  ')).toBe('leading-and-trailing');
  });

  test('should handle already kebab-case strings', () => {
    expect(kebabCase('already-kebab-case')).toBe('already-kebab-case');
  });

  test('should handle empty string', () => {
    expect(kebabCase('')).toBe('');
  });

  test('should handle single word string', () => {
    expect(kebabCase('word')).toBe('word');
  });

  test('should handle PascalCase to kebab-case', () => {
    expect(kebabCase('PascalCaseString')).toBe('pascal-case-string');
  });
});
