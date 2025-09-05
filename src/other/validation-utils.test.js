import { isValidEmail, isValidUrl } from './validation-utils.js';

describe('isValidEmail', () => {
  it('should return true for valid email addresses', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('user.name+tag@domain.co.uk')).toBe(true);
  });

  it('should return false for invalid email addresses', () => {
    expect(isValidEmail('plainaddress')).toBe(false);
    expect(isValidEmail('@missingusername.com')).toBe(false);
    expect(isValidEmail('username@.com')).toBe(false);
    expect(isValidEmail('username@domain.')).toBe(false);
    expect(isValidEmail(null)).toBe(false);
  });
});

describe('isValidUrl', () => {
  it('should return true for valid URLs', () => {
    expect(isValidUrl('http://example.com')).toBe(true);
    expect(isValidUrl('https://www.example.com/path?query=value#hash')).toBe(true);
  });

  it('should return false for invalid URLs', () => {
    expect(isValidUrl('not-a-url')).toBe(false);
    expect(isValidUrl('htp://invalid-protocol')).toBe(false);
    expect(isValidUrl('//example.com')).toBe(false); // Protocol relative URL, new URL() fails this
    expect(isValidUrl(null)).toBe(false);
  });
});