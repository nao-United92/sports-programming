const {
  snakeCase
} = require('./string-snake-case-utils');

describe('snakeCase', () => {
  test('should convert a string to snake case', () => {
    expect(snakeCase('camelCase')).toBe('camel_case');
    expect(snakeCase('some-string')).toBe('some_string');
    expect(snakeCase('some string')).toBe('some_string');
    expect(snakeCase('some_string_with_a_dash')).toBe('some_string_with_a_dash');
    expect(snakeCase('XMLHttpRequest')).toBe('xml_http_request');
  });

  test('should handle an empty string', () => {
    expect(snakeCase('')).toBe('');
  });

  test('should handle non-string inputs', () => {
    expect(snakeCase(null)).toBe('');
    expect(snakeCase(undefined)).toBe('');
    expect(snakeCase(123)).toBe('');
  });

  test('should handle strings with multiple spaces', () => {
    expect(snakeCase('  foo   bar  ')).toBe('foo_bar');
  });
});