const { escapeHtml, unescapeHtml } = require('./html-escaper');

describe('HTML Escaper', () => {
  test('escapeHtml should escape HTML special characters', () => {
    const input = '<div>Hello & World!</div>';
    const expected = '&lt;div&gt;Hello &amp; World!&lt;/div&gt;';
    expect(escapeHtml(input)).toBe(expected);
  });

  test('escapeHtml should handle empty string', () => {
    expect(escapeHtml('')).toBe('');
  });

  test('escapeHtml should handle non-string inputs', () => {
    expect(escapeHtml(null)).toBe('');
    expect(escapeHtml(undefined)).toBe('');
    expect(escapeHtml(123)).toBe('');
  });

  test('unescapeHtml should unescape HTML entities', () => {
    const input = '&lt;div&gt;Hello &amp; World!&lt;/div&gt;';
    const expected = '<div>Hello & World!</div>';
    expect(unescapeHtml(input)).toBe(expected);
  });

  test('unescapeHtml should handle empty string', () => {
    expect(unescapeHtml('')).toBe('');
  });

  test('unescapeHtml should handle non-string inputs', () => {
    expect(unescapeHtml(null)).toBe('');
    expect(unescapeHtml(undefined)).toBe('');
    expect(unescapeHtml(123)).toBe('');
  });

  test('should correctly escape and unescape a string', () => {
    const original = '<p>Test & "Quotes"</p>';
    const escaped = escapeHtml(original);
    const unescaped = unescapeHtml(escaped);
    expect(unescaped).toBe(original);
  });
});
