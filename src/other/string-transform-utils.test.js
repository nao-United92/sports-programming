const { capitalize, kebabCase } = require('./string-transform-utils');

describe('capitalize', () => {
  test('should capitalize the first letter and lowercase the rest', () => {
    expect(capitalize('hello world')).toBe('Hello world');
    expect(capitalize('HELLO WORLD')).toBe('Hello world');
    expect(capitalize('fooBar')).toBe('Foobar');
  });

  test('should return an empty string for an empty string input', () => {
    expect(capitalize('')).toBe('');
  });

  test('should handle single character strings', () => {
    expect(capitalize('a')).toBe('A');
    expect(capitalize('Z')).toBe('Z');
  });

  test('should handle non-string inputs gracefully', () => {
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
    expect(capitalize(123)).toBe('');
  });
});

describe('kebabCase', () => {
  test('should convert camelCase to kebab-case', () => {
    expect(kebabCase('fooBar')).toBe('foo-bar');
    expect(kebabCase('fooBarBaz')).toBe('foo-bar-baz');
  });

  test('should convert space separated words to kebab-case', () => {
    expect(kebabCase('foo bar')).toBe('foo-bar');
    expect(kebabCase('foo bar baz')).toBe('foo-bar-baz');
  });

  test('should convert snake_case to kebab-case', () => {
    expect(kebabCase('foo_bar')).toBe('foo-bar');
    expect(kebabCase('foo_bar_baz')).toBe('foo-bar-baz');
  });

  test('should handle mixed cases and separators', () => {
    expect(kebabCase('Foo Bar_Baz')).toBe('foo-bar-baz');
    expect(kebabCase('XMLHttpRequest')).toBe('xml-http-request');
  });

  test('should return an empty string for an empty string input', () => {
    expect(kebabCase('')).toBe('');
  });

  test('should handle strings that are already kebab-case', () => {
    expect(kebabCase('foo-bar')).toBe('foo-bar');
  });

  test('should handle non-string inputs gracefully', () => {
    expect(kebabCase(null)).toBe('');
    expect(kebabCase(undefined)).toBe('');
    expect(kebabCase(123)).toBe('');
  });
});
