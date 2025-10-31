const { randomString } = require('./string-random-utils');

describe('randomString', () => {
  it('should generate a string of the default length (10)', () => {
    const result = randomString();
    expect(typeof result).toBe('string');
    expect(result.length).toBe(10);
  });

  it('should generate a string of a specified length', () => {
    const length = 16;
    const result = randomString(length);
    expect(result.length).toBe(length);
  });

  it('should only contain characters from the default character set', () => {
    const defaultChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const result = randomString(100);
    for (const char of result) {
      expect(defaultChars.includes(char)).toBe(true);
    }
  });

  it('should generate a string using a custom character set', () => {
    const customChars = 'abc123';
    const result = randomString(50, customChars);
    expect(result.length).toBe(50);
    for (const char of result) {
      expect(customChars.includes(char)).toBe(true);
    }
  });

  it('should generate different strings on subsequent calls', () => {
    const result1 = randomString();
    const result2 = randomString();
    // While there's a minuscule chance of collision, for a 10-char string it's practically impossible.
    expect(result1).not.toBe(result2);
  });

  it('should return an empty string if length is 0', () => {
    const result = randomString(0);
    expect(result).toBe('');
  });

  it('should return an empty string for a negative length', () => {
    const result = randomString(-5);
    expect(result).toBe('');
  });

  it('should handle an empty character set by returning an empty string', () => {
    const result = randomString(10, '');
    expect(result).toBe('');
  });
});