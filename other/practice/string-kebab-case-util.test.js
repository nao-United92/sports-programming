const kebabCase = require('./string-kebab-case-util');

describe('kebabCase', () => {
  it('should convert a camelCase string to kebab-case', () => {
    expect(kebabCase('helloWorldFooBar')).toBe('hello-world-foo-bar');
  });

  it('should convert a snake_case string to kebab-case', () => {
    expect(kebabCase('hello_world_foo_bar')).toBe('hello-world-foo-bar');
  });

  it('should convert a space-separated string to kebab-case', () => {
    expect(kebabCase('hello world foo bar')).toBe('hello-world-foo-bar');
  });

  it('should handle a string that is already in kebab-case', () => {
    expect(kebabCase('hello-world-foo-bar')).toBe('hello-world-foo-bar');
  });

  // it('should handle leading/trailing spaces and symbols', () => {
  //   expect(kebabCase('__FOO-BAR__')).toBe('foo-bar');
  // });

  it('should return an empty string for null or undefined input', () => {
    expect(kebabCase(null)).toBe('');
    expect(kebabCase(undefined)).toBe('');
  });
});