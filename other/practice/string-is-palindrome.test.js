const { isPalindrome } = require('./string-is-palindrome');

describe('isPalindrome', () => {
  test('should return true for a simple palindrome', () => {
    expect(isPalindrome('madam')).toBe(true);
  });

  test('should return false for a non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  test('should handle palindromes with different cases', () => {
    expect(isPalindrome('Madam')).toBe(true);
    expect(isPalindrome('Racecar')).toBe(true);
  });

  test('should handle palindromes with spaces and punctuation', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    expect(isPalindrome('No lemon, no melon')).toBe(true);
  });

  test('should handle empty strings as palindromes', () => {
    expect(isPalindrome('')).toBe(true);
  });

  test('should handle single character strings as palindromes', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  test('should return false for non-palindromes with spaces and punctuation', () => {
    expect(isPalindrome('hello world')).toBe(false);
  });

  test('should throw an error if the argument is not a string', () => {
    expect(() => isPalindrome(123)).toThrow(TypeError);
    expect(() => isPalindrome(null)).toThrow(TypeError);
    expect(() => isPalindrome(undefined)).toThrow(TypeError);
    expect(() => isPalindrome({})).toThrow(TypeError);
  });
});
