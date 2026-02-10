import stringToKebabCase from './string-to-kebab-case';

describe('stringToKebabCase', () => {
  test('should convert a simple string to kebab-case', () => {
    expect(stringToKebabCase('helloWorld')).toBe('hello-world');
  });

  test('should convert a string with multiple words to kebab-case', () => {
    expect(stringToKebabCase('some long string')).toBe('some-long-string');
  });

  test('should handle already kebab-cased strings', () => {
    expect(stringToKebabCase('already-kebab-cased')).toBe('already-kebab-cased');
  });

  test('should handle PascalCase', () => {
    expect(stringToKebabCase('PascalCaseString')).toBe('pascal-case-string');
  });

  test('should handle strings with numbers', () => {
    expect(stringToKebabCase('stringWith1Number')).toBe('string-with1-number');
  });

  test('should handle empty string', () => {
    expect(stringToKebabCase('')).toBe('');
  });

  test('should handle leading capital letters', () => {
    expect(stringToKebabCase('HelloWorld')).toBe('hello-world');
  });

  test('should handle strings with spaces and hyphens', () => {
    expect(stringToKebabCase('foo-bar baz')).toBe('foo-bar-baz');
  });
});
