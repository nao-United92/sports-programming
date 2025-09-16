const { isEmail, isURL, isPhoneNumber } = require('./validation-utils.js');

describe('isEmail', () => {
  it('should return true for a valid email address', () => {
    expect(isEmail('test@example.com')).toBe(true);
    expect(isEmail('test.name@example.co.uk')).toBe(true);
  });

  it('should return false for an invalid email address', () => {
    expect(isEmail('test')).toBe(false);
    expect(isEmail('test@example')).toBe(false);
    expect(isEmail('@example.com')).toBe(false);
  });
});

describe('isURL', () => {
  it('should return true for a valid URL', () => {
    expect(isURL('https://www.example.com')).toBe(true);
    expect(isURL('http://example.com/path?query=1')).toBe(true);
  });

  it('should return false for an invalid URL', () => {
    expect(isURL('invalid-url')).toBe(false);
    expect(isURL('example.com')).toBe(false);
  });
});

describe('isPhoneNumber', () => {
  it('should return true for a valid phone number', () => {
    expect(isPhoneNumber('+15551234567')).toBe(true);
    expect(isPhoneNumber('5551234567')).toBe(true);
  });

  it('should return false for an invalid phone number', () => {
    expect(isPhoneNumber('123')).toBe(false);
    expect(isPhoneNumber('abc')).toBe(false);
    expect(isPhoneNumber('+1 (555) 123-4567')).toBe(false);
  });
});