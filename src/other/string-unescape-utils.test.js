const { unescape } = require('./string-unescape-utils.js');

describe('unescape', () => {
  test('should unescape HTML entities', () => {
    expect(unescape('fred, bar, &amp; baz')).toBe('fred, bar, & baz');
    expect(unescape('&lt;')).toBe('<');
    expect(unescape('&gt;')).toBe('>');
    expect(unescape('&quot;')).toBe('"');
    expect(unescape('&#39;')).toBe(''');
    expect(unescape('&#96;')).toBe('`');
    expect(unescape('&lt;div&gt;&quot;hello&quot; &amp; &#39;world&#96;&lt;/div&gt;')).toBe('<div>"hello" & 'world`</div>');
  });

  test('should handle empty string', () => {
    expect(unescape('')).toBe('');
  });

  test('should handle string with no special characters', () => {
    expect(unescape('hello world')).toBe('hello world');
  });

  test('should handle non-string input', () => {
    expect(unescape(null)).toBe('');
    expect(unescape(undefined)).toBe('');
    expect(unescape(123)).toBe('');
  });
});
