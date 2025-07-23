
import { removeNonAlphanumeric, reverseString, isPalindrome, countOccurrences } from './string-utils.js';

describe('removeNonAlphanumeric', () => {
  test('should remove all non-alphanumeric characters from a string', () => {
    expect(removeNonAlphanumeric('Hello, World!123')).toBe('HelloWorld123');
    expect(removeNonAlphanumeric('  abc-123_xyz  ')).toBe('abc123xyz');
    expect(removeNonAlphanumeric('!@#$%^&*()')).toBe('');
    expect(removeNonAlphanumeric('abc')).toBe('abc');
  });

  test('should return an empty string if the input is not a string', () => {
    expect(removeNonAlphanumeric(123)).toBe('');
    expect(removeNonAlphanumeric(null)).toBe('');
    expect(removeNonAlphanumeric(undefined)).toBe('');
  });

  test('should handle empty string', () => {
    expect(removeNonAlphanumeric('')).toBe('');
  });
});

describe('reverseString', () => {
  test('should reverse a given string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('12345')).toBe('54321');
    expect(reverseString('')).toBe('');
  });

  test('should return an empty string if the input is not a string', () => {
    expect(reverseString(123)).toBe('');
    expect(reverseString(null)).toBe('');
    expect(reverseString(undefined)).toBe('');
  });
});

describe('isPalindrome', () => {
  test('should return true for a palindrome', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('level')).toBe(true);
  });

  test('should return false for a non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('world')).toBe(false);
  });

  test('should be case-insensitive and ignore non-alphanumeric characters', () => {
    expect(isPalindrome('RaceCar')).toBe(true);
    expect(isPalindrome('Was it a car or a cat I saw?')).toBe(true);
  });

  test('should return false for non-string inputs', () => {
    expect(isPalindrome(121)).toBe(false);
    expect(isPalindrome(null)).toBe(false);
    expect(isPalindrome(undefined)).toBe(false);
  });
});

describe('countOccurrences', () => {
  test('should count the occurrences of a character in a string', () => {
    expect(countOccurrences('hello world', 'l')).toBe(3);
    expect(countOccurrences('programming', 'm')).toBe(2);
    expect(countOccurrences('banana', 'a')).toBe(3);
  });

  test('should return 0 if the character is not found', () => {
    expect(countOccurrences('hello', 'z')).toBe(0);
  });

  test('should return 0 for invalid inputs', () => {
    expect(countOccurrences(123, '1')).toBe(0);
    expect(countOccurrences('hello', 1)).toBe(0);
    expect(countOccurrences('hello', 'll')).toBe(0);
  });
});
