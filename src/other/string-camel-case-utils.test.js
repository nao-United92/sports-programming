import { camelCase } from './string-camel-case-utils';

describe('camelCase', () => {
  test('should convert a single word to camelCase', () => {
    expect(camelCase('hello')).toBe('hello');
  });

  test('should convert a space-separated string to camelCase', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
  });

  test('should convert a hyphen-separated string to camelCase', () => {
    expect(camelCase('hello-world')).toBe('helloWorld');
  });

  test('should convert an underscore-separated string to camelCase', () => {
    expect(camelCase('hello_world')).toBe('helloWorld');
  });

  test('should handle mixed separators', () => {
    expect(camelCase('hello-world_again')).toBe('helloWorldAgain');
  });

  test('should handle leading/trailing spaces', () => {
    expect(camelCase('  hello world  ')).toBe('helloWorld');
  });

  test('should handle multiple spaces between words', () => {
    expect(camelCase('hello   world')).toBe('helloWorld');
  });

  test('should handle numbers', () => {
    expect(camelCase('version 1 0')).toBe('version10');
  });

  test('should return an empty string for an empty input', () => {
    expect(camelCase('')).toBe('');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(camelCase(null)).toBe('');
    expect(camelCase(undefined)).toBe('');
    expect(camelCase(123)).toBe('');
    expect(camelCase({})).toBe('');
  });

  test('should handle already camelCased strings', () => {
    expect(camelCase('alreadyCamelCased')).toBe('alreadyCamelCased');
  });
});