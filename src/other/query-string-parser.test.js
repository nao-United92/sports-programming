const { parse, stringify } = require('./query-string-parser');

describe('Query String Parser', () => {
  describe('parse', () => {
    test('should parse a simple query string', () => {
      expect(parse('?foo=bar&baz=qux')).toEqual({ foo: 'bar', baz: 'qux' });
    });

    test('should handle no leading question mark', () => {
      expect(parse('a=1&b=2')).toEqual({ a: '1', b: '2' });
    });

    test('should handle an empty string', () => {
      expect(parse('')).toEqual({});
      expect(parse('?')).toEqual({});
    });

    test('should handle keys without values', () => {
      expect(parse('foo=&bar=baz')).toEqual({ foo: '', bar: 'baz' });
      expect(parse('foo&bar=baz')).toEqual({ foo: '', bar: 'baz' });
    });

    test('should handle URI encoded components', () => {
      expect(parse('a=%20b&c=%26d')).toEqual({ a: ' b', c: '&d' });
    });
    
    test('should handle plus-encoded spaces', () => {
      expect(parse('a=b+c')).toEqual({ a: 'b c' });
    });

    test('should handle array values', () => {
      expect(parse('a=1&a=2&a=3')).toEqual({ a: ['1', '2', '3'] });
    });

    test('should handle complex query string', () => {
      expect(parse('a=1&b=hello%20world&c=true&a=2')).toEqual({ a: ['1', '2'], b: 'hello world', c: 'true' });
    });
  });

  describe('stringify', () => {
    test('should stringify a simple object', () => {
      expect(stringify({ foo: 'bar', baz: 'qux' })).toBe('foo=bar&baz=qux');
    });

    test('should handle special characters by URI encoding them', () => {
      expect(stringify({ a: ' &?', b: 'c d' })).toBe('a=%20%26%3F&b=c%20d');
    });

    test('should handle array values', () => {
      expect(stringify({ a: ['1', '2', '3'], b: 'foo' })).toBe('a=1&a=2&a=3&b=foo');
    });

    test('should ignore null and undefined values', () => {
      expect(stringify({ a: 1, b: null, c: undefined, d: 'foo' })).toBe('a=1&d=foo');
    });

    test('should handle an empty object', () => {
      expect(stringify({})).toBe('');
    });

    test('should handle an object with an empty array', () => {
      expect(stringify({ a: [], b: 'foo' })).toBe('b=foo');
    });
  });
});
