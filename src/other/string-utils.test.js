import { kebabCase } from './string-utils.js';

describe('kebabCase', () => {
  test('should convert camelCase to kebab-case', () => {
    expect(kebabCase('camelCase')).toBe('camel-case');
  });

  test('should convert strings with spaces to kebab-case', () => {
    expect(kebabCase('some text')).toBe('some-text');
  });

  test('should convert strings with underscores to kebab-case', () => {
    expect(kebabCase('some_text')).toBe('some-text');
  });

  test('should handle already kebab-cased strings', () => {
    expect(kebabCase('kebab-case')).toBe('kebab-case');
  });

  test('should handle strings with multiple spaces or underscores', () => {
    expect(kebabCase('some  __text')).toBe('some-text');
  });

  test('should convert PascalCase to kebab-case', () => {
    expect(kebabCase('PascalCase')).toBe('pascal-case');
  });
});