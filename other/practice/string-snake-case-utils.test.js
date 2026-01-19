const { snakeCase } = require('./string-snake-case-utils');

describe('snakeCase', () => {
  it('should convert a camelCase string to snake_case', () => {
    expect(snakeCase('helloWorld')).toBe('hello_world');
  });

  it('should convert a PascalCase string to snake_case', () => {
    expect(snakeCase('HelloWorld')).toBe('hello_world');
  });

  it('should convert a kebab-case string to snake_case', () => {
    expect(snakeCase('hello-world')).toBe('hello_world');
  });

  it('should convert a space-separated string to snake_case', () => {
    expect(snakeCase('hello world')).toBe('hello_world');
  });

  it('should handle strings with multiple separators', () => {
    expect(snakeCase('foo--bar__baz')).toBe('foo_bar_baz');
  });

  it('should handle leading/trailing separators and spaces', () => {
    expect(snakeCase('_foo bar_')).toBe('foo_bar');
    expect(snakeCase(' Foo Bar ')).toBe('foo_bar');
  });

  it('should handle single word strings', () => {
    expect(snakeCase('hello')).toBe('hello');
  });

  it('should handle empty strings', () => {
    expect(snakeCase('')).toBe('');
  });
});
