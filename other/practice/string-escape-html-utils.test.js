import escapeHTML from './string-escape-html-utils';

describe('escapeHTML', () => {
  test('should escape special HTML characters', () => {
    const input = '<script>alert("xss & fun")</script>';
    const expected = '&lt;script&gt;alert(&quot;xss &amp; fun&quot;)&lt;/script&gt;';
    expect(escapeHTML(input)).toBe(expected);
  });

  test("should escape single quotes", () => {
    expect(escapeHTML("it's a trap")).toBe('it&#39;s a trap');
  });

  test('should return the string unchanged if no special characters are present', () => {
    expect(escapeHTML('hello world')).toBe('hello world');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(escapeHTML(null)).toBe('');
    expect(escapeHTML(undefined)).toBe('');
    expect(escapeHTML(123)).toBe('');
  });

  test('should handle an empty string', () => {
    expect(escapeHTML('')).toBe('');
  });
});
