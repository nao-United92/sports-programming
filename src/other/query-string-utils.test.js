import { objectToQueryString, queryStringToObject } from './query-string-utils.js';

describe('queryString', () => {
  describe('objectToQueryString', () => {
    it('should convert an object to a query string', () => {
      const obj = { a: 1, b: 'hello', c: true };
      expect(objectToQueryString(obj)).toBe('a=1&b=hello&c=true');
    });

    it('should handle an empty object', () => {
      expect(objectToQueryString({})).toBe('');
    });

    it('should handle special characters', () => {
      const obj = { 'a b': 'c&d' };
      expect(objectToQueryString(obj)).toBe('a%20b=c%26d');
    });

    it('should return an empty string for non-object inputs', () => {
      expect(objectToQueryString(null)).toBe('');
      expect(objectToQueryString(undefined)).toBe('');
      expect(objectToQueryString(123)).toBe('');
    });
  });

  describe('queryStringToObject', () => {
    it('should convert a query string to an object', () => {
      const queryString = 'a=1&b=hello&c=true';
      expect(queryStringToObject(queryString)).toEqual({ a: '1', b: 'hello', c: 'true' });
    });

    it('should handle an empty query string', () => {
      expect(queryStringToObject('')).toEqual({});
    });

    it('should handle special characters', () => {
      const queryString = 'a%20b=c%26d';
      expect(queryStringToObject(queryString)).toEqual({ 'a b': 'c&d' });
    });

    it('should return an empty object for non-string inputs', () => {
      expect(queryStringToObject(null)).toEqual({});
      expect(queryStringToObject(undefined)).toEqual({});
      expect(queryStringToObject(123)).toEqual({});
    });
  });
});
