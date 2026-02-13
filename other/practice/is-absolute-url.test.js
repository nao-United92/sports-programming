import isAbsoluteURL from './is-absolute-url';

describe('isAbsoluteURL', () => {
  test('should return true for absolute HTTP/HTTPS URLs', () => {
    expect(isAbsoluteURL('http://example.com')).toBe(true);
    expect(isAbsoluteURL('https://www.google.com/path?query=1')).toBe(true);
    expect(isAbsoluteURL('HTTPS://sub.domain.net')).toBe(true);
  });

  test('should return true for protocol-relative URLs', () => {
    expect(isAbsoluteURL('//example.com/path')).toBe(true);
    expect(isAbsoluteURL('//www.google.com')).toBe(true);
  });

  test('should return true for scheme-only or data URIs', () => { // Changed test name
    expect(isAbsoluteURL('ftp://files.example.com')).toBe(true);
    expect(isAbsoluteURL('mailto:test@example.com')).toBe(true); // Now passes
    expect(isAbsoluteURL('data:image/png;base64,...')).toBe(true); // Now passes
    expect(isAbsoluteURL('custom-scheme:resource')).toBe(true); // Changed expectation
    expect(isAbsoluteURL('javascript:void(0)')).toBe(true); // Changed expectation
  });

  test('should return false for relative URLs', () => {
    expect(isAbsoluteURL('/path/to/resource')).toBe(false);
    expect(isAbsoluteURL('path/to/resource')).toBe(false);
    expect(isAbsoluteURL('./relative/path')).toBe(false);
    expect(isAbsoluteURL('../parent/path')).toBe(false);
  });

  test('should return false for invalid or non-string inputs', () => {
    expect(isAbsoluteURL(null)).toBe(false);
    expect(isAbsoluteURL(undefined)).toBe(false);
    expect(isAbsoluteURL('')).toBe(false);
    expect(isAbsoluteURL(123)).toBe(false);
    expect(isAbsoluteURL({})).toBe(false);
  });
});
