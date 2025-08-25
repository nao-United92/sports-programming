const { escape, unescape } = require('./html-escape-utils.js');

describe('HTML Escape/Unescape Utilities', () => {
  const rawString = '<script>alert("XSS & Injection");</script>';
  const escapedString = '&lt;script&gt;alert(&quot;XSS &amp; Injection&quot;);&lt;/script&gt;';

  describe('escape', () => {
    it('should escape special HTML characters', () => {
      expect(escape(rawString)).toBe(escapedString);
    });

    it('should return an empty string if input is not a string', () => {
      expect(escape(null)).toBe('');
      expect(escape(undefined)).toBe('');
      expect(escape(123)).toBe('');
    });

    it('should not change a string with no special characters', () => {
      const safeString = 'Hello world, this is a test.';
      expect(escape(safeString)).toBe(safeString);
    });
  });

  describe('unescape', () => {
    it('should unescape special HTML entities', () => {
      expect(unescape(escapedString)).toBe(rawString);
    });

    it('should return an empty string if input is not a string', () => {
      expect(unescape(null)).toBe('');
      expect(unescape(undefined)).toBe('');
      expect(unescape(555)).toBe('');
    });

    it('should not change a string with no HTML entities', () => {
      const safeString = 'Hello world, this is a test.';
      expect(unescape(safeString)).toBe(safeString);
    });
  });
});
