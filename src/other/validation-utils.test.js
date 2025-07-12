import { isValidEmail, isValidURL, isNumeric, isWithinRange } from './validation-utils';

describe('isValidEmail', () => {
  test('should return true for a valid email', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
  });

  test('should return false for an invalid email', () => {
    expect(isValidEmail('invalid-email')).toBe(false);
    expect(isValidEmail('test@.com')).toBe(false);
    expect(isValidEmail('test@example')).toBe(false);
    expect(isValidEmail(null)).toBe(false);
    expect(isValidEmail(undefined)).toBe(false);
    expect(isValidEmail(123)).toBe(false);
  });
});

describe('isValidURL', () => {
  test('should return true for a valid URL', () => {
    expect(isValidURL('http://example.com')).toBe(true);
    expect(isValidURL('https://www.example.com/path?query=1#hash')).toBe(true);
    expect(isValidURL('ftp://ftp.example.com')).toBe(true);
  });

  test('should return false for an invalid URL', () => {
    expect(isValidURL('invalid-url')).toBe(false);
    expect(isValidURL('example.com')).toBe(false);
    expect(isValidURL(null)).toBe(false);
    expect(isValidURL(undefined)).toBe(false);
    expect(isValidURL(123)).toBe(false);
  });
});

describe('isNumeric', () => {
  test('should return true for a number', () => {
    expect(isNumeric(123)).toBe(true);
    expect(isNumeric(0)).toBe(true);
    expect(isNumeric(-10)).toBe(true);
    expect(isNumeric(3.14)).toBe(true);
  });

  test('should return false for a non-number', () => {
    expect(isNumeric('123')).toBe(false);
    expect(isNumeric('abc')).toBe(false);
    expect(isNumeric(null)).toBe(false);
    expect(isNumeric(undefined)).toBe(false);
    expect(isNumeric(NaN)).toBe(false);
    expect(isNumeric([])).toBe(false);
    expect(isNumeric({})).toBe(false);
  });
});

describe('isWithinRange', () => {
  test('should return true if value is within range', () => {
    expect(isWithinRange(5, 1, 10)).toBe(true);
    expect(isWithinRange(1, 1, 10)).toBe(true);
    expect(isWithinRange(10, 1, 10)).toBe(true);
  });

  test('should return false if value is outside range', () => {
    expect(isWithinRange(0, 1, 10)).toBe(false);
    expect(isWithinRange(11, 1, 10)).toBe(false);
  });

  test('should return false if inputs are not numeric', () => {
    expect(isWithinRange('5', 1, 10)).toBe(false);
    expect(isWithinRange(5, '1', 10)).toBe(false);
    expect(isWithinRange(5, 1, '10')).toBe(false);
    expect(isWithinRange(null, 1, 10)).toBe(false);
    expect(isWithinRange(5, undefined, 10)).toBe(false);
  });
});