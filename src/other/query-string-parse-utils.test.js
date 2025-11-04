
import { parseQueryString } from './query-string-parse-utils.js';

describe('parseQueryString', () => {
  test('should parse a simple query string', () => {
    const url = 'https://example.com?foo=bar&baz=qux';
    expect(parseQueryString(url)).toEqual({ foo: 'bar', baz: 'qux' });
  });

  test('should handle a query string without a preceding URL', () => {
    const queryString = 'a=1&b=2';
    expect(parseQueryString(queryString)).toEqual({ a: '1', b: '2' });
  });

  test('should handle URL encoded characters', () => {
    const url = 'https://example.com?name=John%20Doe&city=New%20York';
    expect(parseQueryString(url)).toEqual({ name: 'John Doe', city: 'New York' });
  });

  test('should handle keys without values', () => {
    const url = 'https://example.com?flag1&name=test&flag2';
    expect(parseQueryString(url)).toEqual({ flag1: '', name: 'test', flag2: '' });
  });

  test('should return an empty object for a URL without a query string', () => {
    const url = 'https://example.com';
    expect(parseQueryString(url)).toEqual({});
  });

  test('should return an empty object for an empty string', () => {
    const url = '';
    expect(parseQueryString(url)).toEqual({});
  });
});
