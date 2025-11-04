
import { toKebabCase } from './string-case-kebab-utils.js';

describe('toKebabCase', () => {
  test('should convert various cases to kebab-case', () => {
    expect(toKebabCase('__FOO_BAR__')).toBe('foo-bar');
    expect(toKebabCase('fooBar')).toBe('foo-bar');
    expect(toKebabCase('Foo Bar')).toBe('foo-bar');
    expect(toKebabCase('--foo-bar--')).toBe('foo-bar');
    expect(toKebabCase('FOO BAR')).toBe('foo-bar');
  });

  test('should handle single words', () => {
    expect(toKebabCase('foo')).toBe('foo');
    expect(toKebabCase('FOO')).toBe('foo');
  });

  test('should return an empty string for empty or invalid input', () => {
    expect(toKebabCase('')).toBe('');
    expect(toKebabCase(null)).toBe('');
    expect(toKebabCase(undefined)).toBe('');
  });
});
