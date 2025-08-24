import { getURLParameters, isURL } from './url-utils.js';

describe('URL Utilities', () => {
  describe('getURLParameters', () => {
    it('should extract parameters from a URL', () => {
      const url = 'https://example.com?name=John&age=30';
      expect(getURLParameters(url)).toEqual({ name: 'John', age: '30' });
    });

    it('should return an empty object for a URL with no parameters', () => {
      const url = 'https://example.com';
      expect(getURLParameters(url)).toEqual({});
    });
  });

  describe('isURL', () => {
    it('should return true for a valid URL', () => {
      expect(isURL('https://example.com')).toBe(true);
    });

    it('should return false for an invalid URL', () => {
      expect(isURL('not a url')).toBe(false);
    });

    it('should return false for a URL without a protocol', () => {
      expect(isURL('example.com')).toBe(false);
    });
  });
});
