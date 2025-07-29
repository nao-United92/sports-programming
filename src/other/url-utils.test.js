import { getQueryParam, setQueryParam, removeQueryParam, isAbsoluteUrl, addQueryParams, combineURLs, getDomainFromUrl, isAbsolute, getFragment, setFragment, removeFragment, getQueryParams } from './url-utils.js';

describe('url-utils', () => {
  const url = 'https://example.com?a=1&b=2';

  describe('getQueryParams', () => {
    test('should parse query parameters into an object', () => {
      const urlWithParams = 'http://example.com?name=John%20Doe&age=30&city=New%20York';
      expect(getQueryParams(urlWithParams)).toEqual({
        name: 'John Doe',
        age: '30',
        city: 'New York',
      });
    });

    test('should return an empty object if no query parameters', () => {
      const urlNoParams = 'http://example.com';
      expect(getQueryParams(urlNoParams)).toEqual({});
    });

    test('should handle empty string as URL', () => {
      expect(getQueryParams('')).toEqual({});
    });

    test('should handle invalid URL', () => {
      expect(getQueryParams('invalid-url')).toEqual({});
    });
  });

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

  describe('getDomainFromUrl', () => {
    test('should extract the domain from a valid URL', () => {
      expect(getDomainFromUrl('https://www.example.com/path')).toBe('www.example.com');
      expect(getDomainFromUrl('http://sub.domain.co.jp:8080/page')).toBe('sub.domain.co.jp');
      expect(getDomainFromUrl('ftp://ftp.example.org')).toBe('ftp.example.org');
    });

    test('should return null for an invalid URL', () => {
      expect(getDomainFromUrl('invalid-url')).toBeNull();
      expect(getDomainFromUrl('/relative/path')).toBeNull();
      expect(getDomainFromUrl(null)).toBeNull();
      expect(getDomainFromUrl(undefined)).toBeNull();
    });
  });

  describe('isAbsolute', () => {
    test('should return true for absolute URLs', () => {
      expect(isAbsolute('http://example.com')).toBe(true);
      expect(isAbsolute('https://www.example.com/path')).toBe(true);
      expect(isAbsolute('ftp://ftp.example.org')).toBe(true);
      expect(isAbsolute('//example.com/path')).toBe(true); // Protocol-relative URL
    });

    test('should return false for relative URLs', () => {
      expect(isAbsolute('/path/to/resource')).toBe(false);
      expect(isAbsolute('path/to/resource')).toBe(false);
      expect(isAbsolute('../path')).toBe(false);
    });

    test('should return false for invalid inputs', () => {
      expect(isAbsolute(null)).toBe(false);
      expect(isAbsolute(undefined)).toBe(false);
      expect(isAbsolute(123)).toBe(false);
    });
  });

  describe('getFragment', () => {
    test('should return the fragment from a URL', () => {
      expect(getFragment('http://example.com/path#section1')).toBe('#section1');
      expect(getFragment('http://example.com/path')).toBe('');
    });

    test('should return empty string for invalid URL', () => {
      expect(getFragment('invalid-url')).toBe('');
    });
  });

  describe('setFragment', () => {
    test('should set the fragment of a URL', () => {
      expect(setFragment('http://example.com/path', 'new-section')).toBe('http://example.com/path#new-section');
      expect(setFragment('http://example.com/path#old-section', 'new-section')).toBe('http://example.com/path#new-section');
    });

    test('should return original URL for invalid URL', () => {
      expect(setFragment('invalid-url', 'new-section')).toBe('invalid-url');
    });
  });

  describe('removeFragment', () => {
    test('should remove the fragment from a URL', () => {
      expect(removeFragment('http://example.com/path#section1')).toBe('http://example.com/path');
      expect(removeFragment('http://example.com/path')).toBe('http://example.com/path');
    });

    test('should return original URL for invalid URL', () => {
      expect(removeFragment('invalid-url')).toBe('invalid-url');
    });
  });

  describe('isURL', () => {
    test('should return true for a valid URL', () => {
      expect(isURL('http://example.com')).toBe(true);
      expect(isURL('https://www.google.com/search?q=test')).toBe(true);
    });

    test('should return false for an invalid URL', () => {
      expect(isURL('invalid-url')).toBe(false);
      expect(isURL('not-a-url')).toBe(false);
      expect(isURL(null)).toBe(false);
      expect(isURL(undefined)).toBe(false);
    });
  });

  describe('isValidURL', () => {
    test('should return true for a valid URL', () => {
      expect(isValidURL('http://example.com')).toBe(true);
      expect(isValidURL('https://www.google.com/search?q=test')).toBe(true);
    });

    test('should return false for an invalid URL', () => {
      expect(isValidURL('invalid-url')).toBe(false);
      expect(isValidURL('not-a-url')).toBe(false);
      expect(isValidURL(null)).toBe(false);
      expect(isValidURL(undefined)).toBe(false);
    });
  });

  describe('isExternalLink', () => {
    // Mock window.location.hostname for testing
    const originalHostname = window.location.hostname;
    beforeAll(() => {
      Object.defineProperty(window.location, 'hostname', {
        writable: true,
        value: 'localhost',
      });
    });

    afterAll(() => {
      Object.defineProperty(window.location, 'hostname', {
        writable: true,
        value: originalHostname,
      });
    });

    test('should return true for an external link', () => {
      expect(isExternalLink('http://example.com')).toBe(true);
      expect(isExternalLink('https://www.google.com')).toBe(true);
      expect(isExternalLink('http://sub.example.com')).toBe(true); // Different subdomain
    });

    test('should return false for an internal link', () => {
      expect(isExternalLink('http://localhost/path')).toBe(false);
      expect(isExternalLink('https://localhost:8080/path')).toBe(false);
      expect(isExternalLink('/relative/path')).toBe(false);
    });

    test('should return false for invalid URLs', () => {
      expect(isExternalLink('invalid-url')).toBe(false);
      expect(isExternalLink(null)).toBe(false);
      expect(isExternalLink(undefined)).toBe(false);
    });
  });

  describe('getBaseUrl', () => {
    test('should return the base URL for a valid URL', () => {
      expect(getBaseUrl('https://www.example.com/path/to/page.html?query=string#hash')).toBe('https://www.example.com');
      expect(getBaseUrl('http://localhost:8080/api/data')).toBe('http://localhost:8080');
      expect(getBaseUrl('ftp://ftp.example.org/file.txt')).toBe('ftp://ftp.example.org');
    });

    test('should return an empty string for an invalid URL', () => {
      expect(getBaseUrl('invalid-url')).toBe('');
      expect(getBaseUrl(null)).toBe('');
      expect(getBaseUrl(undefined)).toBe('');
    });
  });
});
