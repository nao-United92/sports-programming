
import {
  isValidEmail,
  isValidURL,
  isNumeric,
  isStrongPassword,
  isNotBlank,
  isPhoneNumber,
  isPostalCode,
} from './validation-utils';

describe('validation-utils', () => {
  describe('isValidEmail', () => {
    it('should return true for a valid email', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('john.doe123@sub.domain.co.uk')).toBe(true);
    });

    it('should return false for an invalid email', () => {
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('test@.com')).toBe(false);
      expect(isValidEmail('test@example')).toBe(false);
      expect(isValidEmail('test@example..com')).toBe(false);
      expect(isValidEmail('')).toBe(false);
      expect(isValidEmail(null)).toBe(false);
      expect(isValidEmail(undefined)).toBe(false);
    });
  });

  describe('isValidURL', () => {
    it('should return true for a valid URL', () => {
      expect(isValidURL('http://example.com')).toBe(true);
      expect(isValidURL('https://www.example.com/path?query=1#hash')).toBe(true);
      expect(isValidURL('ftp://ftp.example.com')).toBe(true);
      expect(isValidURL('//example.com')).toBe(true); // Protocol-relative URL
    });

    it('should return false for an invalid URL', () => {
      expect(isValidURL('invalid-url')).toBe(false);
      expect(isValidURL('example.com')).toBe(false); // Missing protocol
      expect(isValidURL('')).toBe(false);
      expect(isValidURL(null)).toBe(false);
      expect(isValidURL(undefined)).toBe(false);
    });
  });

  describe('isNumeric', () => {
    it('should return true for numeric values', () => {
      expect(isNumeric(123)).toBe(true);
      expect(isNumeric('123')).toBe(true);
      expect(isNumeric(123.45)).toBe(true);
      expect(isNumeric('-10')).toBe(true);
      expect(isNumeric(0)).toBe(true);
    });

    it('should return false for non-numeric values', () => {
      expect(isNumeric('abc')).toBe(false);
      expect(isNumeric(null)).toBe(false);
      expect(isNumeric(undefined)).toBe(false);
      expect(isNumeric(true)).toBe(false);
      expect(isNumeric({})).toBe(false);
      expect(isNumeric([])).toBe(false);
      expect(isNumeric('')).toBe(false);
      expect(isNumeric(' ')).toBe(false);
    });
  });

  describe('isStrongPassword', () => {
    it('should return true for a strong password', () => {
      expect(isStrongPassword('Password123!')).toBe(true);
      expect(isStrongPassword('MyStrongP@ssw0rd')).toBe(true);
    });

    it('should return false for a weak password', () => {
      expect(isStrongPassword('short')).toBe(false); // Too short
      expect(isStrongPassword('nouppercase1!')).toBe(false); // No uppercase
      expect(isStrongPassword('NOLOWERCASE1!')).toBe(false); // No lowercase
      expect(isStrongPassword('NoNumber!!')).toBe(false); // No number
      expect(isStrongPassword('NoSpecialChar1')).toBe(false); // No special char
      expect(isStrongPassword('password123')).toBe(false); // No special char
      expect(isStrongPassword('')).toBe(false);
      expect(isStrongPassword(null)).toBe(false);
      expect(isStrongPassword(undefined)).toBe(false);
    });
  });

  describe('isNotBlank', () => {
    it('should return true for non-blank strings', () => {
      expect(isNotBlank('hello')).toBe(true);
      expect(isNotBlank('  world  ')).toBe(true);
      expect(isNotBlank('123')).toBe(true);
    });

    it('should return false for blank strings or non-strings', () => {
      expect(isNotBlank('')).toBe(false);
      expect(isNotBlank('   ')).toBe(false);
      expect(isNotBlank(null)).toBe(false);
      expect(isNotBlank(undefined)).toBe(false);
      expect(isNotBlank(0)).toBe(false);
      expect(isNotBlank(true)).toBe(false);
      expect(isNotBlank({})).toBe(false);
    });
  });

  describe('isPhoneNumber', () => {
    it('should return true for valid phone numbers', () => {
      expect(isPhoneNumber('1234567890')).toBe(true);
      expect(isPhoneNumber('+123456789012')).toBe(true);
      expect(isPhoneNumber('09012345678')).toBe(true);
    });

    it('should return false for invalid phone numbers', () => {
      expect(isPhoneNumber('123')).toBe(false);
      expect(isPhoneNumber('abcde')).toBe(false);
      expect(isPhoneNumber('123-456-7890')).toBe(false); // No hyphens allowed in this simple check
      expect(isPhoneNumber(null)).toBe(false);
      expect(isPhoneNumber(undefined)).toBe(false);
    });
  });

  describe('isPostalCode', () => {
    it('should return true for valid Japanese postal codes', () => {
      expect(isPostalCode('123-4567')).toBe(true);
      expect(isPostalCode('000-0000')).toBe(true);
    });

    it('should return false for invalid Japanese postal codes', () => {
      expect(isPostalCode('1234567')).toBe(false); // Missing hyphen
      expect(isPostalCode('123-456')).toBe(false); // Too short
      expect(isPostalCode('123-45678')).toBe(false); // Too long
      expect(isPostalCode('abc-defg')).toBe(false); // Non-numeric
      expect(isPostalCode(null)).toBe(false);
      expect(isPostalCode(undefined)).toBe(false);
    });
  });
});
