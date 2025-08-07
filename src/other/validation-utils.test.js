import { isValidEmail } from './validation-utils.js';

describe('isValidEmail', () => {
  it('should return true for a valid email address', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('john.doe123@sub.domain.co.uk')).toBe(true);
    expect(isValidEmail('user+tag@domain.net')).toBe(true);
  });

  it('should return false for an invalid email address', () => {
    expect(isValidEmail('invalid-email')).toBe(false);
    expect(isValidEmail('test@.com')).toBe(false);
    expect(isValidEmail('@example.com')).toBe(false);
    expect(isValidEmail('test@example')).toBe(false);
    expect(isValidEmail('test@example.com.')).toBe(false);
    expect(isValidEmail('test@example..com')).toBe(false);
  });

  it('should return false for non-string inputs', () => {
    expect(isValidEmail(null)).toBe(false);
    expect(isValidEmail(undefined)).toBe(false);
    expect(isValidEmail(123)).toBe(false);
    expect(isValidEmail({})).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(isValidEmail('')).toBe(false);
  });
});