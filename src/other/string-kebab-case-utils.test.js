import { kebabCase } from './string-kebab-case-utils.js';

describe('kebabCase', () => {
  test('should convert a string to kebab case', () => {
    expect(kebabCase('foo bar')).toBe('foo-bar');
    expect(kebabCase('foo-bar')).toBe('foo-bar');
    expect(kebabCase('foo_bar')).toBe('foo-bar');
    expect(kebabCase('Foo Bar')).toBe('foo-bar');
    expect(kebabCase('FooBar')).toBe('foo-bar');
    expect(kebabCase('fooBar')).toBe('foo-bar');
    expect(kebabCase('foo-bar-baz')).toBe('foo-bar-baz');
    expect(kebabCase('foo_bar_baz')).toBe('foo-bar-baz');
    expect(kebabCase('Foo Bar Baz')).toBe('foo-bar-baz');
    expect(kebabCase('FooBarBaz')).toBe('foo-bar-baz');
    expect(kebabCase('fooBarBaz')).toBe('foo-bar-baz');
  });

  test('should handle numbers', () => {
    expect(kebabCase('foo-bar-123')).toBe('foo-bar-123');
    expect(kebabCase('fooBar123')).toBe('foo-bar-123');
  });

  test('should handle empty strings', () => {
    expect(kebabCase('')).toBe('');
  });

  test('should handle leading/trailing spaces', () => {
    expect(kebabCase(' foo bar ')).toBe('foo-bar');
  });
});
