// other/practice/string-title-case.test.js
const stringTitleCase = require('./string-title-case');

describe('stringTitleCase', () => {
  test('should capitalize the first letter of each word in a space-separated string', () => {
    expect(stringTitleCase('hello world')).toBe('Hello World');
  });

  test('should capitalize the first letter of each word in a hyphen-separated string', () => {
    expect(stringTitleCase('foo-bar-baz')).toBe('Foo-Bar-Baz');
  });

  test('should capitalize the first letter of each word in an underscore-separated string', () => {
    expect(stringTitleCase('baz_qux_corge')).toBe('Baz_Qux_Corge');
  });

  test('should handle mixed separators', () => {
    expect(stringTitleCase('foo-bar baz_qux')).toBe('Foo-Bar Baz_Qux');
  });

  test('should return an empty string for an empty input', () => {
    expect(stringTitleCase('')).toBe('');
  });

  test('should handle a single word string', () => {
    expect(stringTitleCase('singleword')).toBe('Singleword');
  });

  test('should handle strings that are already title case', () => {
    expect(stringTitleCase('Already Title Case')).toBe('Already Title Case');
  });

  test('should handle strings with numbers', () => {
    expect(stringTitleCase('1st day of 2023')).toBe('1st Day Of 2023');
  });

  test('should handle strings with leading/trailing spaces', () => {
    expect(stringTitleCase('  hello world  ')).toBe('  Hello World  ');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(stringTitleCase(null)).toBe('');
    expect(stringTitleCase(undefined)).toBe('');
    expect(stringTitleCase(123)).toBe('');
    expect(stringTitleCase({})).toBe('');
    expect(stringTitleCase([])).toBe('');
  });
});
