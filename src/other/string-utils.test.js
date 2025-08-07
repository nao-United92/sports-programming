import { isPalindrome } from './string-utils.js';

describe('isPalindrome', () => {
  it('should return true for a simple palindrome', () => {
    expect(isPalindrome('madam')).toBe(true);
  });

  it('should return true for a palindrome with mixed case', () => {
    expect(isPalindrome('Madam')).toBe(true);
  });

  it('should return true for a palindrome with spaces and punctuation', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  it('should return true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  it('should return true for a single character string', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  it('should return false for a non-palindrome string', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  it('should return false for numbers', () => {
    expect(isPalindrome(123)).toBe(false);
  });

  it('should return false for null', () => {
    expect(isPalindrome(null)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isPalindrome(undefined)).toBe(false);
  });
});
