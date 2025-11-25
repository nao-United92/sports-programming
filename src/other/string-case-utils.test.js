const { toCamelCase, toPascalCase, toSnakeCase, toKebabCase } = require('./string-case-utils');

describe('String Case Conversion Utilities', () => {
  describe('toCamelCase', () => {
    it('should convert kebab-case to camelCase', () => {
      expect(toCamelCase('hello-world')).toBe('helloWorld');
    });
    it('should convert snake_case to camelCase', () => {
      expect(toCamelCase('hello_world')).toBe('helloWorld');
    });
    it('should convert space separated to camelCase', () => {
      expect(toCamelCase('Hello World')).toBe('helloWorld');
    });
    it('should handle already camelCased strings', () => {
      expect(toCamelCase('helloWorld')).toBe('helloWorld');
    });
    it('should handle leading dashes or underscores', () => {
      expect(toCamelCase('-hello-world')).toBe('helloWorld');
      expect(toCamelCase('_hello_world')).toBe('helloWorld');
    });
  });

  describe('toPascalCase', () => {
    it('should convert various cases to PascalCase', () => {
      expect(toPascalCase('hello-world')).toBe('HelloWorld');
      expect(toPascalCase('hello_world')).toBe('HelloWorld');
      expect(toPascalCase('Hello World')).toBe('HelloWorld');
      expect(toPascalCase('helloWorld')).toBe('HelloWorld');
    });
  });

  describe('toSnakeCase', () => {
    it('should convert camelCase to snake_case', () => {
      expect(toSnakeCase('helloWorld')).toBe('hello_world');
    });
    it('should convert PascalCase to snake_case', () => {
      expect(toSnakeCase('HelloWorld')).toBe('hello_world');
    });
    it('should convert space separated to snake_case', () => {
      expect(toSnakeCase('Hello World')).toBe('hello_world');
    });
    it('should convert kebab-case to snake_case', () => {
      expect(toSnakeCase('hello-world')).toBe('hello_world');
    });
  });

  describe('toKebabCase', () => {
    it('should convert camelCase to kebab-case', () => {
      expect(toKebabCase('helloWorld')).toBe('hello-world');
    });
    it('should convert PascalCase to kebab-case', () => {
      expect(toKebabCase('HelloWorld')).toBe('hello-world');
    });
    it('should convert space separated to kebab-case', () => {
      expect(toKebabCase('Hello World')).toBe('hello-world');
    });
    it('should convert snake_case to kebab-case', () => {
      expect(toKebabCase('hello_world')).toBe('hello-world');
    });
  });
});
