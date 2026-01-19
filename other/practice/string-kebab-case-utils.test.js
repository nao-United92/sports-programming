const { kebabCase } = require('./string-kebab-case-utils');

describe('kebabCase', () => {
  it('should convert a camelCase string to kebab-case', () => {
    expect(kebabCase('helloWorld')).toBe('hello-world');
  });

  it('should convert a PascalCase string to kebab-case', () => {
    expect(kebabCase('HelloWorld')).toBe('hello-world');
  });

  it('should convert a snake_case string to kebab-case', () => {
    expect(kebabCase('hello_world')).toBe('hello-world');
  });

  it('should convert a space-separated string to kebab-case', () => {
    expect(kebabCase('hello world')).toBe('hello-world');
  });

  it('should handle strings with multiple separators', () => {
    expect(kebabCase('foo--bar__baz')).toBe('foo-bar-baz');
  });

  it('should handle leading/trailing separators and spaces', () => {
    expect(kebabCase('-foo bar-')).toBe('foo-bar');
    expect(kebabCase(' Foo Bar ')).toBe('foo-bar');
  });

  it('should handle single word strings', () => {
    expect(kebabCase('hello')).toBe('hello');
  });

  it('should handle empty strings', () => {
    expect(kebabCase('')).toBe('');
  });
});
