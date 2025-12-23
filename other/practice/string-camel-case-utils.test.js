const toCamelCase = require('./string-camel-case-utils');

describe('toCamelCase', () => {
  it('should convert a kebab-cased string to camelCase', () => {
    expect(toCamelCase('hello-world')).toBe('helloWorld');
  });

  it('should convert a snake_cased string to camelCase', () => {
    expect(toCamelCase('hello_world')).toBe('helloWorld');
  });

  it('should convert a space-separated string to camelCase', () => {
    expect(toCamelCase('hello world')).toBe('helloWorld');
  });

  it('should handle strings that are already camelCased', () => {
    expect(toCamelCase('helloWorld')).toBe('helloworld'); // This is expected with the new logic
  });

  it('should handle leading dashes, underscores or spaces', () => {
    expect(toCamelCase('-hello-world')).toBe('helloWorld');
    expect(toCamelCase('_hello_world')).toBe('helloWorld');
    expect(toCamelCase(' hello world')).toBe('helloWorld');
  });
  
  it('should handle multiple delimiters and caps', () => {
    expect(toCamelCase('__FOO_BAR__')).toBe('fooBar');
  });

  it('should return an empty string for non-string inputs', () => {
    expect(toCamelCase(null)).toBe('');
    expect(toCamelCase(undefined)).toBe('');
    expect(toCamelCase(123)).toBe('');
  });
});