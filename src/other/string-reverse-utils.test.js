import { reverseString } from './string-reverse-utils.js';

describe('String Reverse Utilities', () => {
  test('should reverse a simple string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('should reverse a string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  test('should reverse an empty string', () => {
    expect(reverseString('')).toBe('');
  });

  test('should reverse a string with special characters', () => {
    expect(reverseString('!@#$%^&*()')).toBe(')(*&^%$#@!');
  });

  test('should throw an error if the input is not a string', () => {
    expect(() => reverseString(123)).toThrow('Expected a string argument.');
    expect(() => reverseString(null)).toThrow('Expected a string argument.');
    expect(() => reverseString(undefined)).toThrow('Expected a string argument.');
  });
});