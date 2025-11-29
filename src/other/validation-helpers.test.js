// src/other/validation-helpers.test.js

const { isStrongPassword } = require('./validation-helpers');

describe('Validation Helpers', () => {
  describe('isStrongPassword', () => {
    test('should return true for a strong password', () => {
      expect(isStrongPassword('Password123!')).toBe(true);
      expect(isStrongPassword('MyStrongP@ssw0rd')).toBe(true);
      expect(isStrongPassword('aB1!cDeF')).toBe(true); // Minimum length
    });

    test('should return false if password is too short', () => {
      expect(isStrongPassword('P@ss123')).toBe(false); // 7 characters
    });

    test('should return false if no uppercase letter', () => {
      expect(isStrongPassword('password123!')).toBe(false);
    });

    test('should return false if no lowercase letter', () => {
      expect(isStrongPassword('PASSWORD123!')).toBe(false);
    });

    test('should return false if no number', () => {
      expect(isStrongPassword('Password!!!')).toBe(false);
    });

    test('should return false if no special character', () => {
      expect(isStrongPassword('Password123')).toBe(false);
    });

    test('should return false for an empty string', () => {
      expect(isStrongPassword('')).toBe(false);
    });

    test('should return false for non-string inputs', () => {
      expect(isStrongPassword(null)).toBe(false);
      expect(isStrongPassword(undefined)).toBe(false);
      expect(isStrongPassword(12345678)).toBe(false);
      expect(isStrongPassword({})).toBe(false);
    });

    test('should handle passwords with spaces as special characters', () => {
      expect(isStrongPassword('Pass word123!')).toBe(true);
    });
  });
});
