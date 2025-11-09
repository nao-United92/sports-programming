const { byteSize, truncate, escapeHTML, unescapeHTML } = require('./string-format-utils');

describe('String Format Utilities', () => {
  describe('byteSize', () => {
    it('should return the correct byte size for ASCII strings', () => {
      expect(byteSize('hello')).toBe(5);
    });

    it('should return the correct byte size for multi-byte strings', () => {
      // Note: This assumes UTF-8 encoding, where these characters are 3 bytes each.
      expect(byteSize('こんにちは')).toBe(15);
    });

    it('should return 0 for an empty string', () => {
      expect(byteSize('')).toBe(0);
    });
  });

  describe('truncate', () => {
    const text = 'This is a long string to be truncated.';

    it('should not truncate a string shorter than the specified length', () => {
      expect(truncate(text, 100)).toBe(text);
    });

    it('should truncate a string to the specified length', () => {
      const truncated = truncate(text, 20);
      expect(truncated).toBe('This is a long st...');
      expect(truncated.length).toBe(20);
    });

    it('should handle lengths smaller than or equal to 3', () => {
      expect(truncate(text, 3)).toBe('...');
      expect(truncate(text, 2)).toBe('...');
      expect(truncate('any', 3)).toBe('...');
    });

    it('should return the original value if not a string', () => {
        expect(truncate(null, 10)).toBeNull();
        expect(truncate(12345, 3)).toBe(12345);
    });
  });

  describe('escapeHTML', () => {
    it('should escape special HTML characters', () => {
      const input = '<div class="container">"Hello" & \'World\'</div>';
      const expected = '&lt;div class=&quot;container&quot;&gt;&quot;Hello&quot; &amp; &#39;World&#39;&lt;/div&gt;';
      expect(escapeHTML(input)).toBe(expected);
    });

    it('should return the original value if no special characters are present', () => {
      const input = 'Just a regular string.';
      expect(escapeHTML(input)).toBe(input);
    });

    it('should handle non-string input', () => {
        expect(escapeHTML(null)).toBeNull();
    });
  });

  describe('unescapeHTML', () => {
    it('should unescape HTML entities', () => {
      const input = '&lt;div class=&quot;container&quot;&gt;&quot;Hello&quot; &amp; &#39;World&#39;&lt;/div&gt;';
      const expected = '<div class="container">"Hello" & \'World\'</div>';
      expect(unescapeHTML(input)).toBe(expected);
    });

    it('should return the original value if no entities are present', () => {
      const input = 'Just a regular string.';
      expect(unescapeHTML(input)).toBe(input);
    });

    it('should handle non-string input', () => {
        expect(unescapeHTML(null)).toBeNull();
    });
  });
});