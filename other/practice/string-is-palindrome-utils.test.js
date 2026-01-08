import isPalindrome from './string-is-palindrome-utils';

describe('isPalindrome', () => {
  test('should return true for a simple palindrome', () => {
    expect(isPalindrome('madam')).toBe(true);
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('should return false for a non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('world')).toBe(false);
  });

  test('should ignore case', () => {
    expect(isPalindrome('Madam')).toBe(true);
    expect(isPalindrome('Racecar')).toBe(true);
  });

  test('should ignore non-alphanumeric characters', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    expect(isPalindrome('No lemon, no melon')).toBe(true);
    expect(isPalindrome('Eva, can I stab bats in a cave?')).toBe(true);
  });

  test('should handle empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  test('should handle single character string', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  test('should handle string with only non-alphanumeric characters', () => {
    expect(isPalindrome('.,!')).toBe(true);
  });

  test('should throw TypeError if argument is not a string', () => {
    expect(() => isPalindrome(null)).toThrow(TypeError);
    expect(() => isPalindrome(undefined)).toThrow(TypeError);
    expect(() => isPalindrome(123)).toThrow(TypeError);
    expect(() => isPalindrome({})).toThrow(TypeError);
    expect(() => isPalindrome([])).toThrow(TypeError);
  });
});