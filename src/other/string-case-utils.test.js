import { isUpperCase, isLowerCase } from './string-case-utils.js';

describe('String Case Utilities', () => {
  describe('isUpperCase', () => {
    it('should return true for uppercase strings', () => {
      expect(isUpperCase('HELLO')).toBe(true);
      expect(isUpperCase('HELLO WORLD')).toBe(true);
    });

    it('should return false for lowercase or mixed case strings', () => {
      expect(isUpperCase('hello')).toBe(false);
      expect(isUpperCase('Hello')).toBe(false);
    });

    it('should return true for non-alphabetic strings', () => {
      expect(isUpperCase('123')).toBe(true);
      expect(isUpperCase('!@#')).toBe(true);
    });
  });

  describe('isLowerCase', () => {
    it('should return true for lowercase strings', () => {
      expect(isLowerCase('hello')).toBe(true);
      expect(isLowerCase('hello world')).toBe(true);
    });

    it('should return false for uppercase or mixed case strings', () => {
      expect(isLowerCase('HELLO')).toBe(false);
      expect(isLowerCase('Hello')).toBe(false);
    });

    it('should return true for non-alphabetic strings', () => {
      expect(isLowerCase('123')).toBe(true);
      expect(isLowerCase('!@#')).toBe(true);
    });
  });
});
