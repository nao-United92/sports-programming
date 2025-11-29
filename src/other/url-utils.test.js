// src/other/url-utils.test.js

const { getQueryParams } = require('./url-utils');

describe('URL Utils', () => {
  describe('getQueryParams', () => {
    test('should parse query parameters from a URL string', () => {
      const url = 'https://example.com/path?name=Alice&age=30&city=New%20York';
      const params = getQueryParams(url);
      expect(params).toEqual({
        name: 'Alice',
        age: '30',
        city: 'New York',
      });
    });

    test('should handle URLs with no query parameters', () => {
      const url = 'https://example.com/path';
      const params = getQueryParams(url);
      expect(params).toEqual({});
    });

    test('should handle URLs with empty query string', () => {
      const url = 'https://example.com/path?';
      const params = getQueryParams(url);
      expect(params).toEqual({});
    });

    test('should handle query parameters with no values', () => {
      const url = 'https://example.com/path?param1&param2=value2';
      const params = getQueryParams(url);
      expect(params).toEqual({
        param1: '',
        param2: 'value2',
      });
    });

    test('should handle duplicate query parameters (last one wins)', () => {
      const url = 'https://example.com/path?name=Alice&name=Bob';
      const params = getQueryParams(url);
      expect(params).toEqual({
        name: 'Bob',
      });
    });

    test('should handle special characters in query parameters', () => {
      const url = 'https://example.com/path?q=hello+world%21&filter=a%26b';
      const params = getQueryParams(url);
      expect(params).toEqual({
        q: 'hello world!',
        filter: 'a&b',
      });
    });

    test('should return an empty object for non-string inputs', () => {
      expect(getQueryParams(null)).toEqual({});
      expect(getQueryParams(undefined)).toEqual({});
      expect(getQueryParams(123)).toEqual({});
      expect(getQueryParams({})).toEqual({});
    });

    test('should handle URL with hash', () => {
      const url = 'https://example.com/path?name=Alice#section1';
      const params = getQueryParams(url);
      expect(params).toEqual({
        name: 'Alice',
      });
    });
  });
});
