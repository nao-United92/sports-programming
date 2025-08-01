
import { camelCase } from './camel-case-utils.js';

describe('camelCase', () => {
  test('should convert a kebab-case string to camelCase', () => {
    expect(camelCase('foo-bar')).toBe('fooBar');
    expect(camelCase('foo-bar-baz')).toBe('fooBarBaz');
  });

  test('should convert a snake_case string to camelCase', () => {
    expect(camelCase('foo_bar')).toBe('fooBar');
    expect(camelCase('foo_bar_baz')).toBe('fooBarBaz');
  });

  test('should convert a space separated string to camelCase', () => {
    expect(camelCase('foo bar')).toBe('fooBar');
    expect(camelCase('foo bar baz')).toBe('fooBarBaz');
  });

  test('should handle strings with numbers', () => {
    expect(camelCase('foo-bar-123')).toBe('fooBar123');
    expect(camelCase('foo123-bar')).toBe('foo123Bar');
  });

  test('should handle empty strings', () => {
    expect(camelCase('')).toBe('');
  });

  test('should handle single word strings', () => {
    expect(camelCase('foo')).toBe('foo');
    expect(camelCase('FOO')).toBe('foo');
  });

  test('should handle non-string inputs gracefully', () => {
    expect(camelCase(null)).toBe('');
    expect(camelCase(undefined)).toBe('');
    expect(camelCase(123)).toBe('');
    expect(camelCase({})).toBe('');
  });

  test('should convert PascalCase to camelCase', () => {
    expect(camelCase('FooBar')).toBe('fooBar');
    expect(camelCase('FooBarBaz')).toBe('fooBarBaz');
  });
});
