const { generateRandomString } = require('./string-random-utils');

describe('generateRandomString', () => {
  it('should generate a string of the specified length', () => {
    const length = 10;
    const randomString = generateRandomString(length);
    expect(randomString.length).toBe(length);
  });

  it('should generate different strings on multiple calls', () => {
    const length = 15;
    const string1 = generateRandomString(length);
    const string2 = generateRandomString(length);
    expect(string1).not.toBe(string2);
  });

  it('should generate a string using only the provided characters', () => {
    const characters = 'abc';
    const length = 5;
    const randomString = generateRandomString(length, characters);
    expect(randomString.length).toBe(length);
    for (const char of randomString) {
      expect(characters).toContain(char);
    }
  });

  it('should return an empty string for a length of 0', () => {
    const randomString = generateRandomString(0);
    expect(randomString).toBe('');
  });

  it('should handle large lengths without error', () => {
    const length = 1000;
    const randomString = generateRandomString(length);
    expect(randomString.length).toBe(length);
  });

  it('should use default characters if none are provided', () => {
    const length = 5;
    const randomString = generateRandomString(length);
    const defaultChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (const char of randomString) {
      expect(defaultChars).toContain(char);
    }
  });
});
