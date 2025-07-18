import { isEmail, isPhoneNumber, isUrl } from './validation-utils.js';

describe('validation-utils', () => {
  describe('isEmail', () => {
    test('should return true for valid emails', () => {
      expect(isEmail('test@example.com')).toBe(true);
      expect(isEmail('john.doe@sub.domain.co.uk')).toBe(true);
      expect(isEmail('user123@domain-name.com')).toBe(true);
    });

    test('should return false for invalid emails', () => {
      expect(isEmail('invalid-email')).toBe(false);
      expect(isEmail('test@.com')).toBe(false);
      expect(isEmail('@example.com')).toBe(false);
      expect(isEmail('test@example')).toBe(false);
      expect(isEmail(null)).toBe(false);
      expect(isEmail(undefined)).toBe(false);
      expect(isEmail(123)).toBe(false);
    });
  });

  describe('isPhoneNumber', () => {
    test('should return true for valid phone numbers', () => {
      expect(isPhoneNumber('1234567890')).toBe(true);
      expect(isPhoneNumber('+1-123-456-7890')).toBe(true);
      expect(isPhoneNumber('001-123-456-7890')).toBe(true);
      expect(isPhoneNumber('001 (123) 456-7890')).toBe(true);
    });

    test('should return false for invalid phone numbers', () => {
      expect(isPhoneNumber('123')).toBe(false);
      expect(isPhoneNumber('abc')).toBe(false);
      expect(isPhoneNumber('1234567890123456')).toBe(false);
      expect(isPhoneNumber(null)).toBe(false);
      expect(isPhoneNumber(undefined)).toBe(false);
      expect(isPhoneNumber(123)).toBe(false);
    });
  });

  describe('isUrl', () => {
    test('should return true for valid URLs', () => {
      expect(isUrl('http://example.com')).toBe(true);
      expect(isUrl('https://www.example.com/path?query=1#hash')).toBe(true);
      expect(isUrl('ftp://ftp.example.com')).toBe(true);
    });

    test('should return false for invalid URLs', () => {
      expect(isUrl('invalid-url')).toBe(false);
      expect(isUrl('example.com')).toBe(false);
      expect(isUrl(null)).toBe(false);
      expect(isUrl(undefined)).toBe(false);
      expect(isUrl(123)).toBe(false);
    });
  });
});