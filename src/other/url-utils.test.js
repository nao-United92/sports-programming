import { objectToQueryString, queryStringToObject } from './url-utils.js';

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