const { camelCase } = require('./string-camel-case-utils.js');

describe('camelCase', () => {
  it('should convert kebab-case to camelCase', () => {
    expect(camelCase('foo-bar-baz')).toBe('fooBarBaz');
  });

  it('should convert snake_case to camelCase', () => {
    expect(camelCase('foo_bar_baz')).toBe('fooBarBaz');
  });

  it('should convert space-separated string to camelCase', () => {
    expect(camelCase('foo bar baz')).toBe('fooBarBaz');
  });

  it('should handle mixed delimiters', () => {
    expect(camelCase('foo-bar_baz test')).toBe('fooBarBazTest');
  });

  it('should handle PascalCase', () => {
    expect(camelCase('PascalCaseString')).toBe('pascalCaseString');
  });

  it('should handle an empty string', () => {
    expect(camelCase('')).toBe('');
  });

  it('should handle a single word string', () => {
    expect(camelCase('word')).toBe('word');
  });

  it('should handle strings starting with an uppercase letter correctly', () => {
    expect(camelCase('FooBar')).toBe('fooBar');
  });

  it('should handle numbers within the string', () => {
    expect(camelCase('foo-bar-123')).toBe('fooBar123');
    expect(camelCase('foo_bar_1_2_3')).toBe('fooBar123');
  });
});
