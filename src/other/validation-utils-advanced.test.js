// src/other/validation-utils-advanced.test.js

const { isURL } = require('./validation-utils-advanced');

describe('Validation Utils Advanced', () => {
  describe('isURL', () => {
    test('should return true for a valid HTTP URL', () => {
      expect(isURL('http://example.com')).toBe(true);
    });

    test('should return true for a valid HTTPS URL', () => {
      expect(isURL('https://www.example.com/path/to/page?query=string#hash')).toBe(true);
    });

    test('should return true for a valid URL with a port', () => {
      expect(isURL('http://localhost:3000')).toBe(true);
    });

    test('should return true for a valid URL with IP address', () => {
      expect(isURL('http://192.168.1.1/resource')).toBe(true);
    });

    test('should return false for an invalid URL (missing protocol)', () => {
      expect(isURL('www.example.com')).toBe(false);
    });

    test('should return false for an invalid URL (malformed)', () => {
      expect(isURL('http://')).toBe(false);
      expect(isURL('http://.')).toBe(false);
      expect(isURL('http://..')).toBe(false);
      expect(isURL('http://?')).toBe(false);
    });

    test('should return false for an empty string', () => {
      expect(isURL('')).toBe(false);
    });

    test('should return false for non-string inputs', () => {
      expect(isURL(null)).toBe(false);
      expect(isURL(undefined)).toBe(false);
      expect(isURL(123)).toBe(false);
      expect(isURL({})).toBe(false);
      expect(isURL([])).toBe(false);
    });

    test('should handle URLs with special characters in path/query', () => {
      expect(isURL('https://example.com/path with spaces/file.pdf?name=john%20doe')).toBe(true);
    });
  });
});
