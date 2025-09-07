import { objectToQueryString, queryStringToObject } from './url-utils.js';

describe('URL Utilities', () => {
  describe('objectToQueryString', () => {
    it('should convert a simple object to a query string', () => {
      const obj = { a: 1, b: 'hello' };
      expect(objectToQueryString(obj)).toBe('a=1&b=hello');
    });

    it('should handle special characters', () => {
      const obj = { name: 'John Doe', city: 'New York' };
      expect(objectToQueryString(obj)).toBe('name=John%20Doe&city=New%20York');
    });

    it('should return an empty string for an empty object', () => {
      const obj = {};
      expect(objectToQueryString(obj)).toBe('');
    });
  });

  describe('queryStringToObject', () => {
    it('should convert a simple query string to an object', () => {
      const queryString = 'a=1&b=hello';
      expect(queryStringToObject(queryString)).toEqual({ a: '1', b: 'hello' });
    });

    it('should handle special characters', () => {
      const queryString = 'name=John%20Doe&city=New%20York';
      expect(queryStringToObject(queryString)).toEqual({ name: 'John Doe', city: 'New York' });
    });

    it('should handle a query string with no value for a key', () => {
      const queryString = 'a=&b=hello';
      expect(queryStringToObject(queryString)).toEqual({ a: '', b: 'hello' });
    });

    it('should return an empty object for an empty query string', () => {
      const queryString = '';
      expect(queryStringToObject(queryString)).toEqual({});
    });
  });
});
