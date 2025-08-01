
import { snakeCase } from './snake-case-utils.js';

describe('snakeCase', () => {
  test('should convert a camelCase string to snake_case', () => {
    expect(snakeCase('fooBar')).toBe('foo_bar');
    expect(snakeCase('fooBarBaz')).toBe('foo_bar_baz');
  });

  test('should convert a PascalCase string to snake_case', () => {
    expect(snakeCase('FooBar')).toBe('foo_bar');
    expect(snakeCase('FooBarBaz')).toBe('foo_bar_baz');
  });

  test('should convert a kebab-case string to snake_case', () => {
    expect(snakeCase('foo-bar')).toBe('foo_bar');
    expect(snakeCase('foo-bar-baz')).toBe('foo_bar_baz');
  });

  test('should convert a space separated string to snake_case', () => {
    expect(snakeCase('foo bar')).toBe('foo_bar');
    expect(snakeCase('foo bar baz')).toBe('foo_bar_baz');
  });

  test('should handle strings with numbers', () => {
    expect(snakeCase('fooBar123')).toBe('foo_bar123');
    expect(snakeCase('foo123Bar')).toBe('foo123_bar');
  });

  test('should handle empty strings', () => {
    expect(snakeCase('')).toBe('');
  });

  test('should handle single word strings', () => {
    expect(snakeCase('foo')).toBe('foo');
    expect(snakeCase('FOO')).toBe('foo');
  });

  test('should handle non-string inputs gracefully', () => {
    expect(snakeCase(null)).toBe('');
    expect(snakeCase(undefined)).toBe('');
    expect(snakeCase(123)).toBe('');
    expect(snakeCase({})).toBe('');
  });
});
