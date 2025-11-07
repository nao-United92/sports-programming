import { isValidEmail } from './validation-email-utils.js';

describe('isValidEmail', () => {
  it('should return true for valid email addresses', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('john.doe@sub.domain.co.uk')).toBe(true);
    expect(isValidEmail('user123@mail.net')).toBe(true);
    expect(isValidEmail('a@b.c')).toBe(true);
  });

  it('should return false for invalid email addresses', () => {
    expect(isValidEmail('invalid-email')).toBe(false); // No @
    expect(isValidEmail('invalid@')).toBe(false); // No domain
    expect(isValidEmail('@domain.com')).toBe(false); // No local part
    expect(isValidEmail('user@.com')).toBe(false); // Domain starts with dot
    expect(isValidEmail('user@domain')).toBe(false); // No top-level domain
    expect(isValidEmail('user@domain..com')).toBe(false); // Double dot in domain
    expect(isValidEmail('user@domain,com')).toBe(false); // Comma in domain
    expect(isValidEmail('user name@domain.com')).toBe(false); // Space in local part
  });

  it('should return false for empty string', () => {
    expect(isValidEmail('')).toBe(false);
  });

  it('should return false for null or undefined input', () => {
    expect(isValidEmail(null)).toBe(false);
    expect(isValidEmail(undefined)).toBe(false);
  });

  it('should return false for non-string input', () => {
    expect(isValidEmail(123)).toBe(false);
    expect(isValidEmail({})).toBe(false);
    expect(isValidEmail([])).toBe(false);
  });
});
