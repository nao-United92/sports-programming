import { generateRandomString } from './random-string-generator';

describe('generateRandomString', () => {
  it('should generate a random string of the specified length', () => {
    const length = 10;
    const randomString = generateRandomString(length);
    expect(randomString.length).toBe(length);
  });

  it('should generate a different string each time', () => {
    const randomString1 = generateRandomString(10);
    const randomString2 = generateRandomString(10);
    expect(randomString1).not.toBe(randomString2);
  });

  it('should generate an empty string for length 0', () => {
    const randomString = generateRandomString(0);
    expect(randomString).toBe('');
  });

  it('should only contain allowed characters', () => {
    const randomString = generateRandomString(50);
    const allowedChars = /^[A-Za-z0-9]+$/;
    expect(allowedChars.test(randomString)).toBe(true);
  });
});
