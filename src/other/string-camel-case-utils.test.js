import { toCamelCase } from './string-camel-case-utils.js';

describe('toCamelCase', () => {
  test('should convert a snake_case string to camelCase', () => {
    expect(toCamelCase('foo_bar')).toBe('fooBar');
  });

  test('should convert a kebab-case string to camelCase', () => {
    expect(toCamelCase('foo-bar')).toBe('fooBar');
  });

  test('should convert a string with spaces to camelCase', () => {
    expect(toCamelCase('foo bar')).toBe('fooBar');
  });

  test('should handle a string that is already in camelCase', () => {
    expect(toCamelCase('fooBar')).toBe('fooBar');
  });

  test('should handle a string with leading and trailing separators', () => {
    expect(toCamelCase('_foo_bar_')).toBe('fooBar');
  });

  test('should handle a string with multiple separators', () => {
    expect(toCamelCase('__foo--bar__')).toBe('fooBar');
  });

  test('should handle an empty string', () => {
    expect(toCamelCase('')).toBe('');
  });

  test('should handle a null or undefined input', () => {
    expect(toCamelCase(null)).toBe('');
    expect(toCamelCase(undefined)).toBe('');
  });

  test('should handle a string with all caps', () => {
    expect(toCamelCase('FOO_BAR')).toBe('fooBar');
  });

  test('should handle a string with numbers', () => {
    expect(toCamelCase('foo_1_bar')).toBe('foo1Bar');
  });
});
