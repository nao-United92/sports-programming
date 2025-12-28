const { camelCase } = require('./string-camel-case-utils');

describe('camelCase', () => {
  it('should convert snake_case to camelCase', () => {
    expect(camelCase('foo_bar_baz')).toBe('fooBarBaz');
  });

  it('should convert kebab-case to camelCase', () => {
    expect(camelCase('foo-bar-baz')).toBe('fooBarBaz');
  });

  it('should convert space separated words to camelCase', () => {
    expect(camelCase('Foo Bar Baz')).toBe('fooBarBaz');
  });

  it('should handle already camelCased strings', () => {
    expect(camelCase('fooBarBaz')).toBe('fooBarBaz');
  });

  it('should handle strings with leading and trailing spaces', () => {
    expect(camelCase('  foo bar  ')).toBe('fooBar');
  });

  it('should handle strings with mixed separators', () => {
    expect(camelCase('__FOO-BAR__')).toBe('fooBar');
  });

  it('should return an empty string for null or undefined input', () => {
    expect(camelCase(null)).toBe('');
    expect(camelCase(undefined)).toBe('');
  });
});