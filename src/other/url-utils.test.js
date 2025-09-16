const { getURLParameters, isAbsoluteURL } = require('./url-utils.js');

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
