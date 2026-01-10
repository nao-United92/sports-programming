const { camelCase } = require('./string-camel-caser.js');

describe('camelCase', () => {
  test('should convert a simple string to camelCase', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
  });

  test('should convert a kebab-case string to camelCase', () => {
    expect(camelCase('hello-world')).toBe('helloWorld');
  });

  test('should convert a snake_case string to camelCase', () => {
    expect(camelCase('hello_world')).toBe('helloWorld');
  });

  test('should handle a string already in camelCase', () => {
    expect(camelCase('helloWorld')).toBe('helloWorld');
  });

  test('should handle a string with leading/trailing spaces', () => {
    expect(camelCase('  hello world  ')).toBe('  helloWorld  '); // Trimming is not part of camelCase
  });

  test('should handle an empty string', () => {
    expect(camelCase('')).toBe('');
  });

  test('should handle single words', () => {
    expect(camelCase('word')).toBe('word');
    expect(camelCase('Word')).toBe('word');
  });

  test('should handle complex strings with multiple delimiters', () => {
    expect(camelCase('foo-bar_baz bat')).toBe('fooBarBazBat');
  });

  test('should handle strings with numbers', () => {
    expect(camelCase('foo-bar-123')).toBe('fooBar123');
  });

  test('should throw an error if the argument is not a string', () => {
    expect(() => camelCase(null)).toThrow('Expected a string for the first argument.');
    expect(() => camelCase(undefined)).toThrow('Expected a string for the first argument.');
    expect(() => camelCase(123)).toThrow('Expected a string for the first argument.');
    expect(() => camelCase({})).toThrow('Expected a string for the first argument.');
  });
});
