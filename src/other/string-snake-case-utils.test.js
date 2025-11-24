import { snakeCase } from './string-snake-case-utils';

describe('snakeCase', () => {
  test('should convert a single word to snake_case', () => {
    expect(snakeCase('hello')).toBe('hello');
  });

  test('should convert a space-separated string to snake_case', () => {
    expect(snakeCase('hello world')).toBe('hello_world');
  });

  test('should convert a camelCase string to snake_case', () => {
    expect(snakeCase('helloWorld')).toBe('hello_world');
  });

  test('should convert a PascalCase string to snake_case', () => {
    expect(snakeCase('HelloWorld')).toBe('hello_world');
  });

  test('should handle mixed separators', () => {
    expect(snakeCase('hello-world_again')).toBe('hello_world_again');
  });

  test('should handle leading/trailing spaces', () => {
    expect(snakeCase('  hello world  ')).toBe('hello_world');
  });

  test('should handle multiple spaces between words', () => {
    expect(snakeCase('hello   world')).toBe('hello_world');
  });

  test('should handle numbers', () => {
    expect(snakeCase('version 1 0')).toBe('version_1_0');
  });

  test('should return an empty string for an empty input', () => {
    expect(snakeCase('')).toBe('');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(snakeCase(null)).toBe('');
    expect(snakeCase(undefined)).toBe('');
    expect(snakeCase(123)).toBe('');
    expect(snakeCase({})).toBe('');
  });

  test('should handle already snake_cased strings', () => {
    expect(snakeCase('already_snake_cased')).toBe('already_snake_cased');
  });
});
