import stringIsPalindrome from './string-is-palindrome';

describe('stringIsPalindrome', () => {
  test('should return true for a simple palindrome', () => {
    expect(stringIsPalindrome('madam')).toBe(true);
  });

  test('should return true for a palindrome with spaces and mixed case', () => {
    expect(stringIsPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  test('should return false for a non-palindrome', () => {
    expect(stringIsPalindrome('hello')).toBe(false);
  });

  test('should return true for an empty string', () => {
    expect(stringIsPalindrome('')).toBe(true);
  });

  test('should return true for a single character string', () => {
    expect(stringIsPalindrome('a')).toBe(true);
  });

  test('should handle numbers in a palindrome', () => {
    expect(stringIsPalindrome('1racecar1')).toBe(true);
  });

  test('should handle special characters and numbers, ignoring them', () => {
    expect(stringIsPalindrome('Noel sees Leon.')).toBe(true);
    expect(stringIsPalindrome('Eva, can I stab bats in a cave?')).toBe(true);
    expect(stringIsPalindrome('Was it a car or a cat I saw?')).toBe(true);
    expect(stringIsPalindrome('0_0 (: /-\\ :) 0-0')).toBe(true); // Should clean to '00'
  });

  test('should return false for a non-palindrome with numbers and special chars', () => {
    expect(stringIsPalindrome('A man, a plan, a canoe: Panama')).toBe(false);
  });
});