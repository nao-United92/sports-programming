import { pascalCase } from './string-pascal-case-utils.js';

describe('pascalCase', () => {
  test('should convert a string to PascalCase', () => {
    expect(pascalCase('hello world')).toBe('HelloWorld');
    expect(pascalCase('foo-bar')).toBe('FooBar');
    expect(pascalCase('baz_qux')).toBe('BazQux');
    expect(pascalCase('camelCase')).toBe('CamelCase');
  });

  test('should handle empty string', () => {
    expect(pascalCase('')).toBe('');
  });

  test('should handle non-string inputs', () => {
    expect(pascalCase(null)).toBe('');
    expect(pascalCase(undefined)).toBe('');
    expect(pascalCase(123)).toBe('');
  });
});
