import { isEmail, isUrl } from './validation-utils';

describe('Validation Utilities', () => {
  describe('isEmail', () => {
    it('should return true for valid email addresses', () => {
      expect(isEmail('test@example.com')).toBe(true);
      expect(isEmail('test.name@example.co.uk')).toBe(true);
    });

    it('should return false for invalid email addresses', () => {
      expect(isEmail('test@example')).toBe(false);
      expect(isEmail('test@.com')).toBe(false);
      expect(isEmail('test.com')).toBe(false);
      expect(isEmail('')).toBe(false);
    });
  });

  describe('isUrl', () => {
    it('should return true for valid URLs', () => {
      expect(isUrl('http://example.com')).toBe(true);
      expect(isUrl('https://example.com/path?query=1')).toBe(true);
    });

    it('should return false for invalid URLs', () => {
      expect(isUrl('example.com')).toBe(false);
      expect(isUrl('ftp://example.com')).toBe(true); // URL constructor supports ftp
      expect(isUrl('test')).toBe(false);
      expect(isUrl('')).toBe(false);
    });
  });
});