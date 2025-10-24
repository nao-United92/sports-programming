import { camelCase } from './string-camel-case-utils';

describe('camelCase', () => {
  test('should convert snake_case to camelCase', () => {
    expect(camelCase('hello_world')).toBe('helloWorld');
  });

  test('should convert kebab-case to camelCase', () => {
    expect(camelCase('hello-world')).toBe('helloWorld');
  });

  test('should convert space separated words to camelCase', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
  });

  test('should convert PascalCase to camelCase', () => {
    expect(camelCase('HelloWorld')).toBe('helloWorld');
  });

  test('should handle mixed separators', () => {
    expect(camelCase('foo-bar_baz qux')).toBe('fooBarBazQux');
  });

  test('should handle leading/trailing separators', () => {
    expect(camelCase('-hello-world-')).toBe('helloWorld');
    expect(camelCase('_hello_world_')).toBe('helloWorld');
  });

  test('should handle numbers in string', () => {
    expect(camelCase('foo-bar-123')).toBe('fooBar123');
    expect(camelCase('foo_bar_baz_1_2_3')).toBe('fooBarBaz123');
  });

  test('should return empty string for empty input', () => {
    expect(camelCase('')).toBe('');
  });

  test('should return empty string for non-string inputs', () => {
    expect(camelCase(null)).toBe('');
    expect(camelCase(undefined)).toBe('');
    expect(camelCase(123)).toBe('');
    expect(camelCase({})).toBe('');
  });

  test('should handle already camelCase string', () => {
    expect(camelCase('alreadyCamelCase')).toBe('alreadyCamelCase');
  });
});