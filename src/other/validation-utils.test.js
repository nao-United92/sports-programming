import { isEmail, isAlpha, isAlphanumeric } from './validation-utils.js';

describe('Validation Utilities', () => {
  describe('isEmail', () => {
    it('should return true for a valid email', () => {
      expect(isEmail('test@example.com')).toBe(true);
    });

    it('should return false for an invalid email', () => {
      expect(isEmail('not-an-email')).toBe(false);
      expect(isEmail('test@example')).toBe(false);
      expect(isEmail('test.com')).toBe(false);
    });
  });

  describe('isAlpha', () => {
    it('should return true for a string with only alphabetic characters', () => {
      expect(isAlpha('abcABC')).toBe(true);
    });

    it('should return false for a string with non-alphabetic characters', () => {
      expect(isAlpha('abc123')).toBe(false);
      expect(isAlpha('abc!')).toBe(false);
    });
  });

  describe('isAlphanumeric', () => {
    it('should return true for a string with only alphanumeric characters', () => {
      expect(isAlphanumeric('abcABC123')).toBe(true);
    });

    it('should return false for a string with non-alphanumeric characters', () => {
      expect(isAlphanumeric('abc!')).toBe(false);
      expect(isAlphanumeric('abc 123')).toBe(false);
    });
  });
});