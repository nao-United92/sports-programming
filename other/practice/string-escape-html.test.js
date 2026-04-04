const escapeHTML = require('./string-escape-html');

describe('escapeHTML', () => {
  test('should escape special characters', () => {
    expect(escapeHTML('<b>"Hello" & \'World\'</b>')).toBe('&lt;b&gt;&quot;Hello&quot; &amp; &#39;World&#39;&lt;/b&gt;');
  });

  test('should handle string without special characters', () => {
    expect(escapeHTML('Hello World')).toBe('Hello World');
  });

  test('should escape multiple occurrences', () => {
    expect(escapeHTML('&&&')).toBe('&amp;&amp;&amp;');
  });
});
