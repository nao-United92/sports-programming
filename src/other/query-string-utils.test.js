import { parseQueryString, stringifyQueryString } from './query-string-utils.js';

describe('Query String Utilities', () => {
  describe('parseQueryString', () => {
    test('should parse a simple query string', () => {
      expect(parseQueryString('a=1&b=2')).toEqual({ a: '1', b: '2' });
    });

    test('should handle a query string with a leading question mark', () => {
      expect(parseQueryString('?a=1&b=2')).toEqual({ a: '1', b: '2' });
    });

    test('should handle URI encoded components', () => {
      expect(parseQueryString('name=John%20Doe&city=New%20York')).toEqual({ name: 'John Doe', city: 'New York' });
    });

    test('should handle keys without values', () => {
      expect(parseQueryString('a=&b=2')).toEqual({ a: '', b: '2' });
    });

    test('should return an empty object for an empty or invalid query string', () => {
      expect(parseQueryString('')).toEqual({});
      expect(parseQueryString('?')).toEqual({});
      expect(parseQueryString(null)).toEqual({});
      expect(parseQueryString(undefined)).toEqual({});
    });
  });

  describe('stringifyQueryString', () => {
    test('should stringify a simple object', () => {
      expect(stringifyQueryString({ a: 1, b: 2 })).toBe('a=1&b=2');
    });

    test('should URI encode keys and values', () => {
      expect(stringifyQueryString({ 'full name': 'John Doe', 'city/state': 'New York' })).toBe('full%20name=John%20Doe&city%2Fstate=New%20York');
    });

    test('should handle an empty object', () => {
      expect(stringifyQueryString({})).toBe('');
    });

    test('should handle values that are empty strings', () => {
      expect(stringifyQueryString({ a: '', b: '2' })).toBe('a=&b=2');
    });

    test('should return an empty string for null or undefined input', () => {
      expect(stringifyQueryString(null)).toBe('');
      expect(stringifyQueryString(undefined)).toBe('');
    });
  });
});