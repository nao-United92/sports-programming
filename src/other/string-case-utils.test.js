import { camelCase, kebabCase, snakeCase } from './string-case-utils.js';

describe('String Case Utilities', () => {
  describe('camelCase', () => {
    it('should convert kebab-case to camelCase', () => {
      expect(camelCase('foo-bar')).toBe('fooBar');
    });
    it('should convert snake_case to camelCase', () => {
      expect(camelCase('__FOO_BAR__')).toBe('fooBar');
    });
    it('should convert space-separated to camelCase', () => {
      expect(camelCase('Foo Bar')).toBe('fooBar');
    });
    it('should handle already camelCased strings', () => {
      expect(camelCase('fooBar')).toBe('fooBar');
    });
    it('should handle PascalCase strings', () => {
      expect(camelCase('FooBar')).toBe('fooBar');
    });
    it('should return an empty string for empty input', () => {
      expect(camelCase('')).toBe('');
    });
  });

  describe('kebabCase', () => {
    it('should convert camelCase to kebab-case', () => {
      expect(kebabCase('fooBar')).toBe('foo-bar');
    });
    it('should convert snake_case to kebab-case', () => {
      expect(kebabCase('__FOO_BAR__')).toBe('foo-bar');
    });
    it('should convert space-separated to kebab-case', () => {
      expect(kebabCase('Foo Bar')).toBe('foo-bar');
    });
    it('should handle PascalCase strings', () => {
      expect(kebabCase('FooBar')).toBe('foo-bar');
    });
    it('should return an empty string for empty input', () => {
      expect(kebabCase('')).toBe('');
    });
  });

  describe('snakeCase', () => {
    it('should convert camelCase to snake_case', () => {
      expect(snakeCase('fooBar')).toBe('foo_bar');
    });
    it('should convert kebab-case to snake_case', () => {
      expect(snakeCase('--foo-bar--')).toBe('foo_bar');
    });
    it('should convert space-separated to snake_case', () => {
      expect(snakeCase('Foo Bar')).toBe('foo_bar');
    });
    it('should handle PascalCase strings', () => {
      expect(snakeCase('FooBar')).toBe('foo_bar');
    });
    it('should return an empty string for empty input', () => {
      expect(snakeCase('')).toBe('');
    });
  });
});