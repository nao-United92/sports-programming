const toCamelCase = require('./string-to-camel-case');

describe('toCamelCase', () => {
  test('should convert a snake_case string to camelCase', () => {
    expect(toCamelCase('hello_world_')).toEqual('helloWorld');
  });

  test('should convert a kebab-case string to camelCase', () => {
    expect(toCamelCase('foo-bar-baz')).toEqual('fooBarBaz');
  });

  test('should handle an already camelCased string', () => {
    expect(toCamelCase('alreadyCamelCase')).toEqual('alreadyCamelCase');
  });

  test('should handle leading and trailing separators', () => {
    expect(toCamelCase('_leading_separator')).toEqual('LeadingSeparator');
    expect(toCamelCase('trailing-separator-')).toEqual('trailingSeparator');
  });
    
  test('should return an empty string if input is null or empty', () => {
    expect(toCamelCase('')).toEqual('');
    expect(toCamelCase(null)).toEqual('');
  });
});