import { getQueryParams, objectToQueryString } from './url-utils.js';

describe('URL Utilities', () => {
  describe('getQueryParams', () => {
    test('should return an object with query parameters', () => {
      const url = 'https://example.com?name=John&age=30';
      const params = getQueryParams(url);
      expect(params).toEqual({ name: 'John', age: '30' });
    });

    test('should return an empty object if no query string', () => {
      const url = 'https://example.com';
      const params = getQueryParams(url);
      expect(params).toEqual({});
    });
  });

  describe('objectToQueryString', () => {
    test('should convert an object to a query string', () => {
      const obj = { name: 'John', age: 30 };
      const queryString = objectToQueryString(obj);
      expect(queryString).toBe('name=John&age=30');
    });

    test('should handle special characters', () => {
      const obj = { q: 'hello world', lang: 'en' };
      const queryString = objectToQueryString(obj);
      expect(queryString).toBe('q=hello%20world&lang=en');
    });
  });
});