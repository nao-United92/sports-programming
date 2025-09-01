import { queryStringToObject } from './query-string-to-object-utils';

describe('queryStringToObject', () => {
  test('should convert a simple query string to an object', () => {
    const url = 'a=1&b=2&c=3';
    const expected = { a: '1', b: '2', c: '3' };
    expect(queryStringToObject(url)).toEqual(expected);
  });

  test('should handle a URL with a query string', () => {
    const url = 'https://example.com?a=1&b=2';
    const expected = { a: '1', b: '2' };
    expect(queryStringToObject(url)).toEqual(expected);
  });

  test('should handle an empty query string', () => {
    const url = '';
    const expected = {};
    expect(queryStringToObject(url)).toEqual(expected);
  });

  test('should handle a URL with no query string', () => {
    const url = 'https://example.com';
    const expected = {};
    expect(queryStringToObject(url)).toEqual(expected);
  });

  test('should handle encoded characters', () => {
    const url = 'a=%20b&c=%26d';
    const expected = { a: ' b', c: '&d' };
    expect(queryStringToObject(url)).toEqual(expected);
  });

  test('should handle parameters with no value', () => {
    const url = 'a=&b=2';
    const expected = { a: '', b: '2' };
    expect(queryStringToObject(url)).toEqual(expected);
  });
});
