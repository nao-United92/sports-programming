const { mask, toSnakeCase, toCamelCase } = require('./string-format-utils');

describe('String Format Utilities', () => {
  describe('mask', () => {
    test('should mask a string with a default mask character', () => {
      expect(mask('1234567890')).toBe('******7890');
    });

    test('should mask a string with a specified mask character', () => {
      expect(mask('1234567890', '#')).toBe('######7890');
    });

    test('should mask a string with a specified unmasked length', () => {
      expect(mask('1234567890', '*', 2)).toBe('********90');
    });

    test('should not mask a string shorter than or equal to the unmasked length', () => {
      expect(mask('1234', '*', 4)).toBe('1234');
      expect(mask('123', '*', 4)).toBe('123');
    });
  });

  describe('toSnakeCase', () => {
    test('should convert camelCase to snake_case', () => {
      expect(toSnakeCase('camelCaseString')).toBe('camel_case_string');
    });

    test('should handle strings that are already snake_case', () => {
      expect(toSnakeCase('snake_case_string')).toBe('snake_case_string');
    });

    test('should handle strings with leading uppercase letters', () => {
      expect(toSnakeCase('SomeValue')).toBe('_some_value');
    });
  });

  describe('toCamelCase', () => {
    test('should convert snake_case to camelCase', () => {
      expect(toCamelCase('snake_case_string')).toBe('snakeCaseString');
    });

    test('should handle strings that are already camelCase', () => {
      expect(toCamelCase('camelCaseString')).toBe('camelCaseString');
    });

    test('should handle strings with leading underscores', () => {
      expect(toCamelCase('_leading_underscore')).toBe('LeadingUnderscore');
    });
  });
});