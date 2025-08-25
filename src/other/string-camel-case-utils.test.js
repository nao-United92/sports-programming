import { camelCase } from './string-camel-case-utils.js';

describe('camelCase', () => {
  test('should convert a string to camel case', () => {
    expect(camelCase('foo bar')).toBe('fooBar');
    expect(camelCase('foo-bar')).toBe('fooBar');
    expect(camelCase('foo_bar')).toBe('fooBar');
    expect(camelCase('Foo Bar')).toBe('fooBar');
    expect(camelCase('FooBar')).toBe('fooBar');
    expect(camelCase('fooBar')).toBe('fooBar');
    expect(camelCase('foo-bar-baz')).toBe('fooBarBaz');
    expect(camelCase('foo_bar_baz')).toBe('fooBarBaz');
    expect(camelCase('Foo Bar Baz')).toBe('fooBarBaz');
    expect(camelCase('FooBarBaz')).toBe('fooBarBaz');
  });

  test('should handle numbers', () => {
    expect(camelCase('foo-bar-123')).toBe('fooBar123');
    expect(camelCase('fooBar123')).toBe('fooBar123');
  });

  test('should handle empty strings', () => {
    expect(camelCase('')).toBe('');
  });

  test('should handle leading/trailing spaces', () => {
    expect(camelCase(' foo bar ')).toBe('fooBar');
  });
});
