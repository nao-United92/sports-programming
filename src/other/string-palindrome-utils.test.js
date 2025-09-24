import { isPalindrome } from './string-palindrome-utils';

describe('isPalindrome', () => {
  test('should return true for a simple palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('should return true for a palindrome with mixed case', () => {
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
  });

  test('should return false for a non-palindrome string', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  test('should return true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  test('should handle strings with punctuation and spaces', () => {
    expect(isPalindrome('Was it a car or a cat I saw?')).toBe(true);
  });

  test('should return false for non-string inputs', () => {
    expect(isPalindrome(12321)).toBe(false);
    expect(isPalindrome(null)).toBe(false);
    expect(isPalindrome(undefined)).toBe(false);
  });
});
