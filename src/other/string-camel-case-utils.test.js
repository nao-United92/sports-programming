import { camelCase } from './string-camel-case-utils';

describe('camelCase', () => {
  it('should convert snake_case to camelCase', () => {
    expect(camelCase('snake_case_string')).toBe('snakeCaseString');
  });

  it('should convert kebab-case to camelCase', () => {
    expect(camelCase('kebab-case-string')).toBe('kebabCaseString');
  });

  it('should convert space-separated words to camelCase', () => {
    expect(camelCase('hello world example')).toBe('helloWorldExample');
  });

  it('should handle already camelCased strings', () => {
    expect(camelCase('alreadyCamelCased')).toBe('alreadyCamelCased');
  });

  it('should handle empty strings', () => {
    expect(camelCase('')).toBe('');
  });

  it('should handle non-string inputs', () => {
    expect(camelCase(null)).toBe('');
    expect(camelCase(undefined)).toBe('');
    expect(camelCase(123)).toBe('');
  });
});