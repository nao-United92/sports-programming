import { isEmail, isURL } from './validation-utils.js';

describe('Validation Utils', () => {
  describe('isEmail', () => {
    it('should return true for valid email addresses', () => {
      expect(isEmail('test@example.com')).toBe(true);
      expect(isEmail('user.name+tag@domain.co.uk')).toBe(true);
      expect(isEmail('_______@domain.com')).toBe(true);
    });

    it('should return false for invalid email addresses', () => {
      expect(isEmail('plainaddress')).toBe(false);
      expect(isEmail('@missingusername.com')).toBe(false);
      expect(isEmail('username@.com')).toBe(false);
      expect(isEmail('username@domain.')).toBe(false);
      expect(isEmail('username@domain.c')).toBe(false);
      expect(isEmail('username@domain..com')).toBe(false);
      expect(isEmail(null)).toBe(false);
      expect(isEmail(undefined)).toBe(false);
    });
  });

  describe('isURL', () => {
    it('should return true for valid URLs', () => {
      expect(isURL('http://example.com')).toBe(true);
      expect(isURL('https://www.example.com/path?query=value#hash')).toBe(true);
      expect(isURL('ftp://user:pass@host:port/path')).toBe(true);
      expect(isURL('https://sub.domain.co.uk')).toBe(true);
    });

    it('should return false for invalid URLs', () => {
      expect(isURL('not a url')).toBe(false);
      expect(isURL('example.com')).toBe(false); // protocol is required
      expect(isURL('htp://example.com')).toBe(false);
      expect(isURL('http//example.com')).toBe(false);
      expect(isURL(null)).toBe(false);
      expect(isURL(undefined)).toBe(false);
    });
  });
});