const { reverseString, camelToSnake, snakeToCamel } = require('./string-enhancers');

describe('string-enhancers', () => {
  describe('reverseString', () => {
    test('should reverse a simple string', () => {
      expect(reverseString('hello')).toBe('olleh');
    });

    test('should return an empty string if an empty string is given', () => {
      expect(reverseString('')).toBe('');
    });

    test('should handle strings with spaces', () => {
      expect(reverseString('hello world')).toBe('dlrow olleh');
    });

    test('should throw an error if not a string', () => {
      expect(() => reverseString(123)).toThrow(TypeError);
      expect(() => reverseString(null)).toThrow(TypeError);
      expect(() => reverseString(undefined)).toThrow(TypeError);
    });
  });

  describe('camelToSnake', () => {
    test('should convert camelCase to snake_case', () => {
      expect(camelToSnake('camelCase')).toBe('camel_case');
    });

    test('should handle strings that start with a capital letter', () => {
      expect(camelToSnake('SomeVariable')).toBe('_some_variable');
    });

    test('should handle multiple uppercase letters', () => {
      expect(camelToSnake('aBCDe')).toBe('a_b_c_de');
    });

    test('should return the same string if no conversion is needed', () => {
      expect(camelToSnake('lowercase')).toBe('lowercase');
    });

    test('should throw an error if not a string', () => {
        expect(() => camelToSnake(123)).toThrow(TypeError);
    });
  });

  describe('snakeToCamel', () => {
    test('should convert snake_case to camelCase', () => {
      expect(snakeToCamel('snake_case')).toBe('snakeCase');
    });

    test('should handle strings with multiple underscores', () => {
      expect(snakeToCamel('a_b_c_de')).toBe('aBCDe');
    });

    test('should handle strings starting with an underscore', () => {
      expect(snakeToCamel('_leading_underscore')).toBe('_leadingUnderscore');
    });

    test('should return the same string if no conversion is needed', () => {
      expect(snakeToCamel('camelcase')).toBe('camelcase');
    });

    test('should throw an error if not a string', () => {
        expect(() => snakeToCamel(123)).toThrow(TypeError);
    });
  });
});
