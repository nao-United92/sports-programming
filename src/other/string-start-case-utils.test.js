const { startCase } = require('./string-start-case-utils.js');

describe('startCase', () => {
  test('should convert a string to start case', () => {
    expect(startCase('foo bar')).toBe('Foo Bar');
    expect(startCase('foo-bar')).toBe('Foo Bar');
    expect(startCase('fooBar')).toBe('Foo Bar');
    expect(startCase('__FOO_BAR__')).toBe('Foo Bar');
  });

  test('should handle empty string', () => {
    expect(startCase('')).toBe('');
  });

  test('should handle single word string', () => {
    expect(startCase('foo')).toBe('Foo');
    expect(startCase('Foo')).toBe('Foo');
  });

  test('should handle non-string input', () => {
    expect(startCase(null)).toBe('');
    expect(startCase(undefined)).toBe('');
    expect(startCase(123)).toBe('');
  });
});
