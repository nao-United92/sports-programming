const { camelCase } = require('./string-camel-case-utils.js');

describe('camelCase', () => {
  test('should convert a string to camel case', () => {
    expect(camelCase('Foo Bar')).toBe('fooBar');
    expect(camelCase('--foo-bar--')).toBe('fooBar');
    expect(camelCase('__FOO_BAR__')).toBe('fooBar');
    expect(camelCase('fooBar')).toBe('fooBar');
    expect(camelCase('foo bar')).toBe('fooBar');
    expect(camelCase('foo-bar')).toBe('fooBar');
  });

  test('should handle empty string', () => {
    expect(camelCase('')).toBe('');
  });

  test('should handle single word string', () => {
    expect(camelCase('foo')).toBe('foo');
    expect(camelCase('Foo')).toBe('foo');
  });

  test('should handle non-string input', () => {
    expect(camelCase(null)).toBe('');
    expect(camelCase(undefined)).toBe('');
    expect(camelCase(123)).toBe('');
  });
});