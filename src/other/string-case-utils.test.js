import { capitalize, toCamelCase, toKebabCase, toSnakeCase } from './string-case-utils.js';

describe('String Case Utilities', () => {
  describe('capitalize', () => {
    it('should capitalize the first letter', () => {
      expect(capitalize('fooBar')).toBe('FooBar');
      expect(capitalize('hello world')).toBe('Hello world');
    });
    it('should handle empty or invalid input', () => {
      expect(capitalize('')).toBe('');
      expect(capitalize(null)).toBe('');
    });
  });

  describe('toCamelCase', () => {
    it('should convert various cases to camelCase', () => {
      expect(toCamelCase('foo-bar')).toBe('fooBar');
      expect(toCamelCase('foo_bar')).toBe('fooBar');
      expect(toCamelCase('Foo Bar')).toBe('fooBar');
      expect(toCamelCase('FOO BAR')).toBe('fooBar');
      expect(toCamelCase('--FOO-BAR--')).toBe('fooBar');
    });
     it('should handle empty or invalid input', () => {
      expect(toCamelCase('')).toBe('');
      expect(toCamelCase(null)).toBe('');
    });
  });

  describe('toKebabCase', () => {
    it('should convert various cases to kebab-case', () => {
      expect(toKebabCase('fooBar')).toBe('foo-bar');
      expect(toKebabCase('FooBar')).toBe('foo-bar');
      expect(toKebabCase('foo_bar')).toBe('foo-bar');
      expect(toKebabCase('Foo Bar')).toBe('foo-bar');
      expect(toKebabCase('FOO BAR')).toBe('foo-bar');
      expect(toKebabCase('--FOO-BAR--')).toBe('foo-bar');
    });
     it('should handle empty or invalid input', () => {
      expect(toKebabCase('')).toBe('');
      expect(toKebabCase(null)).toBe('');
    });
  });

  describe('toSnakeCase', () => {
    it('should convert various cases to snake_case', () => {
      expect(toSnakeCase('fooBar')).toBe('foo_bar');
      expect(toSnakeCase('FooBar')).toBe('foo_bar');
      expect(toSnakeCase('foo-bar')).toBe('foo_bar');
      expect(toSnakeCase('Foo Bar')).toBe('foo_bar');
      expect(toSnakeCase('FOO BAR')).toBe('foo_bar');
      expect(toSnakeCase('--FOO-BAR--')).toBe('foo_bar');
    });
     it('should handle empty or invalid input', () => {
      expect(toSnakeCase('')).toBe('');
      expect(toSnakeCase(null)).toBe('');
    });
  });
});
