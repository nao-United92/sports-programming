import { getUrlQueryParams } from './url-query-params-utils.js';

describe('getUrlQueryParams', () => {
  test('should return an empty object for a URL without query params', () => {
    expect(getUrlQueryParams('https://example.com')).toEqual({});
  });

  test('should extract a single query parameter', () => {
    expect(getUrlQueryParams('https://example.com?foo=bar')).toEqual({ foo: 'bar' });
  });

  test('should extract multiple query parameters', () => {
    expect(getUrlQueryParams('https://example.com?foo=bar&baz=qux')).toEqual({ foo: 'bar', baz: 'qux' });
  });

  test('should handle URL encoded characters', () => {
    expect(getUrlQueryParams('https://example.com?name=John%20Doe')).toEqual({ name: 'John Doe' });
  });

  test('should handle parameters without values', () => {
    expect(getUrlQueryParams('https://example.com?foo=&bar')).toEqual({ foo: '', bar: '' });
  });

  test('should handle an empty query string', () => {
    expect(getUrlQueryParams('https://example.com?')).toEqual({});
  });
});
