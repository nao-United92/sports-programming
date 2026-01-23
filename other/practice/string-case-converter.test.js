const {
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
} = require('./string-case-converter');

describe('String Case Converter', () => {
  describe('toCamelCase', () => {
    it('should convert snake_case to camelCase', () => {
      expect(toCamelCase('hello_world_')).toBe('helloWorld');
    });
    it('should convert kebab-case to camelCase', () => {
      expect(toCamelCase('hello-world-')).toBe('helloWorld');
    });
    it('should convert space separated to camelCase', () => {
      expect(toCamelCase('hello world ')).toBe('helloWorld');
    });
    it('should handle already camelCased strings', () => {
      expect(toCamelCase('helloWorld')).toBe('helloWorld');
    });
    it('should handle PascalCase strings', () => {
      expect(toCamelCase('HelloWorld')).toBe('helloWorld');
    });
  });

  describe('toPascalCase', () => {
    it('should convert snake_case to PascalCase', () => {
      expect(toPascalCase('hello_world')).toBe('HelloWorld');
    });
    it('should convert kebab-case to PascalCase', () => {
      expect(toPascalCase('hello-world')).toBe('HelloWorld');
    });
    it('should convert space separated to PascalCase', () => {
      expect(toPascalCase('hello world')).toBe('HelloWorld');
    });
    it('should handle already PascalCased strings', () => {
      expect(toPascalCase('HelloWorld')).toBe('HelloWorld');
    });
     it('should handle camelCase strings', () => {
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
      expect(toSnakeCase('hello world')).toBe('hello_world');
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
      expect(toKebabCase('hello world')).toBe('hello-world');
    });
    it('should convert snake_case to kebab-case', () => {
      expect(toKebabCase('hello_world')).toBe('hello-world');
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty strings', () => {
      expect(toCamelCase('')).toBe('');
      expect(toPascalCase('')).toBe('');
      expect(toSnakeCase('')).toBe('');
      expect(toKebabCase('')).toBe('');
    });
    it('should handle single words', () => {
      expect(toCamelCase('hello')).toBe('hello');
      expect(toPascalCase('hello')).toBe('Hello');
      expect(toSnakeCase('Hello')).toBe('hello');
      expect(toKebabCase('Hello')).toBe('hello');
    });
  });
});
