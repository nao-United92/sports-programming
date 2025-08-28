import { escapeHTML, unescapeHTML } from './string-utils.js';

describe('string-utils', () => {
  describe('escapeHTML', () => {
    it('should escape HTML special characters', () => {
      expect(escapeHTML('<script>alert("xss")</script>')).toBe('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;');
      expect(escapeHTML("it's a 'test'")).toBe('it&#039;s a &#039;test&#039;');
      expect(escapeHTML('a & b')).toBe('a &amp; b');
    });

    it('should return an empty string for non-string inputs', () => {
      expect(escapeHTML(null)).toBe('');
      expect(escapeHTML(undefined)).toBe('');
      expect(escapeHTML(123)).toBe('');
      expect(escapeHTML({})).toBe('');
    });
  });

  describe('unescapeHTML', () => {
    it('should unescape HTML special characters', () => {
      expect(unescapeHTML('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;')).toBe('<script>alert("xss")</script>');
      expect(unescapeHTML('it&#039;s a &#039;test&#039;')).toBe("it's a 'test'");
      expect(unescapeHTML('a &amp; b')).toBe('a & b');
    });

    it('should return an empty string for non-string inputs', () => {
      expect(unescapeHTML(null)).toBe('');
      expect(unescapeHTML(undefined)).toBe('');
      expect(unescapeHTML(123)).toBe('');
      expect(unescapeHTML({})).toBe('');
    });
  });
});