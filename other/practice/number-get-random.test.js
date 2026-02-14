const { getRandomNumber } = require('./number-get-random');

describe('getRandomNumber', () => {
  test('should return a number within the specified range (inclusive)', () => {
    const min = 1;
    const max = 10;
    for (let i = 0; i < 1000; i++) {
      const randomNumber = getRandomNumber(min, max);
      expect(randomNumber).toBeGreaterThanOrEqual(min);
      expect(randomNumber).toBeLessThanOrEqual(max);
      expect(Number.isInteger(randomNumber)).toBe(true);
    }
  });

  test('should return the same number if min and max are equal', () => {
    const min = 5;
    const max = 5;
    for (let i = 0; i < 100; i++) {
      expect(getRandomNumber(min, max)).toBe(5);
    }
  });

  test('should throw TypeError if min or max are not numbers', () => {
    expect(() => getRandomNumber('1', 10)).toThrow(TypeError);
    expect(() => getRandomNumber(1, '10')).toThrow(TypeError);
    expect(() => getRandomNumber(null, 10)).toThrow(TypeError);
    expect(() => getRandomNumber(1, undefined)).toThrow(TypeError);
  });

  test('should throw Error if min is greater than max', () => {
    expect(() => getRandomNumber(10, 1)).toThrow(Error);
  });

  test('should exhibit some randomness (probabilistic test)', () => {
    const min = 1;
    const max = 2;
    const results = { 1: 0, 2: 0 };
    for (let i = 0; i < 1000; i++) {
      results[getRandomNumber(min, max)]++;
    }
    // Expect both numbers to appear a reasonable number of times, not just one.
    expect(results[1]).toBeGreaterThan(0);
    expect(results[2]).toBeGreaterThan(0);
    // Simple check that they are somewhat evenly distributed (e.g., within 20% of 500)
    expect(results[1]).toBeGreaterThan(300);
    expect(results[1]).toBeLessThan(700);
    expect(results[2]).toBeGreaterThan(300);
    expect(results[2]).toBeLessThan(700);
  });
});
