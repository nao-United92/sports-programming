import { pascalCase } from './string-pascal-case-utils';

describe('pascalCase', () => {
  it('should convert snake_case to PascalCase', () => {
    expect(pascalCase('snake_case_string')).toBe('SnakeCaseString');
  });

  it('should convert kebab-case to PascalCase', () => {
    expect(pascalCase('kebab-case-string')).toBe('KebabCaseString');
  });

  it('should convert space-separated words to PascalCase', () => {
    expect(pascalCase('hello world example')).toBe('HelloWorldExample');
  });

  it('should handle already PascalCased strings', () => {
    expect(pascalCase('AlreadyPascalCased')).toBe('AlreadyPascalCased');
  });

  it('should handle empty strings', () => {
    expect(pascalCase('')).toBe('');
  });

  it('should handle non-string inputs', () => {
    expect(pascalCase(null)).toBe('');
    expect(pascalCase(undefined)).toBe('');
    expect(pascalCase(123)).toBe('');
  });
});
