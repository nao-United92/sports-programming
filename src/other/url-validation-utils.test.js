import { isValidUrl } from './url-validation-utils.js';

describe('isValidUrl', () => {
  it('should return true for a valid URL', () => {
    expect(isValidUrl('http://example.com')).toBe(true);
    expect(isValidUrl('https://www.example.com/path?query=1#hash')).toBe(true);
    expect(isValidUrl('ftp://ftp.example.com')).toBe(true);
    expect(isValidUrl('http://localhost:3000')).toBe(true);
  });

  it('should return false for an invalid URL', () => {
    expect(isValidUrl('invalid-url')).toBe(false);
    expect(isValidUrl('example.com')).toBe(false); // Missing protocol
    expect(isValidUrl('http://')).toBe(false);
    expect(isValidUrl('http://.com')).toBe(false);
  });

  it('should return false for non-string inputs', () => {
    expect(isValidUrl(null)).toBe(false);
    expect(isValidUrl(undefined)).toBe(false);
    expect(isValidUrl(123)).toBe(false);
    expect(isValidUrl({})).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(isValidUrl('')).toBe(false);
  });
});
