import { isValidEmail } from './string-is-valid-email-utils.js';

describe('isValidEmail', () => {
  test('should return true for valid email addresses', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('john.doe@sub.domain.co.uk')).toBe(true);
    expect(isValidEmail('user123@mail.net')).toBe(true);
    expect(isValidEmail('first.last@domain.com')).toBe(true);
  });

  test('should return false for invalid email addresses', () => {
    expect(isValidEmail('invalid-email')).toBe(false);
    expect(isValidEmail('invalid@')).toBe(false);
    expect(isValidEmail('@domain.com')).toBe(false);
    expect(isValidEmail('user@domain')).toBe(false);
    expect(isValidEmail('user@.com')).toBe(false);
    expect(isValidEmail('user@domain..com')).toBe(false);
    expect(isValidEmail('user with space@domain.com')).toBe(false);
    expect(isValidEmail(null)).toBe(false);
    expect(isValidEmail(undefined)).toBe(false);
    expect(isValidEmail(123)).toBe(false);
    expect(isValidEmail('')).toBe(false);
  });
});
