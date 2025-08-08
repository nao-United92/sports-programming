import { toSnakeCase } from './snake-case-utils.js';

describe('toSnakeCase', () => {
  test('should convert camelCase to snake_case', () => {
    expect(toSnakeCase('helloWorld')).toBe('hello_world');
  });

  test('should convert kebab-case to snake_case', () => {
    expect(toSnakeCase('hello-world')).toBe('hello_world');
  });

  test('should convert space separated to snake_case', () => {
    expect(toSnakeCase('hello world')).toBe('hello_world');
  });

  test('should handle already snake_cased strings', () => {
    expect(toSnakeCase('hello_world')).toBe('hello_world');
  });

  test('should handle leading and trailing separators', () => {
    expect(toSnakeCase('-hello-world-')).toBe('hello_world');
  });

  test('should handle multiple separators', () => {
    expect(toSnakeCase('__hello--world__')).toBe('hello_world');
  });

  test('should handle single word', () => {
    expect(toSnakeCase('hello')).toBe('hello');
  });

  test('should handle empty string', () => {
    expect(toSnakeCase('')).toBe('');
  });

  test('should handle non-string input by converting to string', () => {
    expect(toSnakeCase(null)).toBe('');
    expect(toSnakeCase(undefined)).toBe('');
  });
});