const isURL = require('./string-is-url-utils');

describe('isURL', () => {
  test('should return true for valid URLs', () => {
    expect(isURL('http://example.com')).toBe(true);
    expect(isURL('https://www.example.com/path?query=1#hash')).toBe(true);
    expect(isURL('ftp://ftp.example.com')).toBe(true);
    expect(isURL('http://localhost:3000')).toBe(true);
    expect(isURL('http://192.168.1.1/resource')).toBe(true);
    expect(isURL('https://user:pass@host:8080/path/to/file?query=string#hash')).toBe(true);
    expect(isURL('mailto:test@example.com')).toBe(true); // mailto is a valid URL scheme
    expect(isURL('geo:48.19863,11.37239;crs=wgs84;u=35')).toBe(true); // geo scheme
  });

  test('should return false for invalid URLs', () => {
    expect(isURL('example.com')).toBe(false); // Missing scheme
    expect(isURL('www.example.com')).toBe(false); // Missing scheme
    expect(isURL('ftp.example.com')).toBe(false); // Missing scheme
    expect(isURL('not a url')).toBe(false);
    expect(isURL('')).toBe(false);
    expect(isURL(' ')).toBe(false);
  });

  test('should return false for non-string inputs', () => {
    expect(isURL(null)).toBe(false);
    expect(isURL(undefined)).toBe(false);
    expect(isURL(123)).toBe(false);
    expect(isURL({})).toBe(false);
    expect(isURL([])).toBe(false);
  });
});