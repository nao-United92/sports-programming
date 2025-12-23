const camelCase = require('./string-camel-case-utils');

describe('camelCase', () => {
  test('should convert a dash-separated string to camel case', () => {
    expect(camelCase('foo-bar')).toBe('fooBar');
  });

  test('should convert a space-separated string to camel case', () => {
    expect(camelCase('foo bar')).toBe('fooBar');
  });

  test('should convert an underscore-separated string to camel case', () => {
    expect(camelCase('foo_bar')).toBe('fooBar');
  });

  test('should convert a mixed-separated string to camel case', () => {
    expect(camelCase('Foo Bar-baz_qux')).toBe('fooBarBazQux');
  });

  test('should handle already camel cased strings', () => {
    expect(camelCase('fooBar')).toBe('fooBar');
  });

  test('should handle empty string input', () => {
    expect(camelCase('')).toBe('');
  });

  test('should handle single word strings', () => {
    expect(camelCase('foo')).toBe('foo');
  });

  test('should handle strings with leading/trailing separators', () => {
    expect(camelCase('-foo-bar-')).toBe('fooBar');
    expect(camelCase('_foo_bar_')).toBe('fooBar');
    expect(camelCase(' foo bar ')).toBe('fooBar');
  });

  test('should handle non-string input', () => {
    expect(camelCase(null)).toBe('');
    expect(camelCase(undefined)).toBe('');
    expect(camelCase(123)).toBe('');
    expect(camelCase({})).toBe('');
  });

  test('should convert PascalCase to camelCase', () => {
    expect(camelCase('FooBar')).toBe('fooBar');
  });
});