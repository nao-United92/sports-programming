import { isValidEmail, isStrongPassword } from './string-validation-utils';

describe('isValidEmail', () => {
  test('should return true for a valid email address', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('john.doe123@sub.domain.co.uk')).toBe(true);
    expect(isValidEmail('user+tag@domain.net')).toBe(true);
  });

  test('should return false for an invalid email address', () => {
    expect(isValidEmail('invalid-email')).toBe(false);
    expect(isValidEmail('invalid@.com')).toBe(false);
    expect(isValidEmail('@domain.com')).toBe(false);
    expect(isValidEmail('user@domain')).toBe(false);
    expect(isValidEmail('user@domain.c')).toBe(false);
  });

  test('should return false for non-string inputs', () => {
    expect(isValidEmail(null)).toBe(false);
    expect(isValidEmail(undefined)).toBe(false);
    expect(isValidEmail(123)).toBe(false);
    expect(isValidEmail({})).toBe(false);
  });

  test('should return false for empty string', () => {
    expect(isValidEmail('')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('should return true for a strong password', () => {
    expect(isStrongPassword('Password123!')).toBe(true);
    expect(isStrongPassword('MyStrongP@ssw0rd')).toBe(true);
    expect(isStrongPassword('aB1!cDeF')).toBe(true);
  });

  test('should return false if password is too short', () => {
    expect(isStrongPassword('Pass1!')).toBe(false);
  });

  test('should return false if no uppercase letter', () => {
    expect(isStrongPassword('password123!')).toBe(false);
  });

  test('should return false if no lowercase letter', () => {
    expect(isStrongPassword('PASSWORD123!')).toBe(false);
  });

  test('should return false if no number', () => {
    expect(isStrongPassword('Password!!')).toBe(false);
  });

  test('should return false if no special character', () => {
    expect(isStrongPassword('Password123')).toBe(false);
  });

  test('should return false for non-string inputs', () => {
    expect(isStrongPassword(null)).toBe(false);
    expect(isStrongPassword(undefined)).toBe(false);
    expect(isStrongPassword(123)).toBe(false);
    expect(isStrongPassword({})).toBe(false);
  });

  test('should return false for empty string', () => {
    expect(isStrongPassword('')).toBe(false);
  });
});
