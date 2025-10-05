import { truncate, escapeHTML, unescapeHTML } from './string-utils';

describe('String Utilities', () => {
  describe('truncate', () => {
    it('should not truncate if string is shorter than length', () => {
      expect(truncate('hello', 10)).toBe('hello');
    });

    it('should truncate string to specified length', () => {
      expect(truncate('hello world', 8)).toBe('hello...');
    });

    it('should use custom suffix', () => {
      expect(truncate('hello world', 8, '--')).toBe('hello --');
    });

    it('should handle edge case where length is less than suffix length', () => {
        expect(truncate('hello world', 2, '...')).toBe('...');
    });

    it('should return the string if its length is equal to the specified length', () => {
      expect(truncate('hello', 5)).toBe('hello');
    });
  });

  describe('escapeHTML / unescapeHTML', () => {
    it('should escape HTML characters', () => {
      const html = '<div class="test">\'Hello & World\'</div>';
      const expected = '&lt;div class=&quot;test&quot;&gt;&#39;Hello &amp; World&#39;&lt;/div&gt;';
      expect(escapeHTML(html)).toBe(expected);
    });

    it('should unescape HTML characters', () => {
      const escaped = '&lt;div class=&quot;test&quot;&gt;&#39;Hello &amp; World&#39;&lt;/div&gt;';
      const expected = '<div class="test">\'Hello & World\'</div>';
      expect(unescapeHTML(escaped)).toBe(expected);
    });
  });
});
