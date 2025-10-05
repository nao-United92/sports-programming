import { isEmail, isURL } from './validation-utils.js';

describe('Validation Utilities', () => {
  describe('isEmail', () => {
    it('should return true for valid email addresses', () => {
      expect(isEmail('test@example.com')).toBe(true);
      expect(isEmail('test.name@example.co.uk')).toBe(true);
    });

    it('should return false for invalid email addresses', () => {
      expect(isEmail('test@')).toBe(false);
      expect(isEmail('test@example')).toBe(false);
      expect(isEmail('example.com')).toBe(false);
      expect(isEmail('test@.com')).toBe(false);
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
});
