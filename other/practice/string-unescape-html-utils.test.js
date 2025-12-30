import unescapeHTML from './string-unescape-html-utils';

describe('unescapeHTML', () => {
  test('should unescape special HTML characters', () => {
    const input = '&lt;script&gt;alert(&quot;xss &amp; fun&quot;)&lt;/script&gt;';
    const expected = '<script>alert("xss & fun")</script>';
    expect(unescapeHTML(input)).toBe(expected);
  });

  test("should unescape single quotes", () => {
    expect(unescapeHTML('it&#39;s a trap')).toBe("it's a trap");
  });

  test('should return the string unchanged if no escaped characters are present', () => {
    expect(unescapeHTML('hello world')).toBe('hello world');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(unescapeHTML(null)).toBe('');
  });

  test('should handle an empty string', () => {
    expect(unescapeHTML('')).toBe('');
  });
});
