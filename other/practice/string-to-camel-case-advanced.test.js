const toCamelCaseAdvanced = require('./string-to-camel-case-advanced');

describe('toCamelCaseAdvanced', () => {
  test('converts various formats to camelCase', () => {
    expect(toCamelCaseAdvanced('foo-bar')).toBe('fooBar');
    expect(toCamelCaseAdvanced('FOO_BAR')).toBe('fooBar');
    expect(toCamelCaseAdvanced('foo.bar')).toBe('fooBar');
    expect(toCamelCaseAdvanced('FooBar')).toBe('fooBar');
  });

  test('handles spaces', () => {
    expect(toCamelCaseAdvanced('foo bar baz')).toBe('fooBarBaz');
  });

  test('handles multiple uppercase letters', () => {
    expect(toCamelCaseAdvanced('XMLHttpRequest')).toBe('xmlHttpRequest');
  });

  test('returns empty string for empty input', () => {
    expect(toCamelCaseAdvanced('')).toBe('');
  });
});
