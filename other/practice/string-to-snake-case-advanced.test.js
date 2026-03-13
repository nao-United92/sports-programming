const toSnakeCaseAdvanced = require('./string-to-snake-case-advanced');

describe('toSnakeCaseAdvanced', () => {
  test('converts various formats to snake_case', () => {
    expect(toSnakeCaseAdvanced('fooBar')).toBe('foo_bar');
    expect(toSnakeCaseAdvanced('foo-bar')).toBe('foo_bar');
    expect(toSnakeCaseAdvanced('foo.bar')).toBe('foo_bar');
  });

  test('handles multiple uppercase letters', () => {
    expect(toSnakeCaseAdvanced('XMLHttpRequest')).toBe('xml_http_request');
  });

  test('handles spaces and hyphens', () => {
    expect(toSnakeCaseAdvanced('foo bar-baz')).toBe('foo_bar_baz');
  });

  test('returns empty string for blank input', () => {
    expect(toSnakeCaseAdvanced('')).toBe('');
    expect(toSnakeCaseAdvanced(null)).toBe('');
  });
});
