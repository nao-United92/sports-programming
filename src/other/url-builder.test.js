import { buildUrl } from './url-builder.js';

describe('buildUrl', () => {
  const baseUrl = 'https://example.com/api';

  it('should build a URL with simple parameters', () => {
    const params = { a: 1, b: 'test' };
    const expected = 'https://example.com/api?a=1&b=test';
    expect(buildUrl(baseUrl, params)).toBe(expected);
  });

  it('should handle array parameters', () => {
    const params = { ids: [1, 2, 3] };
    const expected = 'https://example.com/api?ids=1&ids=2&ids=3';
    expect(buildUrl(baseUrl, params)).toBe(expected);
  });

  it('should handle URL encoding', () => {
    const params = { q: 'hello world' };
    const expected = 'https://example.com/api?q=hello+world';
    expect(buildUrl(baseUrl, params)).toBe(expected);
  });

  it('should ignore null and undefined values', () => {
    const params = { a: 1, b: null, c: undefined, d: 'four' };
    const expected = 'https://example.com/api?a=1&d=four';
    expect(buildUrl(baseUrl, params)).toBe(expected);
  });

  it('should work with a base URL that already has a query string', () => {
    const baseUrlWithQuery = 'https://example.com/api?existing=true';
    const params = { a: 1 };
    const expected = 'https://example.com/api?existing=true&a=1';
    expect(buildUrl(baseUrlWithQuery, params)).toBe(expected);
  });
});
