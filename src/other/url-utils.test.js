import { parseQuery, stringifyQuery, getURLParameters, getURLPath, getURLProtocol } from './url-utils.js';

describe('URL Query Utils', () => {
  describe('parseQuery', () => {
    test('should parse a simple query string', () => {
      expect(parseQuery('?foo=bar')).toEqual({ foo: 'bar' });
    });

    test('should parse a query string without a leading question mark', () => {
      expect(parseQuery('foo=bar&baz=qux')).toEqual({ foo: 'bar', baz: 'qux' });
    });

    test('should handle URL-encoded characters', () => {
      expect(parseQuery('a%20b=c%26d')).toEqual({ 'a b': 'c&d' });
    });

    test('should handle keys without values', () => {
      expect(parseQuery('foo&bar=baz')).toEqual({ foo: true, bar: 'baz' });
    });

    test('should return an empty object for an empty query string', () => {
      expect(parseQuery('')).toEqual({});
      expect(parseQuery('?')).toEqual({});
    });
  });

  describe('stringifyQuery', () => {
    test('should stringify a simple object', () => {
      expect(stringifyQuery({ foo: 'bar' })).toBe('foo=bar');
    });

    test('should stringify an object with multiple keys', () => {
      expect(stringifyQuery({ foo: 'bar', baz: 'qux' })).toBe('foo=bar&baz=qux');
    });

    test('should handle URL-encoded characters', () => {
      expect(stringifyQuery({ 'a b': 'c&d' })).toBe('a%20b=c%26d');
    });

    test('should handle boolean true values', () => {
      expect(stringifyQuery({ foo: true, bar: 'baz' })).toBe('foo&bar=baz');
    });

    test('should return an empty string for an empty object', () => {
      expect(stringifyQuery({})).toBe('');
    });

    test('should return an empty string for a null or undefined object', () => {
      expect(stringifyQuery(null)).toBe('');
      expect(stringifyQuery(undefined)).toBe('');
    });
  });

  describe('getURLParameters', () => {
    test('should get parameters from a full URL', () => {
      const url = 'https://example.com/path?name=John&age=30';
      expect(getURLParameters(url)).toEqual({ name: 'John', age: '30' });
    });

    test('should return an empty object if no query string', () => {
      const url = 'https://example.com/path';
      expect(getURLParameters(url)).toEqual({});
    });

    test('should handle URLs with only a question mark', () => {
      const url = 'https://example.com/path?';
      expect(getURLParameters(url)).toEqual({});
    });

    test('should return an empty object for an invalid URL', () => {
      const url = 'not a url';
      expect(getURLParameters(url)).toEqual({});
    });
  });

  describe('getURLPath', () => {
    test('should get the path from a URL', () => {
      const url = 'https://example.com/path/to/page?query=1';
      expect(getURLPath(url)).toBe('/path/to/page');
    });

    test('should return "/" for a URL with no path', () => {
      const url = 'https://example.com?query=1';
      expect(getURLPath(url)).toBe('/');
    });

    test('should return an empty string for an invalid URL', () => {
      const url = 'invalid-url';
      expect(getURLPath(url)).toBe('');
    });
  });

  describe('getURLProtocol', () => {
    test('should get the protocol from a URL', () => {
      const url = 'https://example.com';
      expect(getURLProtocol(url)).toBe('https:');
    });

    test('should work for http protocol', () => {
      const url = 'http://example.com';
      expect(getURLProtocol(url)).toBe('http:');
    });

    test('should return an empty string for an invalid URL', () => {
      const url = 'invalid-url';
      expect(getURLProtocol(url)).toBe('');
    });
  });
});