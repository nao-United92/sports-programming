// src/other/dom-utils.test.js

const { getCookie } = require('./dom-utils');

describe('DOM Utils', () => {
  describe('getCookie', () => {
    // Store original document.cookie descriptor
    const originalCookieDescriptor = Object.getOwnPropertyDescriptor(document, 'cookie');

    beforeEach(() => {
      // Mock document.cookie for each test
      Object.defineProperty(document, 'cookie', {
        get: jest.fn().mockReturnValue('name1=value1; name2=value2; name3=value%203'),
        configurable: true,
      });
    });

    afterEach(() => {
      // Restore original document.cookie descriptor
      if (originalCookieDescriptor) {
        Object.defineProperty(document, 'cookie', originalCookieDescriptor);
      }
    });

    test('should return the value of an existing cookie', () => {
      expect(getCookie('name1')).toBe('value1');
      expect(getCookie('name2')).toBe('value2');
    });

    test('should return the decoded value of an existing cookie with special characters', () => {
      expect(getCookie('name3')).toBe('value 3');
    });

    test('should return null for a non-existent cookie', () => {
      expect(getCookie('nonExistent')).toBeNull();
    });

    test('should return null for an empty cookie name', () => {
      expect(getCookie('')).toBeNull();
    });

    test('should return null for non-string cookie name', () => {
      expect(getCookie(null)).toBeNull();
      expect(getCookie(undefined)).toBeNull();
      expect(getCookie(123)).toBeNull();
    });

    test('should handle document.cookie being empty', () => {
      Object.defineProperty(document, 'cookie', {
        get: jest.fn().mockReturnValue(''),
        configurable: true,
      });
      expect(getCookie('anyName')).toBeNull();
    });

    test('should handle document.cookie having only spaces', () => {
      Object.defineProperty(document, 'cookie', {
        get: jest.fn().mockReturnValue('   '),
        configurable: true,
      });
      expect(getCookie('anyName')).toBeNull();
    });
  });
});
