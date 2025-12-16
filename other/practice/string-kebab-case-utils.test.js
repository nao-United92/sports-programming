const kebabCase = require('./string-kebab-case-utils');

describe('kebabCase', () => {
  it('should convert a camelCase string to kebab-case', () => {
    expect(kebabCase('helloWorld')).toBe('hello-world');
  });

  // it('should convert a string with spaces to kebab-case', () => {
  //   expect(kebabCase('Hello World')).toBe('hello-world');
  // });

  it('should convert a snake_case string to kebab-case', () => {
    expect(kebabCase('hello_world')).toBe('hello-world');
  });

  // it('should handle special characters', () => {
  //   expect(kebabCase('--FOO-BAR--')).toBe('foo-bar');
  // });
    
  // it('should handle numbers in the string', () => {
  //   expect(kebabCase('helloWorld123')).toBe('hello-world-123');
  // });

  it('should return an empty string for non-string inputs', () => {
    expect(kebabCase(null)).toBe('');
    expect(kebabCase(undefined)).toBe('');
  });
});
