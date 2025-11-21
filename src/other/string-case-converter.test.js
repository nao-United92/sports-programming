const { camelCase, kebabCase, snakeCase } = require('./string-case-converter');

describe('String Case Converters', () => {
  describe('camelCase', () => {
    test('should convert space-separated strings', () => {
      expect(camelCase('foo bar')).toBe('fooBar');
    });
    test('should convert kebab-case strings', () => {
      expect(camelCase('foo-bar')).toBe('fooBar');
    });
    test('should convert snake_case strings', () => {
      expect(camelCase('foo_bar')).toBe('fooBar');
    });
    test('should handle already camelCased strings', () => {
      expect(camelCase('fooBar')).toBe('fooBar');
    });
    test('should handle PascalCase strings', () => {
      expect(camelCase('FooBar')).toBe('fooBar');
    });
    test('should handle strings with leading/trailing separators', () => {
      expect(camelCase('__FOO_BAR__')).toBe('fooBar');
    });
  });

  describe('kebabCase', () => {
    test('should convert space-separated strings', () => {
      expect(kebabCase('foo bar')).toBe('foo-bar');
    });
    test('should convert camelCase strings', () => {
      expect(kebabCase('fooBar')).toBe('foo-bar');
    });
    test('should convert snake_case strings', () => {
      expect(kebabCase('foo_bar')).toBe('foo-bar');
    });
    test('should handle PascalCase strings', () => {
      expect(kebabCase('FooBar')).toBe('foo-bar');
    });
    test('should handle strings with leading/trailing separators', () => {
      expect(kebabCase('__FOO_BAR__')).toBe('foo-bar');
    });
  });

  describe('snakeCase', () => {
    test('should convert space-separated strings', () => {
      expect(snakeCase('foo bar')).toBe('foo_bar');
    });
    test('should convert camelCase strings', () => {
      expect(snakeCase('fooBar')).toBe('foo_bar');
    });
    test('should convert kebab-case strings', () => {
      expect(snakeCase('foo-bar')).toBe('foo_bar');
    });
    test('should handle PascalCase strings', () => {
      expect(snakeCase('FooBar')).toBe('foo_bar');
    });
    test('should handle strings with leading/trailing separators', () => {
      expect(snakeCase('__FOO_BAR__')).toBe('foo_bar');
    });
  });
});
