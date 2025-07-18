import { getQueryParam, setQueryParam, removeQueryParam, isAbsoluteUrl, addQueryParams, combineURLs } from './url-utils.js';

describe('url-utils', () => {
  const url = 'https://example.com?a=1&b=2';

  it('should get a query parameter', () => {
    expect(getQueryParam(url, 'a')).toBe('1');
  });

  it('should set a query parameter', () => {
    const newUrl = setQueryParam(url, 'c', '3');
    expect(newUrl).toBe('https://example.com/?a=1&b=2&c=3');
  });

  it('should remove a query parameter', () => {
    const newUrl = removeQueryParam(url, 'b');
    expect(newUrl).toBe('https://example.com/?a=1');
  });

  it('should check if a URL is absolute', () => {
    expect(isAbsoluteUrl('https://example.com')).toBe(true);
    expect(isAbsoluteUrl('/foo/bar')).toBe(false);
  });

  it('should add multiple query parameters', () => {
    const newUrl = addQueryParams('https://example.com', { param1: 'value1', param2: 'value2' });
    expect(newUrl).toBe('https://example.com/?param1=value1&param2=value2');
  });

  it('should add query parameters to an existing URL', () => {
    const newUrl = addQueryParams('https://example.com?existing=true', { param1: 'value1' });
    expect(newUrl).toBe('https://example.com/?existing=true&param1=value1');
  });

  it('should handle empty params object', () => {
    const newUrl = addQueryParams('https://example.com', {});
    expect(newUrl).toBe('https://example.com/');
  });

  describe('combineURLs', () => {
    it('should combine a base URL and a relative URL', () => {
      expect(combineURLs('https://example.com', '/foo')).toBe('https://example.com/foo');
    });

    it('should handle trailing slashes in the base URL', () => {
      expect(combineURLs('https://example.com/', '/foo')).toBe('https://example.com/foo');
    });

    it('should handle leading slashes in the relative URL', () => {
      expect(combineURLs('https://example.com', 'foo')).toBe('https://example.com/foo');
    });

    it('should handle both trailing and leading slashes', () => {
      expect(combineURLs('https://example.com/', 'foo')).toBe('https://example.com/foo');
    });

    it('should return the base URL if the relative URL is empty', () => {
      expect(combineURLs('https://example.com', '')).toBe('https://example.com');
    });
  });
});
