import { truncate, escapeHTML } from './string-utils.js';

describe('String Utilities', () => {
  describe('truncate', () => {
    it('should not truncate a string shorter than the specified length', () => {
      expect(truncate('hello', 10)).toBe('hello');
    });

    it('should truncate a string longer than the specified length', () => {
      expect(truncate('hello world', 8)).toBe('hello...');
    });

    it('should use a custom suffix', () => {
      expect(truncate('hello world', 8, '--')).toBe('hello --');
    });

    it('should handle edge cases where length is equal to string length', () => {
      expect(truncate('hello', 5)).toBe('hello');
    });

    it('should handle edge cases where suffix is longer than length', () => {
      expect(truncate('hello', 2, '...')).toBe('..');
    });
  });

  describe('escapeHTML', () => {
    it('should escape HTML special characters', () => {
      expect(escapeHTML('<script>alert("xss")</script>')).toBe('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;');
    });

    it('should not change a string with no special characters', () => {
      expect(escapeHTML('hello world')).toBe('hello world');
    });

    it('should handle all special characters', () => {
      expect(escapeHTML('&<>"\'')).toBe('&amp;&lt;&gt;&quot;&#039;');
    });
  });
});