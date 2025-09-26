const { pascalCase } = require('./string-pascal-case-utils.js');

describe('pascalCase', () => {
  test('should convert a string to PascalCase', () => {
    expect(pascalCase('Foo Bar')).toBe('FooBar');
    expect(pascalCase('--foo-bar--')).toBe('FooBar');
    expect(pascalCase('__FOO_BAR__')).toBe('FooBar');
    expect(pascalCase('fooBar')).toBe('FooBar');
    expect(pascalCase('foo bar')).toBe('FooBar');
    expect(pascalCase('foo-bar')).toBe('FooBar');
  });

  test('should handle empty string', () => {
    expect(pascalCase('')).toBe('');
  });

  test('should handle single word string', () => {
    expect(pascalCase('foo')).toBe('Foo');
    expect(pascalCase('Foo')).toBe('Foo');
  });

  test('should handle non-string input', () => {
    expect(pascalCase(null)).toBe('');
    expect(pascalCase(undefined)).toBe('');
    expect(pascalCase(123)).toBe('');
  });
});