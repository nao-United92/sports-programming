import escapeHTML from './escape-html-utils.js';

describe('escapeHTML', () => {
  test('should escape special HTML characters', () => {
    const input = '<script>alert("XSS & Injection")</script>';
    const expected = '&lt;script&gt;alert(&quot;XSS &amp; Injection&quot;)&lt;/script&gt;';
    expect(escapeHTML(input)).toBe(expected);
  });

  test('should escape ampersand', () => {
    expect(escapeHTML('a & b')).toBe('a &amp; b');
  });

  test('should escape less than', () => {
    expect(escapeHTML('a < b')).toBe('a &lt; b');
  });

  test('should escape greater than', () => {
    expect(escapeHTML('a > b')).toBe('a &gt; b');
  });

  test('should escape double quote', () => {
    expect(escapeHTML('a "b" c')).toBe('a &quot;b&quot; c');
  });

  test('should escape single quote', () => {
    expect(escapeHTML("a 'b' c")).toBe("a &#39;b&#39; c");
  });

  test('should not change a string with no special characters', () => {
    const input = 'hello world 123';
    expect(escapeHTML(input)).toBe(input);
  });

  test('should return an empty string for null or undefined input', () => {
    expect(escapeHTML(null)).toBe('');
    expect(escapeHTML(undefined)).toBe('');
  });
});
