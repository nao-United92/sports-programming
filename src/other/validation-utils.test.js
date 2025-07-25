import { isEmail, isPhoneNumber, isUrl, isStrongPassword, isCreditCard, isDate, isTime, validatePassword } from './validation-utils.js';

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
      expect(isCreditCard('4000000000000000')).toBe(true); // Visa test number
      expect(isCreditCard('49927398716')).toBe(false); // Example invalid number
      expect(isCreditCard('4242424242424242')).toBe(true); // Visa example
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
});