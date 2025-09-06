import { getUrlQueryParam } from './url-practice.js';

describe('getUrlQueryParam', () => {
  test('should return the value of a query parameter', () => {
    const url = 'https://example.com?foo=bar&baz=qux';
    expect(getUrlQueryParam(url, 'foo')).toBe('bar');
    expect(getUrlQueryParam(url, 'baz')).toBe('qux');
  });

  test('should return null for a non-existent parameter', () => {
    const url = 'https://example.com?foo=bar';
    expect(getUrlQueryParam(url, 'baz')).toBeNull();
  });

  test('should handle URLs with no query string', () => {
    const url = 'https://example.com';
    expect(getUrlQueryParam(url, 'foo')).toBeNull();
  });

  test('should handle multiple occurrences of the same parameter', () => {
    const url = 'https://example.com?foo=bar&foo=baz';
    expect(getUrlQueryParam(url, 'foo')).toBe('bar'); // get() returns the first one
  });
});
