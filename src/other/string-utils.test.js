import { truncateString, capitalizeFirstLetter } from './string-utils.js';

describe('stringUtils', () => {
  describe('truncateString', () => {
    it('should truncate a string and append ellipsis', () => {
      expect(truncateString('hello world', 5)).toBe('hello...');
    });

    it('should not truncate if string length is less than or equal to maxLength', () => {
      expect(truncateString('hello', 5)).toBe('hello');
      expect(truncateString('hi', 5)).toBe('hi');
    });

    it('should return an empty string for non-string input', () => {
      expect(truncateString(null, 5)).toBe('');
      expect(truncateString(undefined, 5)).toBe('');
      expect(truncateString(123, 5)).toBe('');
    });

    it('should return an empty string for invalid maxLength', () => {
      expect(truncateString('hello', -1)).toBe('');
      expect(truncateString('hello', null)).toBe('');
      expect(truncateString('hello', undefined)).toBe('');
    });

    it('should return an empty string if maxLength is 0', () => {
      expect(truncateString('hello', 0)).toBe('...');
    });
  });

  describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter of a string', () => {
      expect(capitalizeFirstLetter('hello')).toBe('Hello');
      expect(capitalizeFirstLetter('world')).toBe('World');
    });

    it('should return an empty string for an empty string', () => {
      expect(capitalizeFirstLetter('')).toBe('');
    });

    it('should return an empty string for non-string input', () => {
      expect(capitalizeFirstLetter(null)).toBe('');
      expect(capitalizeFirstLetter(undefined)).toBe('');
      expect(capitalizeFirstLetter(123)).toBe('');
    });

    it('should handle strings with only one character', () => {
      expect(capitalizeFirstLetter('a')).toBe('A');
    });

    it('should handle strings that are already capitalized', () => {
      expect(capitalizeFirstLetter('Hello')).toBe('Hello');
    });
  });
});