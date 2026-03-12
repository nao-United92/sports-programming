const isPalindrome = require('./string-is-palindrome-util');

describe('isPalindrome', () => {
  test('returns true for palindrome', () => {
    expect(isPalindrome('Racecar')).toBe(true);
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  test('returns false for non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  test('throws error for non-string input', () => {
    expect(() => isPalindrome(123)).toThrow('Input must be a string');
  });
});
