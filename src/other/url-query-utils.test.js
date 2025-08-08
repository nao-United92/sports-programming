import { parseQuery, stringifyQuery } from './url-query-utils.js';

describe('URL Query Utilities', () => {
  describe('parseQuery', () => {
    test('should parse a simple query string', () => {
      expect(parseQuery('http://example.com?foo=bar&baz=qux')).toEqual({ foo: 'bar', baz: 'qux' });
    });

    test('should handle multiple values for the same key', () => {
      expect(parseQuery('http://example.com?a=1&a=2&a=3')).toEqual({ a: ['1', '2', '3'] });
    });

    test('should handle a URL with no query string', () => {
      expect(parseQuery('http://example.com')).toEqual({});
    });

    test('should handle an empty query string', () => {
      expect(parseQuery('http://example.com?')).toEqual({});
    });
  });

  describe('stringifyQuery', () => {
    test('should stringify a simple object', () => {
      expect(stringifyQuery({ foo: 'bar', baz: 'qux' })).toBe('foo=bar&baz=qux');
    });

    test('should handle an object with an array value', () => {
      expect(stringifyQuery({ a: ['1', '2', '3'] })).toBe('a=1&a=2&a=3');
    });

    test('should handle an empty object', () => {
      expect(stringifyQuery({})).toBe('');
    });
  });
});