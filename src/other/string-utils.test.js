const { truncate, toCamelCase } = require('./string-utils');

describe('truncate', () => {
  test('should truncate a string that is longer than the max length', () => {
    expect(truncate('hello world', 5)).toBe('he...');
  });

  test('should not truncate a string that is shorter than the max length', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  test('should use a custom suffix', () => {
    expect(truncate('hello world', 8, '--')).toBe('hello --');
  });
});

describe('toCamelCase', () => {
  test('should convert a kebab-case string to camelCase', () => {
    expect(toCamelCase('hello-world')).toBe('helloWorld');
  });

  test('should convert a snake_case string to camelCase', () => {
    expect(toCamelCase('hello_world')).toBe('helloWorld');
  });
});