import pascalCase from './string-pascal-case-utils';

describe('pascalCase', () => {
  test('should convert camelCase to PascalCase', () => {
    expect(pascalCase('helloWorld')).toBe('HelloWorld');
    expect(pascalCase('fooBarBaz')).toBe('FooBarBaz');
  });

  test('should convert kebab-case to PascalCase', () => {
    expect(pascalCase('hello-world')).toBe('HelloWorld');
    expect(pascalCase('foo-bar-baz')).toBe('FooBarBaz');
  });

  test('should convert snake_case to PascalCase', () => {
    expect(pascalCase('hello_world')).toBe('HelloWorld');
    expect(pascalCase('foo_bar_baz')).toBe('FooBarBaz');
  });

  test('should convert space-separated words to PascalCase', () => {
    expect(pascalCase('hello world')).toBe('HelloWorld');
    expect(pascalCase('foo bar baz')).toBe('FooBarBaz');
  });

  test('should handle mixed delimiters', () => {
    expect(pascalCase('Hello-world_this Is A-test')).toBe('HelloWorldThisIsATest');
  });

  test('should handle leading/trailing spaces and multiple delimiters', () => {
    expect(pascalCase('  --Hello World--  ')).toBe('HelloWorld');
    expect(pascalCase('__foo   bar__')).toBe('FooBar');
  });

  test('should handle strings with numbers', () => {
    expect(pascalCase('fooBar123')).toBe('FooBar123');
    expect(pascalCase('foo-123-bar')).toBe('Foo123Bar');
  });

  test('should handle empty string', () => {
    expect(pascalCase('')).toBe('');
  });

  test('should throw TypeError if argument is not a string', () => {
    expect(() => pascalCase(null)).toThrow(TypeError);
    expect(() => pascalCase(undefined)).toThrow(TypeError);
    expect(() => pascalCase(123)).toThrow(TypeError);
    expect(() => pascalCase({})).toThrow(TypeError);
  });
});