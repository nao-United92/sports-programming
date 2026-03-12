const toKebabCase = require('./string-kebab-case-util');

describe('toKebabCase', () => {
  test('converts string to kebab-case', () => {
    expect(toKebabCase('helloWorld')).toBe('hello-world');
    expect(toKebabCase('hello world')).toBe('hello-world');
  });
});
