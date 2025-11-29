// src/other/string-validation-utils.test.js

const { isUUID } = require('./string-validation-utils');

describe('String Validation Utils', () => {
  describe('isUUID', () => {
    test('should return true for a valid UUID v4', () => {
      expect(isUUID('f47ac10b-58cc-4372-a567-0e02b2c3d479')).toBe(true);
    });

    test('should return true for a valid UUID v1', () => {
      expect(isUUID('6ba7b810-9dad-11d1-80b4-00c04fd430c8')).toBe(true);
    });

    test('should return true for a valid UUID v3', () => {
      expect(isUUID('a8098c1a-f86e-3da3-bb91-7a0292710000')).toBe(true);
    });

    test('should return true for a valid UUID v5', () => {
      expect(isUUID('c623e13a-3e21-5a56-973a-00c04fd430c8')).toBe(true);
    });

    test('should return true for a valid UUID with uppercase letters', () => {
      expect(isUUID('F47AC10B-58CC-4372-A567-0E02B2C3D479')).toBe(true);
    });

    test('should return false for an invalid UUID (incorrect format)', () => {
      expect(isUUID('f47ac10b-58cc-4372-a567-0e02b2c3d47')).toBe(false); // Too short
      expect(isUUID('f47ac10b-58cc-4372-a567-0e02b2c3d4799')).toBe(false); // Too long
      expect(isUUID('f47ac10b-58cc-4372-a567-0e02b2c3d47g')).toBe(false); // Invalid character
      expect(isUUID('f47ac10b-58cc-4372-a567-0e02b2c3d479-')).toBe(false); // Extra dash
    });

    test('should return false for an invalid UUID (incorrect variant/version)', () => {
      expect(isUUID('f47ac10b-58cc-6372-a567-0e02b2c3d479')).toBe(false); // Invalid version (6)
      expect(isUUID('f47ac10b-58cc-4372-0567-0e02b2c3d479')).toBe(false); // Invalid variant (0)
    });

    test('should return false for an empty string', () => {
      expect(isUUID('')).toBe(false);
    });

    test('should return false for non-string inputs', () => {
      expect(isUUID(null)).toBe(false);
      expect(isUUID(undefined)).toBe(false);
      expect(isUUID(123)).toBe(false);
      expect(isUUID({})).toBe(false);
      expect(isUUID([])).toBe(false);
    });
  });
});