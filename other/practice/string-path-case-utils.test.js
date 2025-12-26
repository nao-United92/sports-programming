const {
  pathCase
} = require('./string-path-case-utils');

describe('pathCase', () => {
  test('should convert a string to path case', () => {
    expect(pathCase('camelCase')).toBe('camel/case');
    expect(pathCase('some-string')).toBe('some/string');
    expect(pathCase('some string')).toBe('some/string');
    expect(pathCase('some_string')).toBe('some/string');
    expect(pathCase('XMLHttpRequest')).toBe('xml/http/request');
  });

  test('should handle an empty string', () => {
    expect(pathCase('')).toBe('');
  });

  test('should handle non-string inputs', () => {
    expect(pathCase(null)).toBe('');
    expect(pathCase(undefined)).toBe('');
    expect(pathCase(123)).toBe('');
  });

  test('should handle strings with multiple delimiters', () => {
    expect(pathCase('  foo   bar  ')).toBe('foo/bar');
    expect(pathCase('foo--bar')).toBe('foo/bar');
    expect(pathCase('foo__bar')).toBe('foo/bar');
  });
});