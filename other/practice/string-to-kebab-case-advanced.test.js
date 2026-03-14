const toKebabCaseAdvanced = require('./string-to-kebab-case-advanced');

describe('toKebabCaseAdvanced', () => {
  test('converts various formats to kebab-case', () => {
    expect(toKebabCaseAdvanced('fooBar')).toBe('foo-bar');
    expect(toKebabCaseAdvanced('FOO_BAR')).toBe('foo-bar');
    expect(toKebabCaseAdvanced('foo.bar')).toBe('foo-bar');
  });

  test('handles multiple uppercase letters', () => {
    expect(toKebabCaseAdvanced('XMLHttpRequest')).toBe('xml-http-request');
  });

  test('handles spaces and underscores', () => {
    expect(toKebabCaseAdvanced('foo bar_baz')).toBe('foo-bar-baz');
  });

  test('returns empty string for blank input', () => {
    expect(toKebabCaseAdvanced('')).toBe('');
    expect(toKebabCaseAdvanced(null)).toBe('');
  });
});
