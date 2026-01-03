const snakeCase = require('./string-snake-case-util');

describe('snakeCase', () => {
  it('should convert a camelCase string to snake_case', () => {
    expect(snakeCase('helloWorldFooBar')).toBe('hello_world_foo_bar');
  });

  it('should convert a kebab-case string to snake_case', () => {
    expect(snakeCase('hello-world-foo-bar')).toBe('hello_world_foo_bar');
  });

  it('should convert a space-separated string to snake_case', () => {
    expect(snakeCase('hello world foo bar')).toBe('hello_world_foo_bar');
  });

  it('should handle a string that is already in snake_case', () => {
    expect(snakeCase('hello_world_foo_bar')).toBe('hello_world_foo_bar');
  });

  // it('should handle leading/trailing spaces and symbols', () => {
  //   expect(snakeCase('__FOO-BAR__')).toBe('foo_bar');
  // });

  it('should return an empty string for null or undefined input', () => {
    expect(snakeCase(null)).toBe('');
    expect(snakeCase(undefined)).toBe('');
  });
});