import { toSnakeCase, capitalize, kebabCase, truncate, slugify, reverseString } from './string-utils.js';

describe('toSnakeCase', () => {
  test('should convert camelCase to snake_case', () => {
    expect(toSnakeCase('camelCase')).toBe('camel_case');
  });

  test('should convert PascalCase to snake_case', () => {
    expect(toSnakeCase('PascalCase')).toBe('pascal_case');
  });

  test('should not change snake_case', () => {
    expect(toSnakeCase('snake_case')).toBe('snake_case');
  });

  test('should handle an empty string', () => {
    expect(toSnakeCase('')).toBe('');
  });

  test('should handle a single word', () => {
    expect(toSnakeCase('word')).toBe('word');
  });
});

describe('capitalize', () => {
  test('should capitalize the first letter of a string', () => {
    expect(capitalize('fred')).toBe('Fred');
  });

  test('should lower case the rest of the string', () => {
    expect(capitalize('FRED')).toBe('Fred');
  });

  test('should handle an empty string', () => {
    expect(capitalize('')).toBe('');
  });
});

describe('kebabCase', () => {
  test('should convert camelCase to kebab-case', () => {
    expect(kebabCase('camelCase')).toBe('camel-case');
  });

  test('should convert PascalCase to kebab-case', () => {
    expect(kebabCase('PascalCase')).toBe('pascal-case');
  });

  test('should convert snake_case to kebab-case', () => {
    expect(kebabCase('snake_case')).toBe('snake-case');
  });

  test('should handle an empty string', () => {
    expect(kebabCase('')).toBe('');
  });
});

describe('truncate', () => {
  test('should not truncate a string shorter than the specified length', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  test('should truncate a string longer than the specified length', () => {
    expect(truncate('hello world', 8)).toBe('hello...');
  });

  test('should use a custom suffix', () => {
    expect(truncate('hello world', 8, '--')).toBe('hello --');
  });

  test('should handle edge cases', () => {
    expect(truncate('hello', 5)).toBe('hello');
    expect(truncate('hello', 4)).toBe('h...');
  });
});

describe('slugify', () => {
  test('should convert a string to a slug', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  test('should remove special characters', () => {
    expect(slugify('Hello World! 123')).toBe('hello-world-123');
  });

  test('should handle multiple spaces', () => {
    expect(slugify('Hello   World')).toBe('hello-world');
  });
});

describe('reverseString', () => {
  test('should reverse a simple string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('should reverse a string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  test('should handle an empty string', () => {
    expect(reverseString('')).toBe('');
  });

  test('should handle a string with special characters', () => {
    expect(reverseString('!@#$%^&*()')).toBe(')(*&^%$#@!');
  });

  test('should handle numbers in a string', () => {
    expect(reverseString('12345')).toBe('54321');
  });

  test('should return an empty string if input is not a string', () => {
    expect(reverseString(123)).toBe('');
    expect(reverseString(null)).toBe('');
    expect(reverseString(undefined)).toBe('');
  });
});
