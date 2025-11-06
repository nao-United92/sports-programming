import { isValidUrl } from './string-is-valid-url-utils.js';

describe('isValidUrl', () => {
  test('should return true for valid URLs', () => {
    expect(isValidUrl('http://example.com')).toBe(true);
    expect(isValidUrl('https://www.example.com')).toBe(true);
    expect(isValidUrl('http://example.com/path/to/page')).toBe(true);
    expect(isValidUrl('https://example.com?query=string')).toBe(true);
    expect(isValidUrl('https://example.com#hash')).toBe(true);
    expect(isValidUrl('http://localhost:3000')).toBe(true);
    expect(isValidUrl('www.example.com')).toBe(true);
    expect(isValidUrl('example.com')).toBe(true);
  });

  test('should return false for invalid URLs', () => {
    expect(isValidUrl('invalid-url')).toBe(false);
    expect(isValidUrl('http://')).toBe(false);
    expect(isValidUrl('ftp://example.com')).toBe(false); // Only http/https
    expect(isValidUrl('example')).toBe(false);
    expect(isValidUrl(null)).toBe(false);
    expect(isValidUrl(undefined)).toBe(false);
    expect(isValidUrl(123)).toBe(false);
    expect(isValidUrl('')).toBe(false);
  });
});
