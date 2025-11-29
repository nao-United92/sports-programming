// src/other/validation-utils.test.js

const { isEmail } = require('./validation-utils');

describe('Validation Utils', () => {
  describe('isEmail', () => {
    test('should return true for a valid email address', () => {
      expect(isEmail('test@example.com')).toBe(true);
      expect(isEmail('john.doe123@sub.domain.co.uk')).toBe(true);
      expect(isEmail('user+tag@domain.net')).toBe(true);
    });

    test('should return false for an invalid email address', () => {
      expect(isEmail('invalid-email')).toBe(false);
      expect(isEmail('invalid@')).toBe(false);
      expect(isEmail('@domain.com')).toBe(false);
      expect(isEmail('user@domain')).toBe(false);
      expect(isEmail('user@domain.')).toBe(false);
      expect(isEmail('user domain.com')).toBe(false);
      expect(isEmail('user@domain..com')).toBe(false);
    });

    test('should return false for non-string inputs', () => {
      expect(isEmail(null)).toBe(false);
      expect(isEmail(undefined)).toBe(false);
      expect(isEmail(123)).toBe(false);
      expect(isEmail({})).toBe(false);
      expect(isEmail([])).toBe(false);
    });

    test('should return false for an empty string', () => {
      expect(isEmail('')).toBe(false);
    });

    test('should handle emails with numbers in domain', () => {
      expect(isEmail('user@123.com')).toBe(true);
    });
  });
});