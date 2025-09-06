import { titleCase } from './string-title-case-utils.js';

describe('titleCase', () => {
  test('should convert a string to title case', () => {
    expect(titleCase('hello world')).toBe('Hello World');
    expect(titleCase('foo-bar')).toBe('Foo Bar');
    expect(titleCase('baz_qux')).toBe('Baz Qux');
    expect(titleCase('PascalCase')).toBe('Pascal Case');
  });

  test('should handle empty string', () => {
    expect(titleCase('')).toBe('');
  });

  test('should handle non-string inputs', () => {
    expect(titleCase(null)).toBe('');
    expect(titleCase(undefined)).toBe('');
    expect(titleCase(123)).toBe('');
  });
});
