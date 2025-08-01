
import { kebabCase } from './kebab-case-utils.js';

describe('kebabCase', () => {
  test('should convert a camelCase string to kebab-case', () => {
    expect(kebabCase('fooBar')).toBe('foo-bar');
    expect(kebabCase('fooBarBaz')).toBe('foo-bar-baz');
  });

  test('should convert a PascalCase string to kebab-case', () => {
    expect(kebabCase('FooBar')).toBe('foo-bar');
    expect(kebabCase('FooBarBaz')).toBe('foo-bar-baz');
  });

  test('should convert a snake_case string to kebab-case', () => {
    expect(kebabCase('foo_bar')).toBe('foo-bar');
    expect(kebabCase('foo_bar_baz')).toBe('foo-bar-baz');
  });

  test('should convert a space separated string to kebab-case', () => {
    expect(kebabCase('foo bar')).toBe('foo-bar');
    expect(kebabCase('foo bar baz')).toBe('foo-bar-baz');
  });

  test('should handle strings with numbers', () => {
    expect(kebabCase('fooBar123')).toBe('foo-bar123');
    expect(kebabCase('foo123Bar')).toBe('foo123-bar');
  });

  test('should handle empty strings', () => {
    expect(kebabCase('')).toBe('');
  });

  test('should handle single word strings', () => {
    expect(kebabCase('foo')).toBe('foo');
    expect(kebabCase('FOO')).toBe('foo');
  });

  test('should handle non-string inputs gracefully', () => {
    expect(kebabCase(null)).toBe('');
    expect(kebabCase(undefined)).toBe('');
    expect(kebabCase(123)).toBe('');
    expect(kebabCase({})).toBe('');
  });
});
