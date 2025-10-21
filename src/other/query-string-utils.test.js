import { parse, stringify } from './query-string-utils.js';

describe('Query String Utils', () => {
  describe('parse', () => {
    it('should parse a query string into an object', () => {
      expect(parse('?foo=bar&baz=qux')).toEqual({ foo: 'bar', baz: 'qux' });
    });

    it('should handle query string without a leading question mark', () => {
      expect(parse('foo=bar&baz=qux')).toEqual({ foo: 'bar', baz: 'qux' });
    });

    it('should handle empty query string', () => {
      expect(parse('')).toEqual({});
      expect(parse('?')).toEqual({});
    });

    it('should decode URI components', () => {
      expect(parse('a=%20b&c=%26d')).toEqual({ a: ' b', c: '&d' });
    });

    it('should handle keys without values', () => {
      expect(parse('a=&b=2&c')).toEqual({ a: '', b: '2', c: '' });
    });
  });

  describe('stringify', () => {
    it('should stringify an object into a query string', () => {
      expect(stringify({ foo: 'bar', baz: 'qux' })).toBe('foo=bar&baz=qux');
    });

    it('should handle empty object', () => {
      expect(stringify({})).toBe('');
    });

    it('should encode URI components', () => {
      expect(stringify({ a: ' b', c: '&d' })).toBe('a=%20b&c=%26d');
    });

    it('should handle various value types', () => {
      expect(stringify({ a: 1, b: true, c: null, d: undefined })).toBe('a=1&b=true&c=null&d=undefined');
    });
  });
});