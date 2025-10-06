const { parseQueryString, stringifyQueryString } = require('./query-string-utils');

describe('queryString utils', () => {
  describe('parseQueryString', () => {
    it('should parse a basic query string', () => {
      expect(parseQueryString('key=value&key2=value2')).toEqual({ key: 'value', key2: 'value2' });
    });

    it('should handle a leading question mark', () => {
      expect(parseQueryString('?key=value')).toEqual({ key: 'value' });
    });

    it('should handle encoded components', () => {
      expect(parseQueryString('a%20b=c%26d')).toEqual({ 'a b': 'c&d' });
    });

    it('should return an empty object for an empty string', () => {
      expect(parseQueryString('')).toEqual({});
    });
  });

  describe('stringifyQueryString', () => {
    it('should stringify a basic object', () => {
      expect(stringifyQueryString({ key: 'value', key2: 'value2' })).toBe('key=value&key2=value2');
    });

    it('should encode special characters', () => {
      expect(stringifyQueryString({ 'a b': 'c&d' })).toBe('a%20b=c%26d');
    });

    it('should return an empty string for an empty object', () => {
      expect(stringifyQueryString({})).toBe('');
    });
  });
});