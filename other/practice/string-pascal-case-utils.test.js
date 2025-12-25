const { pascalCase } = require('./string-pascal-case-utils.js');

describe('pascalCase', () => {
  it('should convert kebab-case to PascalCase', () => {
    expect(pascalCase('foo-bar-baz')).toBe('FooBarBaz');
  });

  it('should convert snake_case to PascalCase', () => {
    expect(pascalCase('foo_bar_baz')).toBe('FooBarBaz');
  });

  it('should convert space-separated string to PascalCase', () => {
    expect(pascalCase('foo bar baz')).toBe('FooBarBaz');
  });

  it('should handle mixed delimiters', () => {
    expect(pascalCase('foo-bar_baz test')).toBe('FooBarBazTest');
  });

  it('should handle camelCase to PascalCase', () => {
    expect(pascalCase('camelCaseString')).toBe('CamelCaseString');
  });

  it('should handle an empty string', () => {
    expect(pascalCase('')).toBe('');
  });

  it('should handle a single word string', () => {
    expect(pascalCase('word')).toBe('Word');
  });

  it('should handle numbers within the string', () => {
    expect(pascalCase('foo-bar-123')).toBe('FooBar123');
    expect(pascalCase('foo_bar_1_2_3')).toBe('FooBar123');
  });
});
