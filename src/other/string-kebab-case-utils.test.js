
import { kebabCase } from './string-kebab-case-utils';

describe('kebabCase', () => {
  test('should convert camelCase to kebab-case', () => {
    expect(kebabCase('camelCaseString')).toBe('camel-case-string');
  });

  test('should convert PascalCase to kebab-case', () => {
    expect(kebabCase('PascalCaseString')).toBe('pascal-case-string');
  });

  test('should convert snake_case to kebab-case', () => {
    expect(kebabCase('snake_case_string')).toBe('snake-case-string');
  });

  test('should convert space separated words to kebab-case', () => {
    expect(kebabCase('space separated string')).toBe('space-separated-string');
  });

  test('should handle mixed separators', () => {
    expect(kebabCase('foo-bar_baz Qux')).toBe('foo-bar-baz-qux');
  });

  test('should handle leading/trailing separators', () => {
    expect(kebabCase('-hello-world-')).toBe('hello-world');
    expect(kebabCase('_hello_world_')).toBe('hello-world');
  });

  test('should handle numbers in string', () => {
    expect(kebabCase('fooBar123')).toBe('foo-bar-123');
    expect(kebabCase('foo_bar_baz_1_2_3')).toBe('foo-bar-baz-1-2-3');
  });

  test('should return empty string for empty input', () => {
    expect(kebabCase('')).toBe('');
  });

  test('should return empty string for non-string inputs', () => {
    expect(kebabCase(null)).toBe('');
    expect(kebabCase(undefined)).toBe('');
    expect(kebabCase(123)).toBe('');
    expect(kebabCase({})).toBe('');
  });

  test('should handle already kebab-case string', () => {
    expect(kebabCase('already-kebab-case')).toBe('already-kebab-case');
  });
});
