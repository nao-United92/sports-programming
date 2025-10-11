import { isURL } from './is-url-utils.js';

describe('isURL', () => {
  test('should return true for a valid URL', () => {
    expect(isURL('https://www.example.com')).toBe(true);
    expect(isURL('http://example.com')).toBe(true);
    expect(isURL('ftp://ftp.example.com')).toBe(true);
    expect(isURL('http://localhost:3000')).toBe(true);
  });

  test('should return false for an invalid URL', () => {
    expect(isURL('invalid-url')).toBe(false);
    expect(isURL('example.com')).toBe(false);
    expect(isURL('')).toBe(false);
    expect(isURL(null)).toBe(false);
    expect(isURL(undefined)).toBe(false);
  });
});
