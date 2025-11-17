const { parseQuery, stringifyQuery } = require('./url-query-utils');

describe('URL Query Utilities', () => {
  describe('parseQuery', () => {
    it('should parse a simple query string', () => {
      expect(parseQuery('key1=value1&key2=value2')).toEqual({ key1: 'value1', key2: 'value2' });
    });

    it('should handle a leading question mark', () => {
      expect(parseQuery('?key1=value1')).toEqual({ key1: 'value1' });
    });

    it('should decode URI components and handle plus signs for spaces', () => {
      expect(parseQuery('k%20ey=v%26alue&another=hello+world')).toEqual({ 'k ey': 'v&alue', 'another': 'hello world' });
    });

    it('should handle multiple values for the same key', () => {
      expect(parseQuery('a=1&a=2&b=3')).toEqual({ a: ['1', '2'], b: '3' });
    });

    it('should handle keys without values as true', () => {
      expect(parseQuery('a&b=2')).toEqual({ a: true, b: '2' });
    });

    it('should return an empty object for an empty or null string', () => {
      expect(parseQuery('')).toEqual({});
      expect(parseQuery(null)).toEqual({});
    });

    it('should handle complex cases', () => {
        expect(parseQuery('?a=1&b=hello%20world&c=true&a=2')).toEqual({
            a: ['1', '2'],
            b: 'hello world',
            c: 'true'
        });
    });
  });

  describe('stringifyQuery', () => {
    it('should stringify a simple object', () => {
      expect(stringifyQuery({ key1: 'value1', key2: 'value2' })).toBe('key1=value1&key2=value2');
    });

    it('should encode URI components', () => {
      expect(stringifyQuery({ 'k ey': 'v&alue' })).toBe('k%20ey=v%26alue');
    });

    it('should handle array values', () => {
      expect(stringifyQuery({ a: ['1', '2'], b: '3' })).toBe('a=1&a=2&b=3');
    });

    it('should ignore null and undefined values in objects and arrays', () => {
      expect(stringifyQuery({ a: 1, b: null, c: undefined, d: 4 })).toBe('a=1&d=4');
      expect(stringifyQuery({ a: [1, null, 2, undefined, 3] })).toBe('a=1&a=2&a=3');
    });

    it('should return an empty string for an empty object or null', () => {
      expect(stringifyQuery({})).toBe('');
      expect(stringifyQuery(null)).toBe('');
    });

    it('should handle boolean and number values', () => {
        expect(stringifyQuery({ a: true, b: 123, c: false })).toBe('a=true&b=123&c=false');
    });
  });
});
