import { camelCase } from './string-camel-case-utils';

describe('camelCase', () => {
  it('should convert kebab-case to camelCase', () => {
    expect(camelCase('kebab-case')).toBe('kebabCase');
  });

  it('should convert snake_case to camelCase', () => {
    expect(camelCase('snake_case')).toBe('snakeCase');
  });

  it('should handle already camelCased strings', () => {
    expect(camelCase('camelCase')).toBe('camelCase');
  });

  it('should handle PascalCase strings', () => {
    expect(camelCase('PascalCase')).toBe('pascalCase');
  });

  it('should handle empty strings', () => {
    expect(camelCase('')).toBe('');
  });

  it('should handle null and undefined', () => {
    expect(camelCase(null)).toBe('');
    expect(camelCase(undefined)).toBe('');
  });
});
