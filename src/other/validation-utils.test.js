import { isValidEmail, isValidURL, isStrongPassword } from './validation-utils.js';

describe('Validation Utilities', () => {
  describe('isValidEmail', () => {
    it('should return true for valid emails', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('john.doe@sub.domain.co.uk')).toBe(true);
    });

    it('should return false for invalid emails', () => {
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('test@.com')).toBe(false);
      expect(isValidEmail('test@example')).toBe(false);
      expect(isValidEmail('')).toBe(false);
      expect(isValidEmail(null)).toBe(false);
    });
  });

  describe('isValidURL', () => {
    it('should return true for valid URLs', () => {
      expect(isValidURL('http://example.com')).toBe(true);
      expect(isValidURL('https://www.example.com/path?query=1')).toBe(true);
      expect(isValidURL('ftp://ftp.example.com')).toBe(true);
    });

    it('should return false for invalid URLs', () => {
      expect(isValidURL('invalid-url')).toBe(false);
      expect(isValidURL('example.com')).toBe(false); // Needs protocol
      expect(isValidURL('')).toBe(false);
      expect(isValidURL(null)).toBe(false);
    });
  });

  describe('isStrongPassword', () => {
    it('should return true for strong passwords', () => {
      expect(isStrongPassword('Password123!')).toBe(true);
      expect(isStrongPassword('MyStrongP@ssw0rd')).toBe(true);
    });

    it('should return false for weak passwords', () => {
      expect(isStrongPassword('short')).toBe(false); // Too short
      expect(isStrongPassword('nouppercase1!')).toBe(false); // No uppercase
      expect(isStrongPassword('NOLOWERCASE1!')).toBe(false); // No lowercase
      expect(isStrongPassword('NoNumber!!')).toBe(false); // No number
      expect(isStrongPassword('NoSpecialChar1')).toBe(false); // No special char
      expect(isStrongPassword('')).toBe(false);
    });
  });
});
