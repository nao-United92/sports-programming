import { isEmail, isURL, isNumber } from './validation-utils.js';

describe('Validation Utilities', () => {
  describe('isEmail', () => {
    it('should return true for valid email addresses', () => {
      expect(isEmail('test@example.com')).toBe(true);
      expect(isEmail('test.name@example.co.uk')).toBe(true);
    });

    it('should return false for invalid email addresses', () => {
      expect(isEmail('test@example')).toBe(false);
      expect(isEmail('test.example.com')).toBe(false);
      expect(isEmail('@example.com')).toBe(false);
    });
  });

  describe('isURL', () => {
    it('should return true for valid URLs', () => {
      expect(isURL('http://example.com')).toBe(true);
      expect(isURL('https://www.example.com/path?query=value')).toBe(true);
    });

    it('should return false for invalid URLs', () => {
      expect(isURL('example.com')).toBe(false);
      expect(isURL('ftp://example.com')).toBe(true); // URL constructor supports ftp
      expect(isURL('not a url')).toBe(false);
    });
  });

  describe('isNumber', () => {
    it('should return true for numbers', () => {
      expect(isNumber(123)).toBe(true);
      expect(isNumber(-123.45)).toBe(true);
      expect(isNumber(0)).toBe(true);
    });

    it('should return false for non-numbers', () => {
      expect(isNumber('123')).toBe(false);
      expect(isNumber(null)).toBe(false);
      expect(isNumber(undefined)).toBe(false);
      expect(isNumber(NaN)).toBe(false);
      expect(isNumber(Infinity)).toBe(false);
      expect(isNumber(-Infinity)).toBe(false);
      expect(isNumber({})).toBe(false);
      expect(isNumber([])).toBe(false);
    });
  });
});
