import { kebabCase } from './string-kebab-case-utils';

describe('kebabCase', () => {
  test('should convert a single word to kebab-case', () => {
    expect(kebabCase('hello')).toBe('hello');
  });

  test('should convert a space-separated string to kebab-case', () => {
    expect(kebabCase('hello world')).toBe('hello-world');
  });

  test('should convert a camelCase string to kebab-case', () => {
    expect(kebabCase('helloWorld')).toBe('hello-world');
  });

  test('should convert a PascalCase string to kebab-case', () => {
    expect(kebabCase('HelloWorld')).toBe('hello-world');
  });

  test('should handle mixed separators', () => {
    expect(kebabCase('hello-world_again')).toBe('hello-world-again');
  });

  test('should handle leading/trailing spaces', () => {
    expect(kebabCase('  hello world  ')).toBe('hello-world');
  });

  test('should handle multiple spaces between words', () => {
    expect(kebabCase('hello   world')).toBe('hello-world');
  });

  test('should handle numbers', () => {
    expect(kebabCase('version 1 0')).toBe('version-1-0');
  });

  test('should return an empty string for an empty input', () => {
    expect(kebabCase('')).toBe('');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(kebabCase(null)).toBe('');
    expect(kebabCase(undefined)).toBe('');
    expect(kebabCase(123)).toBe('');
    expect(kebabCase({})).toBe('');
  });

  test('should handle already kebab-cased strings', () => {
    expect(kebabCase('already-kebab-cased')).toBe('already-kebab-cased');
  });
});
