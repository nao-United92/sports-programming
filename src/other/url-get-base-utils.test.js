import { getBaseUrl } from './url-get-base-utils.js';

describe('getBaseUrl', () => {
  it('should return the base URL for a simple URL', () => {
    const url = 'https://example.com/path/to/page';
    expect(getBaseUrl(url)).toBe('https://example.com');
  });

  it('should return the base URL including port if present', () => {
    const url = 'http://localhost:8080/api/data';
    expect(getBaseUrl(url)).toBe('http://localhost:8080');
  });

  it('should ignore query parameters and hash', () => {
    const url = 'https://www.google.com/search?q=test#result';
    expect(getBaseUrl(url)).toBe('https://www.google.com');
  });

  it('should handle URLs with different protocols', () => {
    expect(getBaseUrl('ftp://ftp.example.com/file.txt')).toBe('ftp://ftp.example.com');
    expect(getBaseUrl('http://sub.domain.org')).toBe('http://sub.domain.org');
  });

  it('should return the base URL for a URL that is already just a base URL', () => {
    expect(getBaseUrl('https://api.example.com')).toBe('https://api.example.com');
  });

  it('should throw an error for an invalid URL string', () => {
    const invalidUrl = 'not-a-valid-url';
    expect(() => getBaseUrl(invalidUrl)).toThrow('Invalid URL: not-a-valid-url');
  });

  it('should throw an error for an empty string', () => {
    const emptyUrl = '';
    expect(() => getBaseUrl(emptyUrl)).toThrow('Invalid URL: ');
  });
});
