import { getQueryParam, setQueryParam, removeQueryParam, isAbsoluteUrl } from './url-utils.js';

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
});
