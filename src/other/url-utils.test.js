const { getURLParameters, isAbsoluteURL, combineURLs } = require('./url-utils.js');

describe('getURLParameters', () => {
  it('should get the parameters of a URL', () => {
    const url = 'https://www.google.com/search?q=javascript&oq=javascript';
    const params = getURLParameters(url);
    expect(params).toEqual({ q: 'javascript', oq: 'javascript' });
  });

  it('should handle a URL with no parameters', () => {
    const url = 'https://www.google.com';
    const params = getURLParameters(url);
    expect(params).toEqual({});
  });
});

describe('isAbsoluteURL', () => {
  it('should return true for an absolute URL', () => {
    expect(isAbsoluteURL('https://www.google.com')).toBe(true);
    expect(isAbsoluteURL('ftp://ftp.example.com')).toBe(true);
  });

  it('should return false for a relative URL', () => {
    expect(isAbsoluteURL('/path/to/file')).toBe(false);
    expect(isAbsoluteURL('path/to/file')).toBe(false);
  });
});

describe('combineURLs', () => {
  it('should combine a base URL and a relative URL', () => {
    expect(combineURLs('https://www.google.com', '/search')).toBe('https://www.google.com/search');
  });

  it('should handle trailing slashes in the base URL', () => {
    expect(combineURLs('https://www.google.com/', '/search')).toBe('https://www.google.com/search');
  });

  it('should handle leading slashes in the relative URL', () => {
    expect(combineURLs('https://www.google.com', 'search')).toBe('https://www.google.com/search');
  });

  it('should handle both trailing and leading slashes', () => {
    expect(combineURLs('https://www.google.com/', 'search')).toBe('https://www.google.com/search');
  });

  it('should return the base URL if the relative URL is not provided', () => {
    expect(combineURLs('https://www.google.com')).toBe('https://www.google.com');
  });
});
