const { kebabCase } = require('./string-kebab-case-utils.js');

describe('kebabCase', () => {
  test('should convert a string to kebab case', () => {
    expect(kebabCase('Foo Bar')).toBe('foo-bar');
    expect(kebabCase('fooBar')).toBe('foo-bar');
    expect(kebabCase('__FOO_BAR__')).toBe('foo-bar');
    expect(kebabCase('foo-bar')).toBe('foo-bar');
  });

  test('should handle empty string', () => {
    expect(kebabCase('')).toBe('');
  });

  test('should handle single word string', () => {
    expect(kebabCase('foo')).toBe('foo');
    expect(kebabCase('Foo')).toBe('foo');
  });

  test('should handle non-string input', () => {
    expect(kebabCase(null)).toBe('');
    expect(kebabCase(undefined)).toBe('');
    expect(kebabCase(123)).toBe('');
  });
});