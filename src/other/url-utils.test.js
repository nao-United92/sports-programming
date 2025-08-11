import { getURLParameters, objectToQueryString } from './url-utils.js';

describe('URL Utils', () => {
  describe('getURLParameters', () => {
    it('should return an object with URL parameters', () => {
      const url = 'https://example.com?name=John&age=30';
      expect(getURLParameters(url)).toEqual({ name: 'John', age: '30' });
    });

    it('should return an empty object for a URL with no parameters', () => {
      const url = 'https://example.com';
      expect(getURLParameters(url)).toEqual({});
    });

    it('should handle URLs with special characters', () => {
      const url = 'https://example.com?query=%20hello%20world%20';
      expect(getURLParameters(url)).toEqual({ query: ' hello world ' });
    });

    it('should handle relative URLs', () => {
      const url = '/some/path?a=1&b=2';
      expect(getURLParameters(url)).toEqual({ a: '1', b: '2' });
    });
  });

  describe('objectToQueryString', () => {
    it('should convert an object to a query string', () => {
      const obj = { name: 'John', age: 30 };
      expect(objectToQueryString(obj)).toBe('name=John&age=30');
    });

    it('should return an empty string for an empty object', () => {
      expect(objectToQueryString({})).toBe('');
    });

    it('should handle special characters in object values', () => {
      const obj = { query: 'hello world' };
      expect(objectToQueryString(obj)).toBe('query=hello%20world');
    });
  });
});
