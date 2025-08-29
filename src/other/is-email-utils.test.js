
import { isEmail } from './is-email-utils.js';

describe('isEmail', () => {
  it('should return true for valid email addresses', () => {
    expect(isEmail('test@example.com')).toBe(true);
    expect(isEmail('john.doe@sub.domain.co.uk')).toBe(true);
    expect(isEmail('user123+tag@domain-name.net')).toBe(true);
    expect(isEmail('a@b.co')).toBe(true);
  });

  it('should return false for invalid email addresses', () => {
    expect(isEmail('invalid-email')).toBe(false);
    expect(isEmail('invalid@')).toBe(false);
    expect(isEmail('@domain.com')).toBe(false);
    expect(isEmail('user@.com')).toBe(false);
    expect(isEmail('user@domain')).toBe(false);
    expect(isEmail('user@domain..com')).toBe(false);
    expect(isEmail('user@domain.c')).toBe(false);
    expect(isEmail('user@domain.toolongtld')).toBe(false);
    expect(isEmail('user@domain,com')).toBe(false);
    expect(isEmail('user example.com')).toBe(false);
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
