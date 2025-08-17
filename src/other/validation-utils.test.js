import { isEmail, isStrongPassword } from './validation-utils.js';

describe('isEmail', () => {
  test('should return true for a valid email address', () => {
    expect(isEmail('test@example.com')).toBe(true);
  });

  test('should return false for an invalid email address', () => {
    expect(isEmail('test@example')).toBe(false);
    expect(isEmail('testexample.com')).toBe(false);
    expect(isEmail('test@.com')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('should return true for a strong password', () => {
    expect(isStrongPassword('Password123!')).toBe(true);
  });

  test('should return false for a weak password', () => {
    expect(isStrongPassword('password')).toBe(false); // No uppercase, number, special char
    expect(isStrongPassword('Password')).toBe(false); // No number, special char
    expect(isStrongPassword('Password123')).toBe(false); // No special char
    expect(isStrongPassword('password123!')).toBe(false); // No uppercase
    expect(isStrongPassword('Pass1!')).toBe(false); // Too short
  });
});
