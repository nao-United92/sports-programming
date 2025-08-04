import { generateRandomString } from './random-string-utils.js';

describe('generateRandomString', () => {
  test('should generate a random string of the specified length', () => {
    const randomString = generateRandomString(10);
    expect(randomString).toHaveLength(10);
  });

  test('should generate a different string each time', () => {
    const randomString1 = generateRandomString(10);
    const randomString2 = generateRandomString(10);
    expect(randomString1).not.toBe(randomString2);
  });
});
