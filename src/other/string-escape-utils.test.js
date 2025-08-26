import { escape, unescape } from './string-escape-utils.js';

describe('escape and unescape', () => {
  const unescapedString = 'fred, barney, & pebbles';
  const escapedString = 'fred, barney, &amp; pebbles';

  describe('escape', () => {
    it('should escape special HTML characters', () => {
      expect(escape(unescapedString)).toBe(escapedString);
      expect(escape('<script>')).toBe('&lt;script&gt;');
    });

    it('should return the original string if no special characters are present', () => {
      expect(escape('hello world')).toBe('hello world');
    });
  });

  describe('unescape', () => {
    it('should unescape special HTML entities', () => {
      expect(unescape(escapedString)).toBe(unescapedString);
      expect(unescape('&lt;script&gt;')).toBe('<script>');
    });

    it('should return the original string if no entities are present', () => {
      expect(unescape('hello world')).toBe('hello world');
    });
  });
});
