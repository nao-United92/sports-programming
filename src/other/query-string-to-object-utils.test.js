import { queryStringToObject, objectToQueryString } from './query-string-to-object-utils.js';

describe('queryStringToObject', () => {
  test('should parse a basic query string', () => {
    expect(queryStringToObject('foo=bar&baz=qux')).toEqual({ foo: 'bar', baz: 'qux' });
  });

  test('should handle a leading question mark', () => {
    expect(queryStringToObject('?foo=bar&baz=qux')).toEqual({ foo: 'bar', baz: 'qux' });
  });

  test('should decode URI-encoded characters', () => {
    expect(queryStringToObject('a%20b=c%26d')).toEqual({ 'a b': 'c&d' });
  });

  test('should handle multiple values for the same key by creating an array', () => {
    expect(queryStringToObject('a=1&a=2&b=3')).toEqual({ a: ['1', '2'], b: '3' });
  });

  test('should handle a key appearing multiple times, starting with a single value', () => {
    const result = queryStringToObject('a=1&b=2&a=3');
    expect(result).toEqual({ a: ['1', '3'], b: '2' });
  });

  test('should handle keys without a value', () => {
    expect(queryStringToObject('a=&b=2')).toEqual({ a: '', b: '2' });
  });

  test('should handle keys present without an equals sign', () => {
    expect(queryStringToObject('a&b=2')).toEqual({ a: '', b: '2' });
  });

  test('should return an empty object for empty, null, or undefined input', () => {
    expect(queryStringToObject('')).toEqual({});
    expect(queryStringToObject('?')).toEqual({});
    expect(queryStringToObject(null)).toEqual({});
    expect(queryStringToObject(undefined)).toEqual({});
  });

  test('should ignore leading ampersand', () => {
    expect(queryStringToObject('&a=1&b=2')).toEqual({ a: '1', b: '2' });
  });
});

describe('objectToQueryString', () => {
  test('should convert a basic object to a query string', () => {
    expect(objectToQueryString({ foo: 'bar', baz: 'qux' })).toBe('foo=bar&baz=qux');
  });

  test('should URI-encode keys and values', () => {
    expect(objectToQueryString({ 'a b': 'c&d' })).toBe('a%20b=c%26d');
  });

  test('should handle array values', () => {
    expect(objectToQueryString({ a: ['1', '2'], b: '3' })).toBe('a=1&a=2&b=3');
  });

  test('should ignore null and undefined values', () => {
    expect(objectToQueryString({ a: 1, b: null, c: undefined, d: 4 })).toBe('a=1&d=4');
  });

  test('should return an empty string for an empty object', () => {
    expect(objectToQueryString({})).toBe('');
  });

  test('should return an empty string for null or undefined input', () => {
    expect(objectToQueryString(null)).toBe('');
    expect(objectToQueryString(undefined)).toBe('');
  });
});