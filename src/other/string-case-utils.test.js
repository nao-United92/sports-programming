import { toCamelCase, toSnakeCase, toPascalCase } from './string-case-utils.js';

describe('String Case Converters', () => {
  describe('toCamelCase', () => {
    it('should convert snake_case to camelCase', () => {
      expect(toCamelCase('hello_world')).toBe('helloWorld');
    });

    it('should convert kebab-case to camelCase', () => {
      expect(toCamelCase('hello-world')).toBe('helloWorld');
    });

    it('should handle already camelCased strings', () => {
      expect(toCamelCase('helloWorld')).toBe('helloWorld');
    });

    it('should handle strings with leading and trailing underscores', () => {
      expect(toCamelCase('_hello_world_')).toBe('helloWorld');
    });

    it('should return an empty string if input is not a string or is empty', () => {
      expect(toCamelCase(null)).toBe('');
      expect(toCamelCase(undefined)).toBe('');
      expect(toCamelCase('')).toBe('');
      expect(toCamelCase(123)).toBe('');
    });
  });

  describe('toSnakeCase', () => {
    it('should convert camelCase to snake_case', () => {
      expect(toSnakeCase('helloWorld')).toBe('hello_world');
    });

    it('should handle strings with multiple uppercase letters', () => {
      expect(toSnakeCase('helloWorldAgain')).toBe('hello_world_again');
    });

    it('should handle already snake_cased strings', () => {
      expect(toSnakeCase('hello_world')).toBe('hello_world');
    });

    it('should handle strings starting with an uppercase letter', () => {
      expect(toSnakeCase('HelloWorld')).toBe('_hello_world');
    });

    it('should return an empty string if input is not a string or is empty', () => {
      expect(toSnakeCase(null)).toBe('');
      expect(toSnakeCase(undefined)).toBe('');
      expect(toSnakeCase('')).toBe('');
      expect(toSnakeCase(123)).toBe('');
    });
  });
});

describe('toPascalCase', () => {
  it('should convert snake_case to PascalCase', () => {
    expect(toPascalCase('hello_world')).toBe('HelloWorld');
  });

  it('should convert kebab-case to PascalCase', () => {
    expect(toPascalCase('hello-world')).toBe('HelloWorld');
  });

  it('should convert camelCase to PascalCase', () => {
    expect(toPascalCase('helloWorld')).toBe('HelloWorld');
  });

  it('should handle strings with leading and trailing underscores', () => {
    expect(toPascalCase('_hello_world_')).toBe('HelloWorld');
  });

  it('should handle single word strings', () => {
    expect(toPascalCase('hello')).toBe('Hello');
  });

  it('should return an empty string if input is not a string or is empty', () => {
    expect(toPascalCase(null)).toBe('');
    expect(toPascalCase(undefined)).toBe('');
    expect(toPascalCase('')).toBe('');
    expect(toPascalCase(123)).toBe('');
  });
});
