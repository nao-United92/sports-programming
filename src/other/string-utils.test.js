import { kebabCase, snakeCase } from './string-utils.js';

describe('String Utils', () => {
  describe('kebabCase', () => {
    it('should convert camelCase to kebab-case', () => {
      expect(kebabCase('camelCase')).toBe('camel-case');
    });

    it('should convert PascalCase to kebab-case', () => {
      expect(kebabCase('PascalCase')).toBe('pascal-case');
    });

    it('should handle strings with numbers', () => {
      expect(kebabCase('myVariableName123')).toBe('my-variable-name123');
    });

    it('should handle already kebab-cased strings', () => {
      expect(kebabCase('kebab-case')).toBe('kebab-case');
    });

    it('should handle empty strings', () => {
      expect(kebabCase('')).toBe('');
    });
  });

  describe('snakeCase', () => {
    it('should convert camelCase to snake_case', () => {
      expect(snakeCase('camelCase')).toBe('camel_case');
    });

    it('should convert PascalCase to snake_case', () => {
      expect(snakeCase('PascalCase')).toBe('pascal_case');
    });

    it('should handle strings with numbers', () => {
      expect(snakeCase('myVariableName123')).toBe('my_variable_name123');
    });

    it('should handle already snake_cased strings', () => {
      expect(snakeCase('snake_case')).toBe('snake_case');
    });

    it('should handle empty strings', () => {
      expect(snakeCase('')).toBe('');
    });
  });
});
