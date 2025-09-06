import { camelCase } from './string-camel-case-utils.js';

describe('camelCase', () => {
  test('should convert a string to camelCase', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
    expect(camelCase('foo-bar')).toBe('fooBar');
    expect(camelCase('baz_qux')).toBe('bazQux');
    expect(camelCase('PascalCase')).toBe('pascalCase');
  });

  test('should handle empty string', () => {
    expect(camelCase('')).toBe('');
  });

  test('should handle non-string inputs', () => {
    expect(camelCase(null)).toBe('');
    expect(camelCase(undefined)).toBe('');
    expect(camelCase(123)).toBe('');
  });
});
