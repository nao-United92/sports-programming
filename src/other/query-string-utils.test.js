const { parse, stringify } = require('./query-string-utils.js');

describe('Query String Utilities', () => {
  describe('parse', () => {
    it('should parse a simple query string', () => {
      expect(parse('foo=bar&baz=qux')).toEqual({ foo: 'bar', baz: 'qux' });
    });

    it('should handle leading question marks', () => {
      expect(parse('?foo=bar&baz=qux')).toEqual({ foo: 'bar', baz: 'qux' });
    });

    it('should handle URL-encoded characters', () => {
      expect(parse('a%20b=c%26d')).toEqual({ 'a b': 'c&d' });
    });

    it('should handle keys without values', () => {
      expect(parse('foo&bar=baz')).toEqual({ foo: null, bar: 'baz' });
    });

    it('should handle multiple values for the same key', () => {
      expect(parse('a=1&a=2&a=3')).toEqual({ a: ['1', '2', '3'] });
    });

    it('should return an empty object for empty or invalid input', () => {
      expect(parse('')).toEqual({});
      expect(parse('?')).toEqual({});
      expect(parse(null)).toEqual({});
      expect(parse(123)).toEqual({});
    });
  });

  describe('stringify', () => {
    it('should stringify a simple object', () => {
      expect(stringify({ foo: 'bar', baz: 'qux' })).toBe('foo=bar&baz=qux');
    });

    it('should URL-encode special characters', () => {
      expect(stringify({ 'a b': 'c&d' })).toBe('a%20b=c%26d');
    });

    it('should handle keys with null or undefined values', () => {
      expect(stringify({ foo: null, bar: 'baz' })).toBe('foo&bar=baz');
      expect(stringify({ foo: undefined, bar: 'baz' })).toBe('foo&bar=baz');
    });

    it('should handle array values', () => {
      expect(stringify({ a: ['1', '2', '3'] })).toBe('a=1&a=2&a=3');
    });

    it('should return an empty string for empty or invalid input', () => {
      expect(stringify({})).toBe('');
      expect(stringify(null)).toBe('');
      expect(stringify('test')).toBe('');
    });
  });
});
