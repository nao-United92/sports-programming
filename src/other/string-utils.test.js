import { capitalize, reverseString, isPalindrome, truncate } from './string-utils.js';

describe('string-utils', () => {
  describe('capitalize', () => {
    it('should capitalize the first letter of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    it('should return an empty string if the input is not a string', () => {
      expect(capitalize(123)).toBe('');
    });
  });

  describe('reverseString', () => {
    it('should reverse a string', () => {
      expect(reverseString('hello')).toBe('olleh');
    });

    it('should return an empty string if the input is not a string', () => {
      expect(reverseString(123)).toBe('');
    });
  });

  describe('isPalindrome', () => {
    it('should return true for a palindrome', () => {
      expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    });

    it('should return false for a non-palindrome', () => {
      expect(isPalindrome('hello')).toBe(false);
    });
  });

  describe('truncate', () => {
    it('should truncate a string', () => {
      expect(truncate('hello world', 8)).toBe('hello...');
    });

    it('should not truncate a string if it is shorter than the max length', () => {
      expect(truncate('hello', 10)).toBe('hello');
    });
  });
});
