import { unescapeHTML } from './unescape-html-utils.js';

describe('unescapeHTML', () => {
  test('should unescape HTML entities', () => {
    const unescaped = '<script>alert("xss")</script>';
    const escaped = '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;';
    expect(unescapeHTML(escaped)).toBe(unescaped);
  });

  test('should handle mixed content', () => {
    const text = 'Me, Myself &amp; I';
    const unescaped = 'Me, Myself & I';
    expect(unescapeHTML(text)).toBe(unescaped);
  });

  test('should handle single quotes', () => {
    const text = 'It&#39;s a beautiful day.';
    const unescaped = "It's a beautiful day.";
    expect(unescapeHTML(text)).toBe(unescaped);
  });

  test('should return an empty string for non-string input', () => {
    expect(unescapeHTML(null)).toBe('');
    expect(unescapeHTML(undefined)).toBe('');
    expect(unescapeHTML(123)).toBe('');
    expect(unescapeHTML({})).toBe('');
    expect(unescapeHTML([])).toBe('');
  });

  test('should not affect strings without HTML entities', () => {
    const text = 'Hello world';
    expect(unescapeHTML(text)).toBe(text);
  });
});
