const { toCamelCase } = require('./string-case-converter');

describe('toCamelCase', () => {
  it('should convert snake_case to camelCase', () => {
    expect(toCamelCase('hello_world_')).toBe('helloWorld');
  });

  it('should convert kebab-case to camelCase', () => {
    expect(toCamelCase('foo-bar-baz')).toBe('fooBarBaz');
  });

  it('should convert space-separated strings to camelCase', () => {
    expect(toCamelCase('baz qux quux')).toBe('bazQuxQuux');
  });

  it('should handle already camelCased strings', () => {
    expect(toCamelCase('alreadyCamelCase')).toBe('alreadyCamelCase');
  });
  
  it('should handle strings with leading separators', () => {
    expect(toCamelCase('_private_var')).toBe('privateVar');
  });

  it('should return an empty string for non-string or empty inputs', () => {
    expect(toCamelCase(null)).toBe('');
    expect(toCamelCase(undefined)).toBe('');
    expect(toCamelCase(123)).toBe('');
    expect(toCamelCase('')).toBe('');
  });
});