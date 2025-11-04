
import { toCamelCase } from './string-case-camel-utils.js';

describe('toCamelCase', () => {
  test('should convert various cases to camelCase', () => {
    expect(toCamelCase('__FOO_BAR__')).toBe('fooBar');
    expect(toCamelCase('--foo-bar--')).toBe('fooBar');
    expect(toCamelCase('Foo Bar')).toBe('fooBar');
    expect(toCamelCase('fooBar')).toBe('fooBar');
    expect(toCamelCase('foo-bar')).toBe('fooBar');
    expect(toCamelCase('Foo-Bar')).toBe('fooBar');
    expect(toCamelCase('FOO BAR')).toBe('fooBar');
  });

  test('should handle single words', () => {
    expect(toCamelCase('foo')).toBe('foo');
    expect(toCamelCase('FOO')).toBe('foo');
  });

  test('should return an empty string for empty or invalid input', () => {
    expect(toCamelCase('')).toBe('');
    expect(toCamelCase(null)).toBe('');
    expect(toCamelCase(undefined)).toBe('');
  });
});
