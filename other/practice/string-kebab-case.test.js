const { kebabCase } = require('./string-kebab-case');

describe('kebabCase', () => {
  test('should convert a camelCase string to kebab-case', () => {
    expect(kebabCase('camelCaseString')).toBe('camel-case-string');
  });

  test('should convert a PascalCase string to kebab-case', () => {
    expect(kebabCase('PascalCaseString')).toBe('pascal-case-string');
  });

  test('should convert a string with spaces to kebab-case', () => {
    expect(kebabCase('string with spaces')).toBe('string-with-spaces');
  });

  test('should convert a string with underscores to kebab-case', () => {
    expect(kebabCase('string_with_underscores')).toBe('string-with-underscores');
  });

  test('should handle a mix of spaces, underscores, and camelCase', () => {
    expect(kebabCase('  Mixed String_With CamelCase   ')).toBe('mixed-string-with-camel-case');
  });

  test('should handle strings with leading/trailing spaces', () => {
    expect(kebabCase('  leading and trailing  ')).toBe('leading-and-trailing');
  });

  test('should handle empty strings', () => {
    expect(kebabCase('')).toBe('');
  });

  test('should handle strings that are already kebab-case', () => {
    expect(kebabCase('already-kebab-case')).toBe('already-kebab-case');
  });

  test('should throw an error if the argument is not a string', () => {
    expect(() => kebabCase(123)).toThrow(TypeError);
    expect(() => kebabCase(null)).toThrow(TypeError);
    expect(() => kebabCase(undefined)).toThrow(TypeError);
    expect(() => kebabCase({})).toThrow(TypeError);
  });

  test('should handle strings with numbers', () => {
    expect(kebabCase('stringWith1Number')).toBe('string-with1-number');
    expect(kebabCase('string with 2 numbers')).toBe('string-with-2-numbers');
  });
});
