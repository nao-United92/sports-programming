import { camelCase, kebabCase, snakeCase } from './case-style-utils.js';

describe('Case Style Utilities', () => {

  describe('camelCase', () => {
    it('should convert various strings to camelCase', () => {
      expect(camelCase('foo-bar')).toBe('fooBar');
      expect(camelCase('foo_bar')).toBe('fooBar');
      expect(camelCase('Foo Bar')).toBe('fooBar');
      expect(camelCase('--FOO-BAR--')).toBe('fooBar');
      expect(camelCase('__FOO_BAR__')).toBe('fooBar');
    });
  });

  describe('kebabCase', () => {
    it('should convert various strings to kebab-case', () => {
      expect(kebabCase('fooBar')).toBe('foo-bar');
      expect(kebabCase('FooBar')).toBe('foo-bar');
      expect(kebabCase('__FOO_BAR__')).toBe('foo-bar');
      expect(kebabCase('foo bar')).toBe('foo-bar');
    });
  });

  describe('snakeCase', () => {
    it('should convert various strings to snake_case', () => {
      expect(snakeCase('fooBar')).toBe('foo_bar');
      expect(snakeCase('FooBar')).toBe('foo_bar');
      expect(snakeCase('--FOO-BAR--')).toBe('foo_bar');
      expect(snakeCase('foo bar')).toBe('foo_bar');
    });
  });

  describe('edge cases', () => {
    it('should handle empty strings', () => {
      expect(camelCase('')).toBe('');
      expect(kebabCase('')).toBe('');
      expect(snakeCase('')).toBe('');
    });

    it('should handle non-string inputs', () => {
      expect(camelCase(null)).toBe('');
      expect(kebabCase(undefined)).toBe('');
      expect(snakeCase(123)).toBe('');
    });
  });

});
