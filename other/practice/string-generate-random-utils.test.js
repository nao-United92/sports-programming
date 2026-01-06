const generateRandomString = require('./string-generate-random-utils');

describe('generateRandomString', () => {
  test('should generate a string of the specified length', () => {
    const length = 10;
    const randomString = generateRandomString(length);
    expect(randomString.length).toBe(length);
  });

  test('should generate a string containing only alphanumeric characters', () => {
    const length = 20;
    const randomString = generateRandomString(length);
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    expect(alphanumericRegex.test(randomString)).toBe(true);
  });

  test('should generate different strings on successive calls', () => {
    const length = 15;
    const string1 = generateRandomString(length);
    const string2 = generateRandomString(length);
    expect(string1).not.toBe(string2);
  });

  test('should return an empty string if length is 0', () => {
    const randomString = generateRandomString(0);
    expect(randomString).toBe('');
  });

  test('should throw an error for negative length', () => {
    expect(() => generateRandomString(-5)).toThrow('Length must be a non-negative number.');
  });

  test('should throw an error for non-numeric length', () => {
    expect(() => generateRandomString('abc')).toThrow('Length must be a non-negative number.');
    expect(() => generateRandomString(null)).toThrow('Length must be a non-negative number.');
    expect(() => generateRandomString(undefined)).toThrow('Length must be a non-negative number.');
  });
});
