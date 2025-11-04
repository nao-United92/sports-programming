
import { toSnakeCase } from './string-case-snake-utils.js';

describe('toSnakeCase', () => {
  test('should convert various cases to snake_case', () => {
    expect(toSnakeCase('__FOO_BAR__')).toBe('foo_bar');
    expect(toSnakeCase('fooBar')).toBe('foo_bar');
    expect(toSnakeCase('Foo Bar')).toBe('foo_bar');
    expect(toSnakeCase('--foo-bar--')).toBe('foo_bar');
    expect(toSnakeCase('FOO BAR')).toBe('foo_bar');
  });

  test('should handle single words', () => {
    expect(toSnakeCase('foo')).toBe('foo');
    expect(toSnakeCase('FOO')).toBe('foo');
  });

  test('should return an empty string for empty or invalid input', () => {
    expect(toSnakeCase('')).toBe('');
    expect(toSnakeCase(null)).toBe('');
    expect(toSnakeCase(undefined)).toBe('');
  });
});
