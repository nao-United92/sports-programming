
import { isURL } from './string-is-url-utils';

describe('isURL', () => {
  // Valid URLs
  test('should return true for valid HTTP URLs', () => {
    expect(isURL('http://example.com')).toBe(true);
    expect(isURL('http://www.example.com')).toBe(true);
    expect(isURL('http://example.com/path/to/page')).toBe(true);
    expect(isURL('http://example.com?query=string')).toBe(true);
    expect(isURL('http://example.com#fragment')).toBe(true);
    expect(isURL('http://example.com:8080')).toBe(true);
  });

  test('should return true for valid HTTPS URLs', () => {
    expect(isURL('https://example.com')).toBe(true);
    expect(isURL('https://www.example.com/path?query=string#fragment')).toBe(true);
  });

  test('should return true for valid URLs without protocol (assumes http/https)', () => {
    expect(isURL('example.com')).toBe(true);
    expect(isURL('www.example.com')).toBe(true);
    expect(isURL('sub.domain.com/path')).toBe(true);
  });

  test('should return true for URLs with IP addresses', () => {
    expect(isURL('http://192.168.1.1')).toBe(true);
    expect(isURL('https://127.0.0.1:3000')).toBe(true);
  });

  // Invalid URLs
  test('should return false for invalid URLs', () => {
    expect(isURL('example')).toBe(false);
    expect(isURL('http://.com')).toBe(false);
    expect(isURL('http://.example')).toBe(false);
    expect(isURL('http://example..com')).toBe(false);
    expect(isURL('ftp://example.com')).toBe(false);
    expect(isURL('not a url')).toBe(false);
  });

  test('should return false for empty string or non-string inputs', () => {
    expect(isURL('')).toBe(false);
    expect(isURL(null)).toBe(false);
    expect(isURL(undefined)).toBe(false);
    expect(isURL(123)).toBe(false);
    expect(isURL({})).toBe(false);
  });
});
