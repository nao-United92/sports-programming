import { objectToQueryString, queryStringToObject } from './url-query-utils.js';

describe('url-query-utils', () => {
  describe('objectToQueryString', () => {
    it('should convert a simple object to a query string', () => {
      expect(objectToQueryString({ a: 1, b: 'hello' })).toBe('a=1&b=hello');
    });

    it('should handle special characters', () => {
      expect(objectToQueryString({ q: 'a&b=c', next: '/path' })).toBe('q=a%26b%3Dc&next=%2Fpath');
    });

    it('should handle arrays by adding []', () => {
      expect(objectToQueryString({ ids: [1, 2, 3] })).toBe('ids[]=1&ids[]=2&ids[]=3');
    });

    it('should handle null and undefined values', () => {
      expect(objectToQueryString({ a: 1, b: null, c: undefined, d: 'd' })).toBe('a=1&b&d=d');
    });

    it('should return an empty string for empty, null, or non-object inputs', () => {
      expect(objectToQueryString({})).toBe('');
      expect(objectToQueryString(null)).toBe('');
      expect(objectToQueryString('test')).toBe('');
    });
  });

  describe('queryStringToObject', () => {
    it('should convert a simple query string to an object', () => {
      expect(queryStringToObject('a=1&b=hello')).toEqual({ a: '1', b: 'hello' });
    });

    it('should handle URL-encoded characters', () => {
      expect(queryStringToObject('q=a%26b%3Dc&next=%2Fpath')).toEqual({ q: 'a&b=c', next: '/path' });
    });

    it('should handle array syntax with []', () => {
      expect(queryStringToObject('ids[]=1&ids[]=2&ids[]=3')).toEqual({ ids: ['1', '2', '3'] });
    });

    it('should handle keys without values as null', () => {
      expect(queryStringToObject('a&b=2')).toEqual({ a: null, b: '2' });
    });

    it('should handle repeated keys by creating an array', () => {
        expect(queryStringToObject('key=v1&key=v2')).toEqual({ key: ['v1', 'v2'] });
    });

    it('should return an empty object for empty, null, or non-string inputs', () => {
      expect(queryStringToObject('')).toEqual({});
      expect(queryStringToObject('?')).toEqual({});
      expect(queryStringToObject(null)).toEqual({});
      expect(queryStringToObject({})).toEqual({});
    });
  });
});
