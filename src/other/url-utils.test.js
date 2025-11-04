import { parseQuery } from './url-utils.js';

describe('parseQuery', () => {
  test('should return an empty object for a URL with no query string', () => {
    expect(parseQuery('https://example.com')).toEqual({});
  });

  test('should parse a simple query string', () => {
    const url = 'https://example.com?a=1&b=hello';
    expect(parseQuery(url)).toEqual({ a: '1', b: 'hello' });
  });

  test('should handle multiple values for the same key', () => {
    const url = 'https://example.com?a=1&a=2&b=3';
    expect(parseQuery(url)).toEqual({ a: ['1', '2'], b: '3' });
  });

  test('should handle a query string with no value', () => {
    const url = 'https://example.com?a=&b=2';
    expect(parseQuery(url)).toEqual({ a: '', b: '2' });
  });

  test('should handle a query string with special characters', () => {
    const url = 'https://example.com?name=John%20Doe&city=New%20York';
    expect(parseQuery(url)).toEqual({ name: 'John Doe', city: 'New York' });
  });

  test('should handle just the query string part', () => {
    const url = '?a=1&b=2';
    expect(parseQuery(url)).toEqual({ a: '1', b: '2' });
  });
});
