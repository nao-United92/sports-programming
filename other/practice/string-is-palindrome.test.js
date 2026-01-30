// other/practice/string-is-palindrome.test.js
const stringIsPalindrome = require('./string-is-palindrome');

describe('stringIsPalindrome', () => {
  test('should return true for a classic palindrome', () => {
    expect(stringIsPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  test('should return true for a simple palindrome', () => {
    expect(stringIsPalindrome('madam')).toBe(true);
    expect(stringIsPalindrome('racecar')).toBe(true);
  });

  test('should return false for a non-palindrome', () => {
    expect(stringIsPalindrome('hello')).toBe(false);
    expect(stringIsPalindrome('race a car')).toBe(false);
  });

  test('should ignore case', () => {
    expect(stringIsPalindrome('Madam')).toBe(true);
    expect(stringIsPalindrome('Racecar')).toBe(true);
  });

  test('should ignore non-alphanumeric characters', () => {
    expect(stringIsPalindrome('Noel, sees Leon.')).toBe(true);
  });

  test('should return true for an empty string', () => {
    expect(stringIsPalindrome('')).toBe(true);
  });

  test('should return true for a single character string', () => {
    expect(stringIsPalindrome('a')).toBe(true);
    expect(stringIsPalindrome('7')).toBe(true);
  });

  test('should return true for a string with only non-alphanumeric characters', () => {
    expect(stringIsPalindrome('!@#$%^&*')).toBe(true);
  });

  test('should return false for non-string inputs', () => {
    expect(stringIsPalindrome(null)).toBe(false);
    expect(stringIsPalindrome(undefined)).toBe(false);
    expect(stringIsPalindrome(123)).toBe(false);
    expect(stringIsPalindrome({})).toBe(false);
    expect(stringIsPalindrome([])).toBe(false);
  });
});
