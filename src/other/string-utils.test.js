import { removeNonAlphanumeric, reverseString, isPalindrome, countOccurrences, countWords, removeWhitespace, camelCase, snakeCase, kebabCase, padLeft, isUUID, truncate } from './string-utils.js';

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
    expect(removeWhitespace(`	Tabs
andNewlines`)).toBe('TabsandNewlines');
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
    expect(camelCase('__FOO_BAR__')).toBe('__fooBar__');
    expect(camelCase('alreadyCamelCase')).toBe('alreadyCamelCase');
    expect(camelCase('foo_bar_baz')).toBe('fooBarBaz');
    expect(camelCase('  leading and trailing  ')).toBe('leadingAndTrailing');
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


describe('padLeft', () => {
  test('should pad the string on the left with the specified character', () => {
    expect(padLeft('123', 5, '0')).toBe('00123');
    expect(padLeft('hello', 10, '-')).toBe('-----hello');
  });

  test('should use space as default padding character', () => {
    expect(padLeft('abc', 5)).toBe('  abc');
  });

  test('should return the original string if its length is greater than or equal to the desired length', () => {
    expect(padLeft('12345', 3, '0')).toBe('12345');
    expect(padLeft('short', 5, '*')).toBe('short');
  });

  test('should handle empty string input', () => {
    expect(padLeft('', 5, 'x')).toBe('xxxxx');
  });

  test('should return empty string for non-string input', () => {
    expect(padLeft(123, 5, '0')).toBe('');
    expect(padLeft(null, 5, ' ')).toBe('');
    expect(padLeft(undefined, 5, ' ')).toBe('');
  });
});

describe('isUUID', () => {
  test('should return true for a valid UUID v4', () => {
    expect(isUUID('f47ac10b-58cc-4372-a567-0e02b2c3d479')).toBe(true);
    expect(isUUID('123e4567-e89b-42d3-a456-426614174000')).toBe(true); // Example UUID v4
  });

  test('should return false for an invalid UUID', () => {
    expect(isUUID('invalid-uuid')).toBe(false);
    expect(isUUID('123e4567-e89b-12d3-a456-42661417400')).toBe(false); // Too short
    expect(isUUID('123e4567-e89b-12d3-a456-4266141740000')).toBe(false); // Too long
    expect(isUUID('123e4567-e89b-12d3-a456-42661417400g')).toBe(false); // Invalid character
    expect(isUUID('f47ac10b-58cc-1372-a567-0e02b2c3d479')).toBe(false); // Invalid version (not 4)
    expect(isUUID('f47ac10b-58cc-4372-g567-0e02b2c3d479')).toBe(false); // Invalid variant (not 8, 9, a, or b)
  });

  test('should return false for non-string inputs', () => {
    expect(isUUID(123)).toBe(false);
    expect(isUUID(null)).toBe(false);
    expect(isUUID(undefined)).toBe(false);
  });
});

describe('truncate', () => {
  test('should truncate a string to the specified length and add ellipsis', () => {
    expect(truncate('Hello world', 8)).toBe('Hello...');
    expect(truncate('This is a long string', 13)).toBe('This is a...');
  });

  test('should handle custom suffix', () => {
    expect(truncate('Long string example', 10, '--')).toBe('Long stri--');
  });

  test('should not truncate if the string is shorter than or equal to the max length', () => {
    expect(truncate('Short', 10)).toBe('Short');
    expect(truncate('Exact', 5)).toBe('Exact');
  });

  test('should return an empty string for non-string input', () => {
    expect(truncate(123, 5)).toBe('');
    expect(truncate(null, 5)).toBe('');
    expect(truncate(undefined, 5)).toBe('');
  });

  test('should return an empty string for invalid maxLength', () => {
    expect(truncate('Hello', -1)).toBe('');
    expect(truncate('Hello', 'abc')).toBe('');
  });

  test('should handle empty string input', () => {
    expect(truncate('', 5)).toBe('');
  });
});