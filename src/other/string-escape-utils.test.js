const { escape } = require('./string-escape-utils.js');

describe('escape', () => {
  test('should escape HTML special characters', () => {
    expect(escape('fred, bar, & baz')).toBe('fred, bar, &amp; baz');
    expect(escape('<')).toBe('&lt;');
    expect(escape('>')).toBe('&gt;');
    expect(escape('"')).toBe('&quot;');
    expect(escape(''')).toBe('&#39;');
    expect(escape('`')).toBe('&#96;');
    expect(escape('<div>"hello" & 'world`</div>')).toBe('&lt;div&gt;&quot;hello&quot; &amp; &#39;world&#96;&lt;/div&gt;');
  });

  test('should handle empty string', () => {
    expect(escape('')).toBe('');
  });

  test('should handle string with no special characters', () => {
    expect(escape('hello world')).toBe('hello world');
  });

  test('should handle non-string input', () => {
    expect(escape(null)).toBe('');
    expect(escape(undefined)).toBe('');
    expect(escape(123)).toBe('');
  });
});