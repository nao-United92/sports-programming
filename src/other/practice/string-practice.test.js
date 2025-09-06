import { countWords, reverseString } from './string-practice.js';

describe('String Practice', () => {
  describe('countWords', () => {
    test('should return correct word count', () => {
      expect(countWords('hello world')).toBe(2);
      expect(countWords('  leading and trailing spaces  ')).toBe(4);
      expect(countWords('one')).toBe(1);
      expect(countWords('')).toBe(0);
      expect(countWords(null)).toBe(0);
    });
  });

  describe('reverseString', () => {
    test('should reverse the string', () => {
      expect(reverseString('hello')).toBe('olleh');
      expect(reverseString('world')).toBe('dlrow');
      expect(reverseString('')).toBe('');
      expect(reverseString(null)).toBe('');
    });
  });
});
