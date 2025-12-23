const toKebabCase = require('./string-kebab-case-utils');

describe('toKebabCase', () => {
  it('should convert a camelCased string to kebab-case', () => {
    expect(toKebabCase('helloWorld')).toBe('hello-world');
  });

  it('should convert a snake_cased string to kebab-case', () => {
    expect(toKebabCase('hello_world')).toBe('hello-world');
  });

  it('should convert a space-separated string to kebab-case', () => {
    expect(toKebabCase('hello world')).toBe('hello-world');
  });

  it('should handle strings that are already kebab-cased', () => {
    expect(toKebabCase('hello-world')).toBe('hello-world');
  });

  it('should handle strings with multiple uppercase letters', () => {
    expect(toKebabCase('FooBarBaz')).toBe('foo-bar-baz');
  });

  it('should handle leading and trailing spaces by trimming them', () => {
    expect(toKebabCase('  hello world  ')).toBe('hello-world');
  });

  it('should return an empty string for non-string inputs', () => {
    expect(toKebabCase(null)).toBe('');
    expect(toKebabCase(undefined)).toBe('');
    expect(toKebabCase(123)).toBe('');
  });
});