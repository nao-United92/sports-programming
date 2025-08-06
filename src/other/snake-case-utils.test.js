import { snakeCase } from './snake-case-utils.js';

describe('snakeCase', () => {
  test('should convert camelCase to snake_case', () => {
    expect(snakeCase('fooBar')).toBe('foo_bar');
  });

  test('should convert PascalCase to snake_case', () => {
    expect(snakeCase('FooBar')).toBe('foo_bar');
  });

  test('should handle strings with spaces', () => {
    expect(snakeCase('Foo Bar')).toBe('foo_bar');
  });

  test('should handle strings with hyphens', () => {
    expect(snakeCase('--foo-bar--')).toBe('foo_bar');
  });

  test('should handle already snake_cased strings', () => {
    expect(snakeCase('foo_bar')).toBe('foo_bar');
  });

  test('should handle complex strings', () => {
    expect(snakeCase('__FOO_BAR__')).toBe('foo_bar');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(snakeCase(null)).toBe('');
    expect(snakeCase(undefined)).toBe('');
    expect(snakeCase(123)).toBe('');
  });

  test('should handle single words', () => {
    expect(snakeCase('foo')).toBe('foo');
    expect(snakeCase('FOO')).toBe('foo');
  });
});