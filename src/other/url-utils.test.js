import { objectToQueryString, queryStringToObject, updateUrlQueryParams } from './url-utils.js';

describe('objectToQueryString', () => {
  it('should convert a simple object to a query string', () => {
    const obj = { a: 1, b: 'hello' };
    expect(objectToQueryString(obj)).toBe('a=1&b=hello');
  });

  it('should handle special characters', () => {
    const obj = { q: 'a&b=c', user: 'foo@bar.com' };
    expect(objectToQueryString(obj)).toBe('q=a%26b%3Dc&user=foo%40bar.com');
  });

  it('should handle array values', () => {
    const obj = { ids: [1, 2, 3] };
    expect(objectToQueryString(obj)).toBe('ids[]=1&ids[]=2&ids[]=3');
  });

  it('should handle null and undefined values', () => {
    const obj = { a: 1, b: null, c: undefined, d: 'four' };
    expect(objectToQueryString(obj)).toBe('a=1&b&d=four');
  });

  it('should return an empty string for empty or invalid input', () => {
    expect(objectToQueryString({})).toBe('');
    expect(objectToQueryString(null)).toBe('');
  });
});

describe('queryStringToObject', () => {
  it('should convert a simple query string to an object', () => {
    const str = 'a=1&b=hello';
    expect(queryStringToObject(str)).toEqual({ a: '1', b: 'hello' });
  });

  it('should handle a leading question mark', () => {
    const str = '?a=1&b=hello';
    expect(queryStringToObject(str)).toEqual({ a: '1', b: 'hello' });
  });

  it('should handle special characters', () => {
    const str = 'q=a%26b%3Dc&user=foo%40bar.com';
    expect(queryStringToObject(str)).toEqual({ q: 'a&b=c', user: 'foo@bar.com' });
  });

  it('should handle array values', () => {
    const str = 'ids[]=1&ids[]=2&ids[]=3';
    expect(queryStringToObject(str)).toEqual({ ids: ['1', '2', '3'] });
  });

  it('should handle keys without values', () => {
    const str = 'a=1&b&d=four';
    expect(queryStringToObject(str)).toEqual({ a: '1', b: null, d: 'four' });
  });

  it('should return an empty object for empty or invalid input', () => {
    expect(queryStringToObject('')).toEqual({});
    expect(queryStringToObject('?')).toEqual({});
    expect(queryStringToObject(null)).toEqual({});
  });
});

describe('updateUrlQueryParams', () => {
  test('should add new query parameters to a URL without existing ones', () => {
    const url = 'http://example.com/path';
    const params = { param1: 'value1', param2: 'value2' };
    const expected = 'http://example.com/path?param1=value1&param2=value2';
    expect(updateUrlQueryParams(url, params)).toBe(expected);
  });

  test('should update existing query parameters', () => {
    const url = 'http://example.com/path?param1=oldValue&param3=value3';
    const params = { param1: 'newValue', param2: 'value2' };
    const expected = 'http://example.com/path?param1=newValue&param3=value3&param2=value2';
    expect(updateUrlQueryParams(url, params)).toBe(expected);
  });

  test('should handle empty params object', () => {
    const url = 'http://example.com/path?param1=value1';
    const params = {};
    expect(updateUrlQueryParams(url, params)).toBe(url);
  });

  test('should handle URL with hash', () => {
    const url = 'http://example.com/path?param1=value1#hash';
    const params = { param2: 'value2' };
    const expected = 'http://example.com/path?param1=value1&param2=value2#hash';
    expect(updateUrlQueryParams(url, params)).toBe(expected);
  });

  test('should handle URL with no path', () => {
    const url = 'http://example.com';
    const params = { param1: 'value1' };
    const expected = 'http://example.com/?param1=value1';
    expect(updateUrlQueryParams(url, params)).toBe(expected);
  });

  test('should encode parameter values', () => {
    const url = 'http://example.com';
    const params = { query: 'a&b=c' };
    const expected = 'http://example.com/?query=a%26b%3Dc';
    expect(updateUrlQueryParams(url, params)).toBe(expected);
  });
});