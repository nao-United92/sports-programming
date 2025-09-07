import { reverseString, isPalindrome, truncate } from './string-utils.js';

describe('String Utilities', () => {
  describe('reverseString', () => {
    it('should reverse a simple string', () => {
      expect(reverseString('hello')).toBe('olleh');
    });

    it('should return an empty string if given an empty string', () => {
      expect(reverseString('')).toBe('');
    });

    it('should handle strings with spaces', () => {
      expect(reverseString('hello world')).toBe('dlrow olleh');
    });
  });

  describe('isPalindrome', () => {
    it('should return true for a simple palindrome', () => {
      expect(isPalindrome('madam')).toBe(true);
    });

    it('should return false for a non-palindrome', () => {
      expect(isPalindrome('hello')).toBe(false);
    });

    it('should be case-insensitive', () => {
      expect(isPalindrome('Madam')).toBe(true);
    });

    it('should ignore non-alphanumeric characters', () => {
      expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    });

    it('should return true for an empty string', () => {
      expect(isPalindrome('')).toBe(true);
    });
  });

  describe('truncate', () => {
    it('should not truncate a string shorter than the specified length', () => {
      expect(truncate('hi', 5)).toBe('hi');
    });

    it('should truncate a string longer than the specified length and add ellipsis', () => {
      expect(truncate('hello world', 5)).toBe('hello...');
    });

    it('should return the original string if its length is equal to the specified number', () => {
      expect(truncate('hello', 5)).toBe('hello');
    });

    it('should handle an empty string', () => {
      expect(truncate('', 5)).toBe('');
    });
  });
});