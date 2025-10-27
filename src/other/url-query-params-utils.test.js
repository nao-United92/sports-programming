import { getQueryParams, buildQueryParams } from './url-query-params-utils';

describe('url-query-params-utils', () => {
  describe('getQueryParams', () => {
    test('should parse query parameters from a URL', () => {
      const url = 'http://example.com?name=Alice&age=30';
      expect(getQueryParams(url)).toEqual({ name: 'Alice', age: '30' });
    });

    test('should handle URL without query parameters', () => {
      const url = 'http://example.com';
      expect(getQueryParams(url)).toEqual({});
    });

    test('should handle URL with empty query string', () => {
      const url = 'http://example.com?';
      expect(getQueryParams(url)).toEqual({});
    });

    test('should handle URL with encoded characters', () => {
      const url = 'http://example.com?param=hello%20world%21&key=value%3D1';
      expect(getQueryParams(url)).toEqual({ param: 'hello world!', key: 'value=1' });
    });

    test('should handle parameters with no value', () => {
      const url = 'http://example.com?param1&param2=value2';
      expect(getQueryParams(url)).toEqual({ param1: '', param2: 'value2' });
    });

    test('should handle duplicate parameter keys (last one wins)', () => {
      const url = 'http://example.com?param=value1&param=value2';
      expect(getQueryParams(url)).toEqual({ param: 'value2' });
    });
  });

  describe('buildQueryParams', () => {
    test('should build query string from an object', () => {
      const params = { name: 'Bob', age: 25 };
      expect(buildQueryParams(params)).toBe('?name=Bob&age=25');
    });

    test('should handle empty object', () => {
      const params = {};
      expect(buildQueryParams(params)).toBe('');
    });

    test('should handle parameters with special characters (encoding)', () => {
      const params = { query: 'hello world!', key: 'value=1' };
      expect(buildQueryParams(params)).toBe('?query=hello%20world!&key=value%3D1');
    });

    test('should handle null and undefined values (skip them)', () => {
      const params = { a: 1, b: null, c: undefined, d: 4 };
      expect(buildQueryParams(params)).toBe('?a=1&d=4');
    });

    test('should handle boolean values', () => {
      const params = { active: true, admin: false };
      expect(buildQueryParams(params)).toBe('?active=true&admin=false');
    });

    test('should handle number values', () => {
      const params = { id: 123, count: 0 };
      expect(buildQueryParams(params)).toBe('?id=123&count=0');
    });
  });
});