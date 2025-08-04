import { truncate, isPalindrome } from './string-utils.js';

describe('string-utils', () => {
  describe('truncate', () => {
    it('should truncate a string if it is longer than the specified number', () => {
      expect(truncate('Hello World', 5)).toBe('Hello...');
    });

    it('should not truncate a string if it is shorter than or equal to the specified number', () => {
      expect(truncate('Hello', 10)).toBe('Hello');
    });
  });

  describe('isPalindrome', () => {
    it('should return true for a palindrome', () => {
      expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    });

    it('should return false for a non-palindrome', () => {
      expect(isPalindrome('hello world')).toBe(false);
    });
  });
});
