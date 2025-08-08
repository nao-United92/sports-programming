import { parse, stringify } from './query-string-utils';

describe('queryString utils', () => {
  describe('parse', () => {
    test('should parse a simple query string', () => {
      expect(parse('foo=bar')).toEqual({ foo: 'bar' });
    });

    test('should parse a query string with multiple values', () => {
      expect(parse('foo=bar&baz=qux')).toEqual({ foo: 'bar', baz: 'qux' });
    });

    test('should parse a query string with an array', () => {
      expect(parse('a=1&a=2')).toEqual({ a: ['1', '2'] });
    });
  });

  describe('stringify', () => {
    test('should stringify a simple object', () => {
      expect(stringify({ foo: 'bar' })).toBe('foo=bar');
    });

    test('should stringify an object with multiple values', () => {
      expect(stringify({ foo: 'bar', baz: 'qux' })).toBe('foo=bar&baz=qux');
    });

    test('should stringify an object with an array', () => {
      expect(stringify({ a: ['1', '2'] })).toBe('a=1&a=2');
    });
  });
});