const { toCamelCase } = require('./string-to-camel-case');

describe('toCamelCase', () => {
  it('should convert snake_case to camelCase', () => {
    expect(toCamelCase('hello_world')).toBe('helloWorld');
  });

  it('should convert kebab-case to camelCase', () => {
    expect(toCamelCase('hello-world')).toBe('helloWorld');
  });

  it('should convert space-separated strings to camelCase', () => {
    expect(toCamelCase('hello world')).toBe('helloWorld');
  });

  it('should handle strings with multiple separators', () => {
    expect(toCamelCase('__FOO-BAR__')).toBe('fooBar');
  });

  it('should handle an already camelCased string', () => {
    expect(toCamelCase('helloWorld')).toBe('helloWorld');
  });

  it('should handle leading separators', () => {
    expect(toCamelCase('_hello_world')).toBe('helloWorld');
  });

  it('should return an empty string if input is empty or not a string', () => {
    expect(toCamelCase('')).toBe('');
    expect(toCamelCase(null)).toBe('');
    expect(toCamelCase(undefined)).toBe('');
  });

  it('should handle single words', () => {
    expect(toCamelCase('word')).toBe('word');
  });
});
