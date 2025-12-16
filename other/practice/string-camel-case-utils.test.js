const camelCase = require('./string-camel-case-utils');

describe('camelCase', () => {
  it('should convert a snake_case string to camelCase', () => {
    expect(camelCase('hello_world_from_js')).toBe('helloWorldFromJs');
  });

  it('should convert a kebab-case string to camelCase', () => {
    expect(camelCase('hello-world-from-js')).toBe('helloWorldFromJs');
  });

  it('should convert a space-separated string to camelCase', () => {
    expect(camelCase('Hello World From JS')).toBe('helloWorldFromJs');
  });

  it('should handle already camelCased strings', () => {
    expect(camelCase('helloWorldFromJs')).toBe('helloWorldFromJs');
  });

  it('should handle strings with leading/trailing spaces and separators', () => {
    expect(camelCase('  --hello-world--  ')).toBe('helloWorld');
  });

  // it('should handle strings with mixed separators', () => {
  //   expect(camelCase('__FOO-BAR__')).toBe('fooBar');
  // });

  it('should return an empty string for non-string inputs', () => {
    expect(camelCase(null)).toBe('');
    expect(camelCase(undefined)).toBe('');
    expect(camelCase(123)).toBe('');
    expect(camelCase({})).toBe('');
  });
});