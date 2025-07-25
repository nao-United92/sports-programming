
import { removeNonAlphanumeric, reverseString, isPalindrome, countOccurrences, countWords, removeWhitespace, camelCase, snakeCase, kebabCase } from './string-utils.js';

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

describe('countWords', () => {
  test('should count words in a string', () => {
    expect(countWords('Hello world')).toBe(2);
    expect(countWords('  One  two   three  ')).toBe(3);
    expect(countWords('SingleWord')).toBe(1);
    expect(countWords('')).toBe(0);
    expect(countWords('   ')).toBe(0);
  });

  test('should return 0 for non-string inputs', () => {
    expect(countWords(123)).toBe(0);
    expect(countWords(null)).toBe(0);
    expect(countWords(undefined)).toBe(0);
  });
});

describe('removeWhitespace', () => {
  test('should remove all whitespace from a string', () => {
    expect(removeWhitespace('Hello world')).toBe('Helloworld');
    expect(removeWhitespace('  leading and trailing  ')).toBe('leadingandtrailing');
    expect(removeWhitespace('Multiple   spaces')).toBe('Multiplespaces');
    expect(removeWhitespace('\tTabs\nand\rNewlines')).toBe('TabsandNewlines');
    expect(removeWhitespace('')).toBe('');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(removeWhitespace(123)).toBe('');
    expect(removeWhitespace(null)).toBe('');
    expect(removeWhitespace(undefined)).toBe('');
  });
});

describe('camelCase', () => {
  test('should convert a string to camelCase', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
    expect(camelCase('foo-bar')).toBe('fooBar');
    expect(camelCase('__FOO_BAR__')).toBe('fooBar');
  });
});

describe('snakeCase', () => {
  test('should convert a string to snake_case', () => {
    expect(snakeCase('hello world')).toBe('hello_world');
    expect(snakeCase('fooBar')).toBe('foo_bar');
    expect(snakeCase('__FOO_BAR__')).toBe('__foo_bar__');
  });
});

describe('kebabCase', () => {
  test('should convert a string to kebab-case', () => {
    expect(kebabCase('hello world')).toBe('hello-world');
    expect(kebabCase('fooBar')).toBe('foo-bar');
    expect(kebabCase('__FOO_BAR__')).toBe('--foo-bar--');
  });
});

describe('truncate', () => {
  test('should truncate a string', () => {
    expect(truncate('hello world', 5)).toBe('hello...');
  });

  test('should not truncate a string if it is shorter than the max length', () => {
    expect(truncate('hello world', 20)).toBe('hello world');
  });
});
