const { isURL } = require('./string-is-url-utils.js');

describe('isURL', () => {
  it('should return true for valid URLs', () => {
    expect(isURL('http://example.com')).toBe(true);
    expect(isURL('https://www.example.com/path/to/page?query=string#hash')).toBe(true);
    expect(isURL('ftp://ftp.example.com')).toBe(true);
    expect(isURL('http://localhost:3000')).toBe(true);
    expect(isURL('http://192.168.1.1')).toBe(true);
    expect(isURL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash')).toBe(true);
  });

  it('should return false for invalid URLs', () => {
    expect(isURL('not a url')).toBe(false);
    expect(isURL('example.com')).toBe(false); // Missing protocol
    expect(isURL('http://')).toBe(false); // Missing host
    expect(isURL('http://.com')).toBe(false);
    expect(isURL('http://example')).toBe(false); // Not a valid TLD
    expect(isURL('ftp:/example.com')).toBe(false); // Malformed protocol
  });

  it('should return false for empty string or non-string input', () => {
    expect(isURL('')).toBe(false);
    expect(isURL(null)).toBe(false);
    expect(isURL(undefined)).toBe(false);
    expect(isURL(123)).toBe(false);
    expect(isURL({})).toBe(false);
  });

  it('should handle URLs with IP addresses', () => {
    expect(isURL('http://127.0.0.1')).toBe(true);
    expect(isURL('https://[::1]')).toBe(true); // IPv6 localhost
  });
});