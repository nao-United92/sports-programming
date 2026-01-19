const { camelCase } = require('./string-camel-case-utils');

describe('camelCase', () => {
  it('should convert a snake_case string to camelCase', () => {
    expect(camelCase('hello_world')).toBe('helloWorld');
  });

  it('should convert a kebab-case string to camelCase', () => {
    expect(camelCase('hello-world')).toBe('helloWorld');
  });

  it('should convert a space-separated string to camelCase', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
  });

  it('should convert a mixed case string to camelCase', () => {
    expect(camelCase('Foo Bar')).toBe('fooBar');
  });

  it('should handle strings with multiple separators', () => {
    expect(camelCase('foo--bar__baz')).toBe('fooBarBaz');
  });

  it('should handle leading/trailing separators', () => {
    expect(camelCase('-foo-bar')).toBe('fooBar');
    expect(camelCase('foo-bar-')).toBe('fooBar');
  });

  it('should handle single word strings', () => {
    expect(camelCase('hello')).toBe('hello');
  });

  it('should handle empty strings', () => {
    expect(camelCase('')).toBe('');
  });
});
