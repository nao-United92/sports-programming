const { parseQuery, stringifyQuery } = require('./url-query-parser');

describe('URL Query Parser', () => {
  describe('parseQuery', () => {
    it('should parse a simple query string', () => {
      expect(parseQuery('a=1&b=2')).toEqual({ a: '1', b: '2' });
    });

    it('should parse a query string from a full URL', () => {
      expect(parseQuery('https://example.com?a=1&b=2')).toEqual({ a: '1', b: '2' });
    });

    it('should handle multiple values for the same key', () => {
      expect(parseQuery('a=1&a=2&b=3')).toEqual({ a: ['1', '2'], b: '3' });
    });

    it('should handle empty values', () => {
      expect(parseQuery('a=&b=2')).toEqual({ a: '', b: '2' });
    });

    it('should handle a query string with no values', () => {
      expect(parseQuery('a&b=2')).toEqual({ a: '', b: '2' });
    });

    it('should return an empty object for an empty string', () => {
      expect(parseQuery('')).toEqual({});
    });

    it('should handle encoded characters', () => {
      expect(parseQuery('q=%E3%81%82%E3%81%84%E3%81%86')).toEqual({ q: 'あいう' });
    });
  });

  describe('stringifyQuery', () => {
    it('should stringify a simple object', () => {
      expect(stringifyQuery({ a: '1', b: '2' })).toBe('a=1&b=2');
    });

    it('should handle array values', () => {
      expect(stringifyQuery({ a: ['1', '2'], b: '3' })).toBe('a=1&a=2&b=3');
    });

    it('should handle empty and null values', () => {
      expect(stringifyQuery({ a: '', b: null, c: undefined, d: '4' })).toBe('a=&d=4');
    });

    it('should return an empty string for an empty object', () => {
      expect(stringifyQuery({})).toBe('');
    });

    it('should encode special characters', () => {
      expect(stringifyQuery({ q: 'a b c' })).toBe('q=a+b+c');
    });
  });
});
