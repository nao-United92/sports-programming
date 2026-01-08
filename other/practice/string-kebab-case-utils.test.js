import kebabCase from './string-kebab-case-utils';

describe('kebabCase', () => {
  test('should convert camelCase to kebab-case', () => {
    expect(kebabCase('helloWorld')).toBe('hello-world');
    expect(kebabCase('fooBarBaz')).toBe('foo-bar-baz');
  });

  test('should convert PascalCase to kebab-case', () => {
    expect(kebabCase('HelloWorld')).toBe('hello-world');
    expect(kebabCase('FooBarBaz')).toBe('foo-bar-baz');
  });

  test('should convert snake_case to kebab-case', () => {
    expect(kebabCase('hello_world')).toBe('hello-world');
    expect(kebabCase('foo_bar_baz')).toBe('foo-bar-baz');
  });

  test('should convert space-separated words to kebab-case', () => {
    expect(kebabCase('Hello World')).toBe('hello-world');
    expect(kebabCase('foo bar baz')).toBe('foo-bar-baz');
  });

  test('should handle mixed delimiters', () => {
    expect(kebabCase('Hello-world_this Is A-test')).toBe('hello-world-this-is-a-test');
  });

  test('should handle leading/trailing spaces and multiple delimiters', () => {
    expect(kebabCase('  --Hello World--  ')).toBe('hello-world');
    expect(kebabCase('__foo   bar__')).toBe('foo-bar');
  });

  test('should handle strings with numbers', () => {
    expect(kebabCase('fooBar123')).toBe('foo-bar-123');
    expect(kebabCase('foo-123-bar')).toBe('foo-123-bar');
  });

  test('should handle empty string', () => {
    expect(kebabCase('')).toBe('');
  });

  test('should throw TypeError if argument is not a string', () => {
    expect(() => kebabCase(null)).toThrow(TypeError);
    expect(() => kebabCase(undefined)).toThrow(TypeError);
    expect(() => kebabCase(123)).toThrow(TypeError);
    expect(() => kebabCase({})).toThrow(TypeError);
  });
});