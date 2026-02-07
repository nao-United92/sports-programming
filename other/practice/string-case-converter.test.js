const { kebabCase } = require('./string-case-converter');

describe('kebabCase', () => {
  it('should convert camelCase to kebab-case', () => {
    expect(kebabCase('camelCase')).toBe('camel-case');
  });

  it('should convert PascalCase to kebab-case', () => {
    expect(kebabCase('PascalCase')).toBe('pascal-case');
  });

  it('should convert sentences with spaces to kebab-case', () => {
    expect(kebabCase('Some text here')).toBe('some-text-here');
  });

  it('should convert snake_case to kebab-case', () => {
    expect(kebabCase('some_snake_case')).toBe('some-snake-case');
  });

  it('should handle special characters', () => {
    expect(kebabCase('__FOO_BAR__')).toBe('foo-bar');
  });

  it('should handle already kebab-cased strings', () => {
    expect(kebabCase('already-kebab')).toBe('already-kebab');
  });

  it('should return an empty string for non-string inputs', () => {
    expect(kebabCase(null)).toBe('');
    expect(kebabCase(123)).toBe('');
  });
});