import { kebabCase } from './string-kebab-case-utils';

describe('kebabCase', () => {
  it('should convert camelCase to kebab-case', () => {
    expect(kebabCase('camelCase')).toBe('camel-case');
  });

  it('should convert PascalCase to kebab-case', () => {
    expect(kebabCase('PascalCase')).toBe('pascal-case');
  });

  it('should convert snake_case to kebab-case', () => {
    expect(kebabCase('snake_case')).toBe('snake-case');
  });

  it('should convert sentences to kebab-case', () => {
    expect(kebabCase('A new post')).toBe('a-new-post');
  });

  it('should handle empty strings', () => {
    expect(kebabCase('')).toBe('');
  });

  it('should handle null and undefined', () => {
    expect(kebabCase(null)).toBe('');
    expect(kebabCase(undefined)).toBe('');
  });

  it('should handle strings with numbers', () => {
    expect(kebabCase('myFunction2')).toBe('my-function2');
  });
});