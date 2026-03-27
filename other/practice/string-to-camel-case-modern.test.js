const toCamelCaseModern = require('./string-to-camel-case-modern');

describe('toCamelCaseModern', () => {
  test('should convert kebab-case to camelCase', () => {
    expect(toCamelCaseModern('hello-world')).toBe('helloWorld');
  });

  test('should convert snake_case to camelCase', () => {
    expect(toCamelCaseModern('hello_world')).toBe('helloWorld');
  });

  test('should convert space separated string to camelCase', () => {
    expect(toCamelCaseModern('hello world')).toBe('helloWorld');
  });

  test('should handle already camelCased string', () => {
    expect(toCamelCaseModern('helloWorld')).toBe('helloWorld');
  });

  test('should handle capitalized words', () => {
    expect(toCamelCaseModern('Hello World')).toBe('helloWorld');
  });

  test('should handle empty string', () => {
    expect(toCamelCaseModern('')).toBe('');
  });

  test('should handle non-string input', () => {
    expect(toCamelCaseModern(null)).toBe('');
  });
});
