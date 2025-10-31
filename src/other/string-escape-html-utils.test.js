const { escapeHTML } = require('./string-escape-html-utils');

describe('escapeHTML', () => {
  it('should escape the ampersand character', () => {
    expect(escapeHTML('hello & world')).toBe('hello &amp; world');
  });

  it('should escape the less-than character', () => {
    expect(escapeHTML('<script>')).toBe('&lt;script&gt;');
  });

  it('should escape the greater-than character', () => {
    expect(escapeHTML('1 > 0')).toBe('1 &gt; 0');
  });

  it('should escape the double-quote character', () => {
    expect(escapeHTML('attr="value"')).toBe('attr=&quot;value&quot;');
  });

  it('should escape the single-quote character', () => {
    expect(escapeHTML("attr='value'")).toBe('attr=&#39;value&#39;');
  });

  it('should escape multiple characters in a single string', () => {
    const maliciousString = '<script>alert("XSS & Injection \'here\'")</script>';
    const expected = '&lt;script&gt;alert(&quot;XSS &amp; Injection &#39;here&#39;&quot;)&lt;/script&gt;';
    expect(escapeHTML(maliciousString)).toBe(expected);
  });

  it('should return an empty string for null or undefined input', () => {
    expect(escapeHTML(null)).toBe('');
    expect(escapeHTML(undefined)).toBe('');
  });

  it('should not change a string with no special characters', () => {
    const safeString = 'This is a safe string with no special chars.';
    expect(escapeHTML(safeString)).toBe(safeString);
  });

  it('should handle non-string inputs by converting them to strings', () => {
    expect(escapeHTML(123)).toBe('123');
    expect(escapeHTML(true)).toBe('true');
  });
});
