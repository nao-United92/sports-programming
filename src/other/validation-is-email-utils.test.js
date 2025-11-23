import { isEmail } from './validation-is-email-utils';

describe('isEmail', () => {
  it('should return true for valid email addresses', () => {
    expect(isEmail('test@example.com')).toBe(true);
    expect(isEmail('john.doe@sub.domain.co.uk')).toBe(true);
    expect(isEmail('user123@domain-name.net')).toBe(true);
  });

  it('should return false for invalid email addresses', () => {
    expect(isEmail('invalid-email')).toBe(false);
    expect(isEmail('test@.com')).toBe(false);
    expect(isEmail('@example.com')).toBe(false);
    expect(isEmail('test@example')).toBe(false);
    expect(isEmail('test example.com')).toBe(false);
    expect(isEmail('test@example..com')).toBe(false);
  });

  it('should return false for non-string inputs', () => {
    expect(isEmail(null)).toBe(false);
    expect(isEmail(undefined)).toBe(false);
    expect(isEmail(123)).toBe(false);
    expect(isEmail({})).toBe(false);
    expect(isEmail([])).toBe(false);
  });

  it('should return false for empty string', () => {
    expect(isEmail('')).toBe(false);
  });
});
