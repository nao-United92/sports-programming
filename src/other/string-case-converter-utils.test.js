const { toCamelCase, toSnakeCase } = require('./string-case-converter-utils');

describe('String Case Converter Utilities', () => {
  describe('toCamelCase', () => {
    test('should convert snake_case to camelCase', () => {
      expect(toCamelCase('hello_world_how_are_you')).toBe('helloWorldHowAreYou');
    });

    test('should convert kebab-case to camelCase', () => {
      expect(toCamelCase('hello-world-how-are-you')).toBe('helloWorldHowAreYou');
    });

    test('should convert space-separated strings to camelCase', () => {
      expect(toCamelCase('Hello World How Are You')).toBe('helloWorldHowAreYou');
    });

    test('should handle leading/trailing separators', () => {
      expect(toCamelCase('__HELLO_WORLD__')).toBe('helloWorld');
    });

    test('should handle mixed separators', () => {
      expect(toCamelCase('hello_world-how are you')).toBe('helloWorldHowAreYou');
    });

    test('should return an empty string for empty or invalid input', () => {
      expect(toCamelCase('')).toBe('');
      expect(toCamelCase(null)).toBe('');
      expect(toCamelCase(undefined)).toBe('');
    });
  });

  describe('toSnakeCase', () => {
    test('should convert camelCase to snake_case', () => {
      expect(toSnakeCase('helloWorldHowAreYou')).toBe('hello_world_how_are_you');
    });

    test('should convert PascalCase to snake_case', () => {
      expect(toSnakeCase('HelloWorldHowAreYou')).toBe('hello_world_how_are_you');
    });

    test('should convert kebab-case to snake_case', () => {
      expect(toSnakeCase('hello-world-how-are-you')).toBe('hello_world_how_are_you');
    });

    test('should convert space-separated strings to snake_case', () => {
      expect(toSnakeCase('Hello World How Are You')).toBe('hello_world_how_are_you');
    });

    test('should handle leading/trailing separators in input', () => {
      expect(toSnakeCase(' HelloWorld ')).toBe('hello_world');
    });

    test('should handle mixed separators', () => {
      expect(toSnakeCase('helloWorld-how areYou')).toBe('hello_world_how_are_you');
    });

    test('should return an empty string for empty or invalid input', () => {
      expect(toSnakeCase('')).toBe('');
      expect(toSnakeCase(null)).toBe('');
      expect(toSnakeCase(undefined)).toBe('');
    });
  });
});