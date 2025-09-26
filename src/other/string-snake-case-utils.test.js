const { snakeCase } = require('./string-snake-case-utils.js');

describe('snakeCase', () => {
  test('should convert a string to snake case', () => {
    expect(snakeCase('Foo Bar')).toBe('foo_bar');
    expect(snakeCase('fooBar')).toBe('foo_bar');
    expect(snakeCase('__FOO_BAR__')).toBe('foo_bar');
    expect(snakeCase('foo-bar')).toBe('foo_bar');
  });

  test('should handle empty string', () => {
    expect(snakeCase('')).toBe('');
  });

  test('should handle single word string', () => {
    expect(snakeCase('foo')).toBe('foo');
    expect(snakeCase('Foo')).toBe('foo');
  });

  test('should handle non-string input', () => {
    expect(snakeCase(null)).toBe('');
    expect(snakeCase(undefined)).toBe('');
    expect(snakeCase(123)).toBe('');
  });
});
