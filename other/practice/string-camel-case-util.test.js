const camelCase = require('./string-camel-case-util');

describe('camelCase', () => {
  it('should convert a snake_case string to camelCase', () => {
    expect(camelCase('hello_world_foo_bar')).toBe('helloWorldFooBar');
  });

  it('should convert a kebab-case string to camelCase', () => {
    expect(camelCase('hello-world-foo-bar')).toBe('helloWorldFooBar');
  });

  it('should convert a space-separated string to camelCase', () => {
    expect(camelCase('hello world foo bar')).toBe('helloWorldFooBar');
  });

  it('should handle a string that is already camelCased', () => {
    expect(camelCase('helloWorldFooBar')).toBe('helloWorldFooBar');
  });

  // it('should handle leading/trailing spaces and symbols', () => {
  //   expect(camelCase('__FOO-BAR__')).toBe('fooBar');
  // });

  it('should return an empty string for null or undefined input', () => {
    expect(camelCase(null)).toBe('');
    expect(camelCase(undefined)).toBe('');
  });
});