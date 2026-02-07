const { camelCase } = require('./string-case-convert');

describe('camelCase', () => {
  it('should convert kebab-case to camelCase', () => {
    expect(camelCase('kebab-case-string')).toBe('kebabCaseString');
  });

  it('should convert snake_case to camelCase', () => {
    expect(camelCase('snake_case_string')).toBe('snakeCaseString');
  });

  it('should convert space separated words to camelCase', () => {
    expect(camelCase('Space separated string')).toBe('spaceSeparatedString');
  });

  it('should handle already camelCased strings', () => {
    expect(camelCase('alreadyCamelCased')).toBe('alreadyCamelCased');
  });

  it('should handle PascalCase', () => {
    expect(camelCase('PascalCase')).toBe('pascalCase');
  });

  it('should handle numbers in string', () => {
    expect(camelCase('some string with 123 numbers')).toBe('someStringWith123Numbers');
  });

  it('should return an empty string for non-string inputs', () => {
    expect(camelCase(null)).toBe('');
    expect(camelCase(undefined)).toBe('');
    expect(camelCase(123)).toBe('');
  });
});
