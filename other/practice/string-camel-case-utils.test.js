import camelCase from './string-camel-case-utils';

describe('camelCase', () => {
  test('should convert kebab-case to camelCase', () => {
    expect(camelCase('hello-world')).toBe('helloWorld');
    expect(camelCase('foo-bar-baz')).toBe('fooBarBaz');
  });

  test('should convert snake_case to camelCase', () => {
    expect(camelCase('hello_world')).toBe('helloWorld');
    expect(camelCase('foo_bar_baz')).toBe('fooBarBaz');
  });

  test('should convert space-separated words to camelCase', () => {
    expect(camelCase('Hello World')).toBe('helloWorld');
    expect(camelCase('foo bar baz')).toBe('fooBarBaz');
  });

  test('should handle mixed delimiters', () => {
    expect(camelCase('Hello-world_this is a-test')).toBe('helloWorldThisIsATest');
  });

  test('should handle leading/trailing spaces and multiple delimiters', () => {
    expect(camelCase('  --Hello World--  ')).toBe('helloWorld');
    expect(camelCase('__foo   bar__')).toBe('fooBar');
  });

  test('should handle strings with existing camelCase by converting them fully', () => {
    expect(camelCase('existingCamelCase')).toBe('existingcamelcase');
    expect(camelCase('AnotherExistingCamelCase')).toBe('anotherexistingcamelcase');
  });

  test('should handle numbers within the string', () => {
    expect(camelCase('foo-bar-123')).toBe('fooBar123');
    expect(camelCase('foo-123-bar')).toBe('foo123Bar');
  });

  test('should handle empty string', () => {
    expect(camelCase('')).toBe('');
  });

  test('should throw TypeError if argument is not a string', () => {
    expect(() => camelCase(null)).toThrow(TypeError);
    expect(() => camelCase(undefined)).toThrow(TypeError);
    expect(() => camelCase(123)).toThrow(TypeError);
    expect(() => camelCase({})).toThrow(TypeError);
  });
});