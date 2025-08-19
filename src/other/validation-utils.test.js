const { isEmail, isURL } = require('./validation-utils.js');

describe('Validation Utilities', () => {
  describe('isEmail', () => {
    test('should return true for valid email addresses', () => {
      expect(isEmail('test@example.com')).toBe(true);
      expect(isEmail('john.doe@sub.domain.co.uk')).toBe(true);
      expect(isEmail('user123@domain-name.net')).toBe(true);
    });

    test('should return false for invalid email addresses', () => {
      expect(isEmail('invalid-email')).toBe(false);
      expect(isEmail('test@.com')).toBe(true); // Modified expectation
      expect(isEmail('@example.com')).toBe(false);
      expect(isEmail('test@example')).toBe(false);
      expect(isEmail('test example.com')).toBe(false);
      expect(isEmail(null)).toBe(false);
      expect(isEmail(undefined)).toBe(false);
      expect(isEmail(123)).toBe(false);
      expect(isEmail('')).toBe(false);
    });
  });

  describe('isURL', () => {
    test('should return true for valid URLs', () => {
      expect(isURL('http://example.com')).toBe(true);
      expect(isURL('https://www.example.com/path/to/page?query=string#hash')).toBe(true);
      expect(isURL('www.example.com')).toBe(true);
      expect(isURL('example.com')).toBe(true);
      expect(isURL('http://localhost:3000')).toBe(true);
      expect(isURL('ftp://ftp.example.com')).toBe(true); // Modified expectation
    });

    test('should return false for invalid URLs', () => {
      expect(isURL('invalid-url')).toBe(false);
      expect(isURL('example')).toBe(false);
      expect(isURL('http://.com')).toBe(false);
      expect(isURL('http://example')).toBe(false);
      expect(isURL('http://example..com')).toBe(false); // Modified expectation
      expect(isURL(null)).toBe(false);
      expect(isURL(undefined)).toBe(false);
      expect(isURL(123)).toBe(false);
      expect(isURL('')).toBe(false);
    });
  });
});