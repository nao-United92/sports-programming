const { generateRandomString } = require('./random-string-utils');

describe('generateRandomString', () => {
  test('should generate a string of the specified length', () => {
    const length = 10;
    const randomString = generateRandomString(length);
    expect(randomString.length).toBe(length);
  });

  test('should generate a string containing only specified characters', () => {
    const characters = 'abc';
    const randomString = generateRandomString(5, characters);
    for (const char of randomString) {
      expect(characters).toContain(char);
    }
  });

  test('should generate an empty string if length is 0', () => {
    const randomString = generateRandomString(0);
    expect(randomString).toBe('');
  });

  test('should generate different strings on multiple calls', () => {
    const string1 = generateRandomString(10);
    const string2 = generateRandomString(10);
    expect(string1).not.toBe(string2);
  });

  test('should use default characters if none are provided', () => {
    const randomString = generateRandomString(5);
    const defaultCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (const char of randomString) {
      expect(defaultCharacters).toContain(char);
    }
  });
});