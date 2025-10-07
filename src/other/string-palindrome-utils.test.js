import { isPalindrome } from './string-palindrome-utils.js';

describe('isPalindrome', () => {
  test('should return true for a simple palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('level')).toBe(true);
  });

  test('should return true for a palindrome with mixed case and punctuation', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    expect(isPalindrome('No \'x\' in Nixon')).toBe(true);
  });

  test('should return false for a non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('world')).toBe(false);
  });

  test('should return true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  test('should return true for a single character string', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  test('should return false for non-string inputs', () => {
    expect(isPalindrome(null)).toBe(false);
    expect(isPalindrome(undefined)).toBe(false);
    expect(isPalindrome(121)).toBe(false);
    expect(isPalindrome({})).toBe(false);
    expect(isPalindrome([])).toBe(false);
  });
});