import kebabToCamelCase from './string-kebab-to-camel-case-utils';

describe('kebabToCamelCase', () => {
  test('should convert a kebab-case string to camelCase', () => {
    expect(kebabToCamelCase('hello-world')).toBe('helloWorld');
  });

  test('should handle strings with multiple hyphens', () => {
    expect(kebabToCamelCase('foo-bar-baz')).toBe('fooBarBaz');
  });

  test('should handle strings that are already camelCase', () => {
    expect(kebabToCamelCase('helloWorld')).toBe('helloWorld');
  });

  test('should handle empty string', () => {
    expect(kebabToCamelCase('')).toBe('');
  });
});
