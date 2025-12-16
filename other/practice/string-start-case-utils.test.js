const startCase = require('./string-start-case-utils');

describe('startCase', () => {
  it('should convert a kebab-case string to Start Case', () => {
    expect(startCase('hello-world')).toBe('Hello World');
  });

  it('should convert a snake_case string to Start Case', () => {
    expect(startCase('hello_world')).toBe('Hello World');
  });

  it('should convert a camelCase string to Start Case', () => {
    expect(startCase('helloWorld')).toBe('Hello World');
  });

  it('should handle mixed separators', () => {
    expect(startCase('--foo-bar--')).toBe('Foo Bar');
  });

  it('should handle all-caps words', () => {
    expect(startCase('FOO BAR')).toBe('Foo Bar');
  });

  it('should return an empty string for non-string inputs', () => {
    expect(startCase(null)).toBe('');
    expect(startCase(undefined)).toBe('');
  });
});
