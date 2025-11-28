const { parseQueryString, stringifyQueryString } = require('./url-query-utils');

describe('URL Query Utilities', () => {
  describe('parseQueryString', () => {
    test('should parse a simple query string', () => {
      expect(parseQueryString('https://example.com?a=1&b=2')).toEqual({ a: '1', b: '2' });
    });

    test('should handle URLs without a query string', () => {
      expect(parseQueryString('https://example.com')).toEqual({});
    });

    test('should handle URLs with an empty query string', () => {
      expect(parseQueryString('https://example.com?')).toEqual({});
    });

    test('should handle URI encoded components', () => {
      expect(parseQueryString('https://example.com?q=hello%20world&framework=react%2Bnext')).toEqual({ q: 'hello world', framework: 'react+next' });
    });

    test('should handle multiple values for the same key', () => {
      expect(parseQueryString('https://example.com?a=1&a=2&b=3')).toEqual({ a: ['1', '2'], b: '3' });
    });

    test('should handle a single key-value pair', () => {
      expect(parseQueryString('?a=1')).toEqual({ a: '1' });
    });
  });

  describe('stringifyQueryString', () => {
    test('should stringify a simple object', () => {
      expect(stringifyQueryString({ a: 1, b: 'hello' })).toBe('a=1&b=hello');
    });

    test('should ignore null and undefined values', () => {
      expect(stringifyQueryString({ a: 1, b: null, c: undefined, d: 4 })).toBe('a=1&d=4');
    });

    test('should handle array values', () => {
      expect(stringifyQueryString({ a: [1, 2], b: 3 })).toBe('a=1&a=2&b=3');
    });

    test('should ignore null and undefined values within an array', () => {
      expect(stringifyQueryString({ a: [1, null, 2, undefined, 3] })).toBe('a=1&a=2&a=3');
    });

    test('should encode special characters', () => {
      expect(stringifyQueryString({ q: 'hello world', 'c#': 'sharp' })).toBe('q=hello+world&c%23=sharp');
    });

    test('should return an empty string for an empty object', () => {
      expect(stringifyQueryString({})).toBe('');
    });
  });
});
