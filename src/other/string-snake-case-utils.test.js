import { snakeCase } from './string-snake-case-utils.js';

describe('snakeCase', () => {
  test('should convert a string to snake case', () => {
    expect(snakeCase('foo bar')).toBe('foo_bar');
    expect(snakeCase('foo-bar')).toBe('foo_bar');
    expect(snakeCase('foo_bar')).toBe('foo_bar');
    expect(snakeCase('Foo Bar')).toBe('foo_bar');
    expect(snakeCase('FooBar')).toBe('foo_bar');
    expect(snakeCase('fooBar')).toBe('foo_bar');
    expect(snakeCase('foo-bar-baz')).toBe('foo_bar_baz');
    expect(snakeCase('foo_bar_baz')).toBe('foo_bar_baz');
    expect(snakeCase('Foo Bar Baz')).toBe('foo_bar_baz');
    expect(snakeCase('FooBarBaz')).toBe('foo_bar_baz');
    expect(snakeCase('fooBarBaz')).toBe('foo_bar_baz');
  });

  test('should handle numbers', () => {
    expect(snakeCase('foo-bar-123')).toBe('foo_bar_123');
    expect(snakeCase('fooBar123')).toBe('foo_bar_123');
  });

  test('should handle empty strings', () => {
    expect(snakeCase('')).toBe('');
  });

  test('should handle leading/trailing spaces', () => {
    expect(snakeCase(' foo bar ')).toBe('foo_bar');
  });
});
