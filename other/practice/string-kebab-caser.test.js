const { kebabCase } = require('./string-kebab-caser.js');

describe('kebabCase', () => {
  test('should convert a camelCase string to kebab-case', () => {
    expect(kebabCase('helloWorld')).toBe('hello-world');
  });

  test('should convert a PascalCase string to kebab-case', () => {
    expect(kebabCase('HelloWorld')).toBe('hello-world');
  });

  test('should convert a space-separated string to kebab-case', () => {
    expect(kebabCase('hello world')).toBe('hello-world');
  });

  test('should convert a snake_case string to kebab-case', () => {
    expect(kebabCase('hello_world')).toBe('hello-world');
  });

  test('should handle a string already in kebab-case', () => {
    expect(kebabCase('hello-world')).toBe('hello-world');
  });

  test('should handle an empty string', () => {
    expect(kebabCase('')).toBe('');
  });

  test('should handle single words', () => {
    expect(kebabCase('word')).toBe('word');
    expect(kebabCase('Word')).toBe('word');
  });

  test('should handle complex strings with multiple delimiters and numbers', () => {
    expect(kebabCase('fooBar_baz Bat123')).toBe('foo-bar-baz-bat123');
  });

  test('should handle leading/trailing spaces by removing them and converting to kebab-case', () => {
    expect(kebabCase('  Hello World  ')).toBe('hello-world');
  });

  test('should handle numbers within the string correctly', () => {
    expect(kebabCase('Version1_0')).toBe('version1-0');
  });

  test('should throw an error if the argument is not a string', () => {
    expect(() => kebabCase(null)).toThrow('Expected a string for the first argument.');
    expect(() => kebabCase(undefined)).toThrow('Expected a string for the first argument.');
    expect(() => kebabCase(123)).toThrow('Expected a string for the first argument.');
    expect(() => kebabCase({})).toThrow('Expected a string for the first argument.');
  });
});
