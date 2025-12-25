const { kebabCase } = require('./string-kebab-case-utils.js');

describe('kebabCase', () => {
  it('should convert a camelCase string to kebab-case', () => {
    expect(kebabCase('camelCaseString')).toBe('camel-case-string');
  });

  it('should convert a PascalCase string to kebab-case', () => {
    expect(kebabCase('PascalCaseString')).toBe('pascal-case-string');
  });

  it('should convert a snake_case string to kebab-case', () => {
    expect(kebabCase('snake_case_string')).toBe('snake-case-string');
  });

  it('should handle a string with spaces', () => {
    expect(kebabCase('string with spaces')).toBe('string-with-spaces');
  });

  it('should handle an empty string', () => {
    expect(kebabCase('')).toBe('');
  });

  it('should handle a single word string', () => {
    expect(kebabCase('word')).toBe('word');
  });

  it('should handle mixed cases and delimiters', () => {
    expect(kebabCase('  Foo Bar   Baz  ')).toBe('foo-bar-baz');
    expect(kebabCase('foo_bar-baz')).toBe('foo-bar-baz');
    expect(kebabCase('XMLHttpRequest')).toBe('xml-http-request');
  });

  it('should handle numbers', () => {
    expect(kebabCase('version1Point0')).toBe('version1-point0');
    expect(kebabCase('version-1-0')).toBe('version-1-0');
  });
});