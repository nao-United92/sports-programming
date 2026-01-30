// other/practice/string-camel-case.test.js
const stringCamelCase = require('./string-camel-case');

describe('stringCamelCase', () => {
  test('should convert a space-separated string to camelCase', () => {
    expect(stringCamelCase('hello world')).toBe('helloWorld');
  });

  test('should convert a hyphen-separated string to camelCase', () => {
    expect(stringCamelCase('foo-bar')).toBe('fooBar');
  });

  test('should convert an underscore-separated string to camelCase', () => {
    expect(stringCamelCase('baz_qux')).toBe('bazQux');
  });

  test('should handle mixed separators', () => {
    expect(stringCamelCase('foo-bar_baz qux')).toBe('fooBarBazQux');
  });

  test('should remove leading/trailing separators', () => {
    expect(stringCamelCase('--hello-world--')).toBe('helloWorld');
    expect(stringCamelCase('__foo_bar__')).toBe('fooBar');
  });

  test('should handle multiple spaces/separators', () => {
    expect(stringCamelCase('  hello   world  ')).toBe('helloWorld');
    expect(stringCamelCase('foo---bar')).toBe('fooBar');
  });

  test('should return an empty string for an empty input', () => {
    expect(stringCamelCase('')).toBe('');
  });

  test('should handle a single word string', () => {
    expect(stringCamelCase('singleword')).toBe('singleword');
  });

  test('should handle strings that are already camelCase', () => {
    expect(stringCamelCase('alreadyCamelCase')).toBe('alreadyCamelCase');
  });

  test('should handle strings with numbers', () => {
    expect(stringCamelCase('foo-bar-123')).toBe('fooBar123');
    expect(stringCamelCase('123-foo-bar')).toBe('123FooBar'); // Leading number should not be capitalized
  });

  test('should return an empty string for non-string inputs', () => {
    expect(stringCamelCase(null)).toBe('');
    expect(stringCamelCase(undefined)).toBe('');
    expect(stringCamelCase(123)).toBe('');
    expect(stringCamelCase({})).toBe('');
    expect(stringCamelCase([])).toBe('');
  });
});
