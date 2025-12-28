const { snakeCase } = require('./string-snake-case-utils');

describe('snakeCase', () => {
  it('should convert camelCase to snake_case', () => {
    expect(snakeCase('fooBarBaz')).toBe('foo_bar_baz');
  });

  it('should convert kebab-case to snake_case', () => {
    expect(snakeCase('foo-bar-baz')).toBe('foo_bar_baz');
  });

  it('should convert space separated words to snake_case', () => {
    expect(snakeCase('Foo Bar Baz')).toBe('foo_bar_baz');
  });

  it('should handle already snake_cased strings', () => {
    expect(snakeCase('foo_bar_baz')).toBe('foo_bar_baz');
  });
  
  it('should handle strings with leading/trailing spaces and multiple separators', () => {
    expect(snakeCase('  __FOO_BAR--Baz__  ')).toBe('foo_bar_baz');
  });

  it('should return an empty string for null or undefined input', () => {
    expect(snakeCase(null)).toBe('');
    expect(snakeCase(undefined)).toBe('');
  });
});
