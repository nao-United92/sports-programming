
import { capitalize, truncate, kebabCase, camelCase } from './string-advanced-utils';

describe('capitalize', () => {
  test('should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
    expect(capitalize('a')).toBe('A');
  });

  test('should return empty string for empty input', () => {
    expect(capitalize('')).toBe('');
  });

  test('should handle non-string input', () => {
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
    expect(capitalize(123)).toBe('');
  });
});

describe('truncate', () => {
  test('should truncate string and add suffix', () => {
    expect(truncate('The quick brown fox jumps over the lazy dog', 20)).toBe('The quick brown fo...');
    expect(truncate('Hello World', 5)).toBe('He...');
  });

  test('should not truncate if string is shorter than maxLength', () => {
    expect(truncate('Short string', 20)).toBe('Short string');
  });

  test('should handle custom suffix', () => {
    expect(truncate('Long string example', 10, '--')).toBe('Long stri--');
  });

  test('should return empty string for invalid input', () => {
    expect(truncate(null, 10)).toBe('');
    expect(truncate('test', 'abc')).toBe('');
    expect(truncate('test', -5)).toBe('');
  });
});

describe('kebabCase', () => {
  test('should convert string to kebab-case', () => {
    expect(kebabCase('HelloWorld')).toBe('hello-world');
    expect(kebabCase('fooBarBaz')).toBe('foo-bar-baz');
    expect(kebabCase('foo-bar-baz')).toBe('foo-bar-baz');
    expect(kebabCase('foo bar baz')).toBe('foo-bar-baz');
    expect(kebabCase('foo_bar_baz')).toBe('foo-bar-baz');
    expect(kebabCase('  foo Bar Baz  ')).toBe('foo-bar-baz');
  });

  test('should handle empty string', () => {
    expect(kebabCase('')).toBe('');
  });

  test('should handle non-string input', () => {
    expect(kebabCase(null)).toBe('');
    expect(kebabCase(123)).toBe('');
  });
});

describe('camelCase', () => {
  test('should convert string to camelCase', () => {
    expect(camelCase('hello-world')).toBe('helloWorld');
    expect(camelCase('foo_bar_baz')).toBe('fooBarBaz');
    expect(camelCase('Foo Bar Baz')).toBe('fooBarBaz');
    expect(camelCase('HelloWorld')).toBe('helloWorld');
    expect(camelCase('  foo bar baz  ')).toBe('fooBarBaz');
  });

  test('should handle empty string', () => {
    expect(camelCase('')).toBe('');
  });

  test('should handle non-string input', () => {
    expect(camelCase(null)).toBe('');
    expect(camelCase(123)).toBe('');
  });
});
