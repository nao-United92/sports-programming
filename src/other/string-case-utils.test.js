import { toCamelCase } from './string-case-utils';

describe('toCamelCase', () => {
  test('should convert snake_case to camelCase', () => {
    expect(toCamelCase('hello_world')).toBe('helloWorld');
  });

  test('should convert kebab-case to camelCase', () => {
    expect(toCamelCase('hello-world')).toBe('helloWorld');
  });

  test('should handle already camelCased strings', () => {
    expect(toCamelCase('helloWorld')).toBe('helloWorld');
  });

  test('should handle strings with leading and trailing separators', () => {
    expect(toCamelCase('_hello_world_')).toBe('helloWorld');
  });

  test('should handle empty strings', () => {
    expect(toCamelCase('')).toBe('');
  });

  test('should handle PascalCase input', () => {
    expect(toCamelCase('HelloWorld')).toBe('helloWorld');
  });
});
