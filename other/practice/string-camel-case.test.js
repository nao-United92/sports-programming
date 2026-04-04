const toCamelCase = require('./string-camel-case');

describe('toCamelCase', () => {
  test('should convert snake_case to camelCase', () => {
    expect(toCamelCase('hello_world')).toBe('helloWorld');
  });

  test('should convert kebab-case to camelCase', () => {
    expect(toCamelCase('hello-world')).toBe('helloWorld');
  });

  test('should handle multiple underscores or hyphens', () => {
    expect(toCamelCase('hello__world--foo')).toBe('helloWorldFoo');
  });

  test('should handle leading capital letters', () => {
    expect(toCamelCase('Hello-World')).toBe('helloWorld');
  });

  test('should handle single words', () => {
    expect(toCamelCase('hello')).toBe('hello');
    expect(toCamelCase('Hello')).toBe('hello');
  });
});
