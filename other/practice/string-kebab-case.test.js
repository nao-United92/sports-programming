// other/practice/string-kebab-case.test.js
const stringKebabCase = require('./string-kebab-case');

describe('stringKebabCase', () => {
  test('should convert a space-separated string to kebab-case', () => {
    expect(stringKebabCase('hello world')).toBe('hello-world');
  });

  test('should convert a camelCase string to kebab-case', () => {
    expect(stringKebabCase('fooBar')).toBe('foo-bar');
  });

  test('should convert an underscore-separated string to kebab-case', () => {
    expect(stringKebabCase('baz_qux')).toBe('baz-qux');
  });

  test('should handle mixed separators', () => {
    expect(stringKebabCase('foo-bar_baz qux')).toBe('foo-bar-baz-qux');
  });

  test('should remove leading/trailing separators', () => {
    expect(stringKebabCase('--hello-world--')).toBe('hello-world');
    expect(stringKebabCase('__foo_bar__')).toBe('foo-bar');
  });

  test('should handle multiple spaces/separators', () => {
    expect(stringKebabCase('  hello   world  ')).toBe('hello-world');
    expect(stringKebabCase('foo---bar')).toBe('foo-bar');
  });

  test('should return an empty string for an empty input', () => {
    expect(stringKebabCase('')).toBe('');
  });

  test('should handle a single word string', () => {
    expect(stringKebabCase('singleword')).toBe('singleword');
  });

  test('should handle strings that are already kebab-case', () => {
    expect(stringKebabCase('already-kebab-case')).toBe('already-kebab-case');
  });

  test('should handle strings with numbers', () => {
    expect(stringKebabCase('foo-bar-123')).toBe('foo-bar-123');
    expect(stringKebabCase('123FooBar')).toBe('123-foo-bar');
  });

  test('should convert acronyms correctly', () => {
    expect(stringKebabCase('HTML DOM Element')).toBe('html-dom-element');
    expect(stringKebabCase('myHTMLComponent')).toBe('my-html-component');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(stringKebabCase(null)).toBe('');
    expect(stringKebabCase(undefined)).toBe('');
    expect(stringKebabCase(123)).toBe('');
    expect(stringKebabCase({})).toBe('');
    expect(stringKebabCase([])).toBe('');
  });
});
