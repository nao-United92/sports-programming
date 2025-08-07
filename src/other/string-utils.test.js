import { isPalindrome, toSnakeCase, capitalizeFirstLetter } from './string-utils.js';

describe('isPalindrome', () => {
  it('should return true for a simple palindrome', () => {
    expect(isPalindrome('madam')).toBe(true);
  });

  it('should return true for a palindrome with mixed case', () => {
    expect(isPalindrome('Madam')).toBe(true);
  });

  it('should return true for a palindrome with spaces and punctuation', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  it('should return true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  it('should return true for a single character string', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  it('should return false for a non-palindrome string', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  it('should return false for numbers', () => {
    expect(isPalindrome(123)).toBe(false);
  });

  it('should return false for null', () => {
    expect(isPalindrome(null)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isPalindrome(undefined)).toBe(false);
  });
});

describe('toSnakeCase', () => {
  it('should convert a camelCase string to snake_case', () => {
    expect(toSnakeCase('camelCaseString')).toBe('camel_case_string');
  });

  it('should convert a PascalCase string to snake_case', () => {
    expect(toSnakeCase('PascalCaseString')).toBe('pascal_case_string');
  });

  it('should convert a string with spaces to snake_case', () => {
    expect(toSnakeCase('string with spaces')).toBe('string with spaces');
  });

  it('should handle an empty string', () => {
    expect(toSnakeCase('')).toBe('');
  });

  it('should handle a string that is already snake_case', () => {
    expect(toSnakeCase('already_snake_case')).toBe('already_snake_case');
  });

  it('should return an empty string for non-string inputs', () => {
    expect(toSnakeCase(null)).toBe('');
    expect(toSnakeCase(undefined)).toBe('');
    expect(toSnakeCase(123)).toBe('');
  });
});

describe('capitalizeFirstLetter', () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
    expect(capitalizeFirstLetter('world')).toBe('World');
  });

  it('should handle an empty string', () => {
    expect(capitalizeFirstLetter('')).toBe('');
  });

  it('should handle a single character string', () => {
    expect(capitalizeFirstLetter('a')).toBe('A');
  });

  it('should return an empty string for non-string inputs', () => {
    expect(capitalizeFirstLetter(null)).toBe('');
    expect(capitalizeFirstLetter(undefined)).toBe('');
    expect(capitalizeFirstLetter(123)).toBe('');
  });

  it('should not change the rest of the string', () => {
    expect(capitalizeFirstLetter('hello world')).toBe('Hello world');
  });
});
