const isPalindrome = require('./string-is-palindrome');

describe('string-is-palindrome', () => {
  test('returns true for palindromes', () => {
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    expect(isPalindrome('No lemon, no melon')).toBe(true);
  });

  test('returns false for non-palindromes', () => {
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('world')).toBe(false);
  });

  test('handles empty strings', () => {
    expect(isPalindrome('')).toBe(true);
  });

  test('handles non-string inputs', () => {
    expect(isPalindrome(null)).toBe(false);
    expect(isPalindrome(123)).toBe(false);
  });
});
