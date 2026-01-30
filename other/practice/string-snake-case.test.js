// other/practice/string-snake-case.test.js
const stringSnakeCase = require('./string-snake-case');

describe('stringSnakeCase', () => {
  test('should convert a space-separated string to snake_case', () => {
    expect(stringSnakeCase('hello world')).toBe('hello_world');
  });

  test('should convert a camelCase string to snake_case', () => {
    expect(stringSnakeCase('fooBar')).toBe('foo_bar');
  });

  test('should convert a hyphen-separated string to snake_case', () => {
    expect(stringSnakeCase('baz-qux')).toBe('baz_qux');
  });

  test('should handle mixed separators', () => {
    expect(stringSnakeCase('foo-bar_baz qux')).toBe('foo_bar_baz_qux');
  });

  test('should remove leading/trailing separators', () => {
    expect(stringSnakeCase('__hello_world__')).toBe('hello_world');
    expect(stringSnakeCase('--foo-bar--')).toBe('foo_bar');
  });

  test('should handle multiple spaces/separators', () => {
    expect(stringSnakeCase('  hello   world  ')).toBe('hello_world');
    expect(stringSnakeCase('foo___bar')).toBe('foo_bar');
  });

  test('should return an empty string for an empty input', () => {
    expect(stringSnakeCase('')).toBe('');
  });

  test('should handle a single word string', () => {
    expect(stringSnakeCase('singleword')).toBe('singleword');
  });

  test('should handle strings that are already snake_case', () => {
    expect(stringSnakeCase('already_snake_case')).toBe('already_snake_case');
  });

  test('should handle strings with numbers', () => {
    expect(stringSnakeCase('foo_bar_123')).toBe('foo_bar_123');
    expect(stringSnakeCase('123FooBar')).toBe('123_foo_bar');
  });

  test('should convert acronyms correctly', () => {
    expect(stringSnakeCase('HTML DOM Element')).toBe('html_dom_element');
    expect(stringSnakeCase('myHTMLComponent')).toBe('my_html_component');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(stringSnakeCase(null)).toBe('');
    expect(stringSnakeCase(undefined)).toBe('');
    expect(stringSnakeCase(123)).toBe('');
    expect(stringSnakeCase({})).toBe('');
    expect(stringSnakeCase([])).toBe('');
  });
});
