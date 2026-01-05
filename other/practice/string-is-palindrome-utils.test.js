import isPalindrome from './string-is-palindrome-utils';

describe('isPalindrome', () => {
  test('should return true for palindromic strings', () => {
    expect(isPalindrome('madam')).toBe(true);
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    expect(isPalindrome('No lemon, no melon')).toBe(true);
    expect(isPalindrome('')).toBe(true); // Empty string is a palindrome
    expect(isPalindrome('a')).toBe(true); // Single character is a palindrome
  });

  test('should return false for non-palindromic strings', () => {
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('world')).toBe(false);
    expect(isPalindrome('not a palindrome')).toBe(false);
  });

  test('should handle strings with different cases and special characters', () => {
    expect(isPalindrome('Madam')).toBe(true);
    expect(isPalindrome('Race Car')).toBe(true);
    expect(isPalindrome('Was it a car or a cat I saw?')).toBe(true);
  });

  test('should throw an error if the argument is not a string', () => {
    expect(() => isPalindrome(null)).toThrow(TypeError);
    expect(() => isPalindrome(undefined)).toThrow(TypeError);
    expect(() => isPalindrome(123)).toThrow(TypeError);
    expect(() => isPalindrome([])).toThrow(TypeError);
    expect(() => isPalindrome({})).toThrow(TypeError);
  });
});
