import { isEmail, isPhoneNumber, isUrl, isStrongPassword, isCreditCard, isDate, isTime, validatePassword, isHexColor, isJSON, isUUID, isAlphanumeric } from './validation-utils.js';

describe('validation-utils', () => {
  describe('isValidEmail', () => {
    test('should return true for valid emails', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('john.doe@sub.domain.co.uk')).toBe(true);
      expect(isValidEmail('user123@domain-name.com')).toBe(true);
    });

    test('should return false for invalid emails', () => {
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('test@.com')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
      expect(isValidEmail('test@example')).toBe(false);
      expect(isValidEmail(null)).toBe(false);
      expect(isValidEmail(undefined)).toBe(false);
      expect(isValidEmail(123)).toBe(false);
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

  describe('isStrongPassword', () => {
    test('should return true for a strong password', () => {
      expect(isStrongPassword('Password123!')).toBe(true);
      expect(isStrongPassword('MyP@ssw0rd')).toBe(true);
    });

    test('should return false if password is too short', () => {
      expect(isStrongPassword('Pass1!')).toBe(false);
    });

    test('should return false if no uppercase letter', () => {
      expect(isStrongPassword('password123!')).toBe(false);
    });

    test('should return false if no lowercase letter', () => {
      expect(isStrongPassword('PASSWORD123!')).toBe(false);
    });

    test('should return false if no number', () => {
      expect(isStrongPassword('Password!!')).toBe(false);
    });

    test('should return false if no special character', () => {
      expect(isStrongPassword('Password123')).toBe(false);
    });

    test('should return false for non-string inputs', () => {
      expect(isStrongPassword(null)).toBe(false);
      expect(isStrongPassword(undefined)).toBe(false);
      expect(isStrongPassword(123)).toBe(false);
    });
  });

  describe('isCreditCard', () => {
    test('should return true for valid credit card numbers (Luhn algorithm)', () => {
      expect(isCreditCard('49927398716')).toBe(true);
      expect(isCreditCard('4242424242424242')).toBe(true); // Visa example
      expect(isCreditCard('378282246310005')).toBe(true);
    });

    test('should return false for invalid credit card numbers', () => {
      expect(isCreditCard('123')).toBe(false);
      expect(isCreditCard('abc')).toBe(false);
      expect(isCreditCard(null)).toBe(false);
      expect(isCreditCard(undefined)).toBe(false);
      expect(isCreditCard(123)).toBe(false);
    });
  });

  describe('isDate', () => {
    test('should return true for valid date strings (YYYY-MM-DD)', () => {
      expect(isDate('2023-01-01')).toBe(true);
      expect(isDate('1999-12-31')).toBe(true);
      expect(isDate('2024-02-29')).toBe(true); // Leap year
    });

    test('should return false for invalid date strings', () => {
      expect(isDate('2023-1-1')).toBe(false);
      expect(isDate('2023/01/01')).toBe(false);
      expect(isDate('2023-13-01')).toBe(false);
      expect(isDate('2023-01-32')).toBe(false);
      expect(isDate('not-a-date')).toBe(false);
      expect(isDate(null)).toBe(false);
      expect(isDate(undefined)).toBe(false);
      expect(isDate(123)).toBe(false);
    });
  });

  describe('isTime', () => {
    test('should return true for valid time strings (HH:MM or HH:MM:SS)', () => {
      expect(isTime('12:30')).toBe(true);
      expect(isTime('00:00')).toBe(true);
      expect(isTime('23:59')).toBe(true);
      expect(isTime('12:30:45')).toBe(true);
      expect(isTime('00:00:00')).toBe(true);
    });

    test('should return false for invalid time strings', () => {
      expect(isTime('25:00')).toBe(false);
      expect(isTime('12:60')).toBe(false);
      expect(isTime('12:3')).toBe(false);
      expect(isTime('1:30')).toBe(false);
      expect(isTime('not-a-time')).toBe(false);
      expect(isTime(null)).toBe(false);
      expect(isTime(undefined)).toBe(false);
      expect(isTime(123)).toBe(false);
    });
  });

  describe('validatePassword', () => {
    test('should return an empty array for a strong password', () => {
      expect(validatePassword('StrongP@ssw0rd')).toEqual([]);
    });

    test('should return errors for a password that is too short', () => {
      expect(validatePassword('Short1!')).toEqual(['Password must be at least 8 characters long.']);
    });

    test('should return errors for missing uppercase letter', () => {
      expect(validatePassword('password123!')).toEqual(['Password must contain at least one uppercase letter.']);
    });

    test('should return errors for missing lowercase letter', () => {
      expect(validatePassword('PASSWORD123!')).toEqual(['Password must contain at least one lowercase letter.']);
    });

    test('should return errors for missing number', () => {
      expect(validatePassword('Password!!')).toEqual(['Password must contain at least one number.']);
    });

    test('should return errors for missing special character', () => {
      expect(validatePassword('Password123')).toEqual(['Password must contain at least one special character.']);
    });

    test('should return multiple errors for multiple unmet requirements', () => {
      expect(validatePassword('short')).toEqual([
        'Password must be at least 8 characters long.',
        'Password must contain at least one uppercase letter.',
        'Password must contain at least one number.',
        'Password must contain at least one special character.',
      ]);
    });

    test('should return error for non-string input', () => {
      expect(validatePassword(null)).toEqual(['Password must be a string.']);
      expect(validatePassword(undefined)).toEqual(['Password must be a string.']);
      expect(validatePassword(123)).toEqual(['Password must be a string.']);
    });
  });

  describe('isHexColor', () => {
    test('should return true for valid 6-digit hex colors', () => {
      expect(isHexColor('#FFFFFF')).toBe(true);
      expect(isHexColor('#000000')).toBe(true);
      expect(isHexColor('#ABCDEF')).toBe(true);
      expect(isHexColor('#abcdef')).toBe(true);
    });

    test('should return true for valid 3-digit hex colors', () => {
      expect(isHexColor('#FFF')).toBe(true);
      expect(isHexColor('#000')).toBe(true);
      expect(isHexColor('#ABC')).toBe(true);
      expect(isHexColor('#abc')).toBe(true);
    });

    test('should return false for invalid hex colors', () => {
      expect(isHexColor('#FFFF')).toBe(false);
      expect(isHexColor('#FFFFFFF')).toBe(false);
      expect(isHexColor('#GGGGGG')).toBe(false);
      expect(isHexColor('FFFFFF')).toBe(false); // Missing #
      expect(isHexColor('#12345G')).toBe(false);
    });

    test('should return false for non-string inputs', () => {
      expect(isHexColor(123)).toBe(false);
      expect(isHexColor(null)).toBe(false);
      expect(isHexColor(undefined)).toBe(false);
    });
  });

  describe('isJSON', () => {
    test('should return true for a valid JSON string', () => {
      expect(isJSON('{"a":1}')).toBe(true);
    });

    test('should return false for an invalid JSON string', () => {
      expect(isJSON('{"a":1')).toBe(false);
    });

    test('should return false for non-string inputs', () => {
      expect(isJSON(null)).toBe(false);
      expect(isJSON(123)).toBe(false);
    });
  });

  describe('isUUID', () => {
    test('should return true for a valid UUID v4', () => {
      expect(isUUID('f47ac10b-58cc-4372-a567-0e02b2c3d479')).toBe(true);
      expect(isUUID('123e4567-e89b-42d3-a456-426614174000')).toBe(true); // Example UUID v4
    });

    test('should return false for an invalid UUID', () => {
      expect(isUUID('invalid-uuid')).toBe(false);
      expect(isUUID('123e4567-e89b-12d3-a456-42661417400')).toBe(false); // Too short
      expect(isUUID('123e4567-e89b-12d3-a456-4266141740000')).toBe(false); // Too long
      expect(isUUID('123e4567-e89b-12d3-a456-42661417400g')).toBe(false); // Invalid character
      expect(isUUID('f47ac10b-58cc-1372-a567-0e02b2c3d479')).toBe(false); // Invalid version (not 4)
      expect(isUUID('f47ac10b-58cc-4372-g567-0e02b2c3d479')).toBe(false); // Invalid variant (not 8, 9, a, or b)
    });

    test('should return false for non-string inputs', () => {
      expect(isUUID(123)).toBe(false);
      expect(isUUID(null)).toBe(false);
      expect(isUUID(undefined)).toBe(false);
    });
  });

  describe('isAlphanumeric', () => {
    test('should return true for alphanumeric strings', () => {
      expect(isAlphanumeric('abcde')).toBe(true);
      expect(isAlphanumeric('12345')).toBe(true);
      expect(isAlphanumeric('ab12cd')).toBe(true);
    });

    test('should return false for non-alphanumeric strings', () => {
      expect(isAlphanumeric('abc-123')).toBe(false);
      expect(isAlphanumeric('abc 123')).toBe(false);
      expect(isAlphanumeric('abc_123')).toBe(false);
      expect(isAlphanumeric(' ')).toBe(false);
    });

    test('should return false for non-string inputs', () => {
      expect(isAlphanumeric(123)).toBe(false);
      expect(isAlphanumeric(null)).toBe(false);
      expect(isAlphanumeric(undefined)).toBe(false);
    });
  });

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
});
