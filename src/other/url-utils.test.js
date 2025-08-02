import { getQueryParams, objectToQueryString } from './url-utils.js';

describe('URL Utilities', () => {
  describe('getQueryParams', () => {
    test('should return an object of query parameters from a URL', () => {
      const url = 'https://example.com?name=JohnDoe&age=30';
      expect(getQueryParams(url)).toEqual({ name: 'JohnDoe', age: '30' });
    });

    test('should return an empty object if there are no query parameters', () => {
      const url = 'https://example.com';
      expect(getQueryParams(url)).toEqual({});
    });

    test('should handle URLs with special characters', () => {
      const url = 'https://example.com?query=%E6%97%A5%E6%9C%AC%E8%AA%9E&lang=ja';
      expect(getQueryParams(url)).toEqual({ query: '日本語', lang: 'ja' });
    });
  });

  describe('objectToQueryString', () => {
    test('should convert an object to a query string', () => {
      const obj = { name: 'JaneDoe', age: 28 };
      expect(objectToQueryString(obj)).toBe('name=JaneDoe&age=28');
    });

    test('should return an empty string for an empty object', () => {
      const obj = {};
      expect(objectToQueryString(obj)).toBe('');
    });

    test('should handle special characters in values', () => {
      const obj = { q: 'hello world', lang: 'en' };
      expect(objectToQueryString(obj)).toBe('q=hello+world&lang=en');
    });
  });
});
