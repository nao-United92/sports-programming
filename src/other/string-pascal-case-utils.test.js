import { pascalCase } from './string-pascal-case-utils';

describe('pascalCase', () => {
  test('should convert a single word to PascalCase', () => {
    expect(pascalCase('hello')).toBe('Hello');
  });

  test('should convert a space-separated string to PascalCase', () => {
    expect(pascalCase('hello world')).toBe('HelloWorld');
  });

  test('should convert a hyphen-separated string to PascalCase', () => {
    expect(pascalCase('hello-world')).toBe('HelloWorld');
  });

  test('should convert an underscore-separated string to PascalCase', () => {
    expect(pascalCase('hello_world')).toBe('HelloWorld');
  });

  test('should handle mixed separators', () => {
    expect(pascalCase('hello-world_again')).toBe('HelloWorldAgain');
  });

  test('should handle leading/trailing spaces', () => {
    expect(pascalCase('  hello world  ')).toBe('HelloWorld');
  });

  test('should handle multiple spaces between words', () => {
    expect(pascalCase('hello   world')).toBe('HelloWorld');
  });

  test('should handle numbers', () => {
    expect(pascalCase('version 1 0')).toBe('Version10');
  });

  test('should return an empty string for an empty input', () => {
    expect(pascalCase('')).toBe('');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(pascalCase(null)).toBe('');
    expect(pascalCase(undefined)).toBe('');
    expect(pascalCase(123)).toBe('');
    expect(pascalCase({})).toBe('');
  });

  test('should handle already PascalCased strings', () => {
    expect(pascalCase('AlreadyPascalCased')).toBe('AlreadyPascalCased');
  });
});