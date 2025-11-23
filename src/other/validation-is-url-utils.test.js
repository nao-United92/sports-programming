import { isURL } from './validation-is-url-utils';

describe('isURL', () => {
  it('should return true for valid URLs', () => {
    expect(isURL('http://example.com')).toBe(true);
    expect(isURL('https://www.example.com')).toBe(true);
    expect(isURL('http://example.com/path/to/page?query=string#hash')).toBe(true);
    expect(isURL('www.example.com')).toBe(true);
    expect(isURL('example.com')).toBe(true);
    expect(isURL('https://sub.domain.co.uk')).toBe(true);
  });

  it('should return false for invalid URLs', () => {
    expect(isURL('invalid-url')).toBe(false);
    expect(isURL('http://.com')).toBe(false);
    expect(isURL('http://example')).toBe(false);
    expect(isURL('ftp://example.com')).toBe(false); // Only http/https for this regex
    expect(isURL('example')).toBe(false);
    expect(isURL('http://example..com')).toBe(false);
  });

  it('should return false for non-string inputs', () => {
    expect(isURL(null)).toBe(false);
    expect(isURL(undefined)).toBe(false);
    expect(isURL(123)).toBe(false);
    expect(isURL({})).toBe(false);
    expect(isURL([])).toBe(false);
  });

  it('should return false for empty string', () => {
    expect(isURL('')).toBe(false);
  });
});
