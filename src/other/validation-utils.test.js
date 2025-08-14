import { isValidEmail } from './validation-utils';

describe('isValidEmail', () => {
  test('should return true for valid email addresses', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('john.doe@sub.example.co.uk')).toBe(true);
    expect(isValidEmail('user123@domain-name.net')).toBe(true);
    expect(isValidEmail('first.last@domain.info')).toBe(true);
    expect(isValidEmail('a@b.cd')).toBe(true);
  });

  test('should return false for invalid email addresses', () => {
    expect(isValidEmail('invalid-email')).toBe(false);
    expect(isValidEmail('invalid@')).toBe(false);
    expect(isValidEmail('@domain.com')).toBe(false);
    expect(isValidEmail('test@.com')).toBe(false);
    expect(isValidEmail('test@domain')).toBe(false);
    expect(isValidEmail('test@domain.c')).toBe(false);
    expect(isValidEmail('test@domain..com')).toBe(false);
    expect(isValidEmail('test@domain.com.')).toBe(false);
    expect(isValidEmail('test@domain,com')).toBe(false);
    expect(isValidEmail('test example.com')).toBe(false);
  });

  test('should return false for empty string or non-string input', () => {
    expect(isValidEmail('')).toBe(false);
    expect(isValidEmail(null)).toBe(false);
    expect(isValidEmail(undefined)).toBe(false);
    expect(isValidEmail(123)).toBe(false);
    expect(isValidEmail({})).toBe(false);
  });
});
