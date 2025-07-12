import { isEmptyString, isValidEmail, isValidUrl, isNumeric, isInRange } from './validation-utils.js';

describe('validation-utils', () => {
  it('should check if a string is empty', () => {
    expect(isEmptyString('')).toBe(true);
    expect(isEmptyString('   ')).toBe(true);
    expect(isEmptyString('hello')).toBe(false);
  });

  it('should validate an email', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('invalid-email')).toBe(false);
  });

  it('should validate a URL', () => {
    expect(isValidUrl('https://example.com')).toBe(true);
    expect(isValidUrl('invalid-url')).toBe(false);
  });

  it('should check if a value is numeric', () => {
    expect(isNumeric('123')).toBe(true);
    expect(isNumeric('123.45')).toBe(true);
    expect(isNumeric('hello')).toBe(false);
  });

  it('should check if a value is in a range', () => {
    expect(isInRange(5, 0, 10)).toBe(true);
    expect(isInRange(15, 0, 10)).toBe(false);
  });
});
