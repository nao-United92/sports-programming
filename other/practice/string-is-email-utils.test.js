const isEmail = require('./string-is-email-utils');

describe('isEmail', () => {
  test('should return true for valid email addresses', () => {
    expect(isEmail('test@example.com')).toBe(true);
    expect(isEmail('john.doe@sub.domain.co.uk')).toBe(true);
    expect(isEmail('firstname.lastname@domain.com')).toBe(true);
    expect(isEmail('email@domain.org')).toBe(true);
    expect(isEmail('email@domain.net')).toBe(true);
    expect(isEmail('email@domain.io')).toBe(true);
    expect(isEmail('email123@domain.com')).toBe(true);
    expect(isEmail('em.ail@domain.com')).toBe(true);
    expect(isEmail('em-ail@domain.com')).toBe(true);
  });

  test('should return false for invalid email addresses', () => {
    // Missing @
    expect(isEmail('testexample.com')).toBe(false);
    // Missing domain part
    expect(isEmail('test@.com')).toBe(false);
    // Missing top-level domain
    expect(isEmail('test@example')).toBe(false);
    // Invalid characters
    expect(isEmail('test@ex ample.com')).toBe(false);
    expect(isEmail('test@exa_mple.com')).toBe(false); // Underscore in domain is generally invalid
    // Leading/trailing spaces
    expect(isEmail(' test@example.com')).toBe(false);
    expect(isEmail('test@example.com ')).toBe(false);
    // Multiple @
    expect(isEmail('test@@example.com')).toBe(false);
    // Empty string
    expect(isEmail('')).toBe(false);
    // Just @
    expect(isEmail('@')).toBe(false);
    // Just domain
    expect(isEmail('example.com')).toBe(false);
  });

  test('should return false for non-string inputs', () => {
    expect(isEmail(123)).toBe(false);
    expect(isEmail(null)).toBe(false);
    expect(isEmail(undefined)).toBe(false);
    expect(isEmail({})).toBe(false);
    expect(isEmail([])).toBe(false);
    expect(isEmail(true)).toBe(false);
  });
});
