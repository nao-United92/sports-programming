import { generateRandomString } from './string-utils.js';

describe('String Utilities', () => {
  describe('generateRandomString', () => {
    it('should generate a string of the specified length', () => {
      const length = 10;
      const randomString = generateRandomString(length);
      expect(randomString.length).toBe(length);
    });

    it('should generate a string containing only alphanumeric characters', () => {
      const length = 20;
      const randomString = generateRandomString(length);
      const alphanumericRegex = /^[a-zA-Z0-9]+$/;
      expect(randomString).toMatch(alphanumericRegex);
    });

    it('should generate different strings on successive calls (high probability)', () => {
      const length = 15;
      const string1 = generateRandomString(length);
      const string2 = generateRandomString(length);
      expect(string1).not.toBe(string2);
    });

    it('should return an empty string if length is 0', () => {
      const randomString = generateRandomString(0);
      expect(randomString).toBe('');
    });

    it('should handle large lengths without error', () => {
      const length = 1000;
      const randomString = generateRandomString(length);
      expect(randomString.length).toBe(length);
      const alphanumericRegex = /^[a-zA-Z0-9]+$/;
      expect(randomString).toMatch(alphanumericRegex);
    });
  });
});
