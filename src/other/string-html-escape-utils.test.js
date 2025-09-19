import { escape, unescape } from './string-html-escape-utils.js';

describe('escape and unescape', () => {
  const unescapedString = 'fred, barney, & pebbles';
  const escapedString = 'fred, barney, &amp; pebbles';

  const allSpecialChars = '<script>alert("XSS & Injection");</script>';
  const allEscapedChars = '&lt;script&gt;alert(&quot;XSS &amp; Injection&quot;);&lt;/script&gt;';

  describe('escape', () => {
    test('should escape special HTML characters', () => {
      expect(escape(unescapedString)).toBe(escapedString);
    });

    test('should escape all special characters correctly', () => {
      expect(escape(allSpecialChars)).toBe(allEscapedChars);
    });

    test('should return the original string if no special characters are present', () => {
      const str = 'hello world';
      expect(escape(str)).toBe(str);
    });

    test('should handle an empty string', () => {
      expect(escape('')).toBe('');
    });
  });

  describe('unescape', () => {
    test('should unescape HTML entities', () => {
      expect(unescape(escapedString)).toBe(unescapedString);
    });

    test('should unescape all entities correctly', () => {
      expect(unescape(allEscapedChars)).toBe(allSpecialChars);
    });

    test('should return the original string if no entities are present', () => {
      const str = 'hello world';
      expect(unescape(str)).toBe(str);
    });

    test('should handle an empty string', () => {
      expect(unescape('')).toBe('');
    });
  });

  describe('Symmetry', () => {
    test('unescape(escape(str)) should return the original string', () => {
      expect(unescape(escape(allSpecialChars))).toBe(allSpecialChars);
    });
  });
});
