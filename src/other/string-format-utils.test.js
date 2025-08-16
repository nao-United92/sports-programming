import { capitalizeWords, reverseString } from './string-format-utils';

describe('String Format Utilities', () => {
  describe('capitalizeWords', () => {
    it('should capitalize the first letter of each word', () => {
      expect(capitalizeWords('hello world')).toBe('Hello World');
      expect(capitalizeWords('foo bar baz')).toBe('Foo Bar Baz');
    });

    it('should handle single word strings', () => {
      expect(capitalizeWords('hello')).toBe('Hello');
    });

    it('should handle empty strings', () => {
      expect(capitalizeWords('')).toBe('');
    });
  });

  describe('reverseString', () => {
    it('should reverse a string', () => {
      expect(reverseString('hello')).toBe('olleh');
      expect(reverseString('world')).toBe('dlrow');
    });

    it('should handle empty strings', () => {
      expect(reverseString('')).toBe('');
    });

    it('should handle strings with special characters', () => {
      expect(reverseString('!@#$%')).toBe('%$#@!');
    });
  });
});
