const kebabCase = require('./string-kebab-case-utils');

describe('kebabCase', () => {
  test('should convert a camelCase string to kebab-case', () => {
    expect(kebabCase('fooBar')).toBe('foo-bar');
  });

  test('should convert a PascalCase string to kebab-case', () => {
    expect(kebabCase('FooBar')).toBe('foo-bar');
  });

  test('should convert a space-separated string to kebab-case', () => {
    expect(kebabCase('foo bar')).toBe('foo-bar');
  });

  test('should convert an underscore-separated string to kebab-case', () => {
    expect(kebabCase('foo_bar')).toBe('foo-bar');
  });

  test('should handle mixed separators', () => {
    expect(kebabCase('Foo Bar-baz_qux')).toBe('foo-bar-baz-qux');
  });

  test('should handle empty string input', () => {
    expect(kebabCase('')).toBe('');
  });

  test('should handle single word strings', () => {
    expect(kebabCase('foo')).toBe('foo');
  });

  test('should handle strings with leading/trailing separators', () => {
    expect(kebabCase('-foo-bar-')).toBe('foo-bar');
    expect(kebabCase('_foo_bar_')).toBe('foo-bar');
    expect(kebabCase(' foo bar ')).toBe('foo-bar');
  });

  test('should handle non-string input', () => {
    expect(kebabCase(null)).toBe('');
    expect(kebabCase(undefined)).toBe('');
    expect(kebabCase(123)).toBe('');
    expect(kebabCase({})).toBe('');
  });

  test('should handle string with multiple consecutive non-alphanumeric characters', () => {
    expect(kebabCase('foo--bar')).toBe('foo-bar');
    expect(kebabCase('foo__bar')).toBe('foo-bar');
    expect(kebabCase('foo  bar')).toBe('foo-bar');
  });
});
