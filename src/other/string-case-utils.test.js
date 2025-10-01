import { toCamelCase, toSnakeCase } from './string-case-utils.js';

describe('String Case Converters', () => {
  describe('toCamelCase', () => {
    it('should convert snake_case to camelCase', () => {
      expect(toCamelCase('hello_world')).toBe('helloWorld');
    });

    it('should convert kebab-case to camelCase', () => {
      expect(toCamelCase('hello-world')).toBe('helloWorld');
    });

    it('should handle empty strings', () => {
      expect(toCamelCase('')).toBe('');
    });
  });

  describe('toSnakeCase', () => {
    it('should convert camelCase to snake_case', () => {
      expect(toSnakeCase('helloWorld')).toBe('hello_world');
    });

    it('should handle empty strings', () => {
      expect(toSnakeCase('')).toBe('');
    });
  });
});