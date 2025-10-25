const { randomInRange, randomIntInRange } = require('./number-random-in-range-utils');

describe('randomInRange', () => {
  test('should return a number within the specified range', () => {
    const min = 1.5;
    const max = 5.5;
    for (let i = 0; i < 100; i++) {
      const result = randomInRange(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    }
  });

  test('should handle a range where min equals max', () => {
    expect(randomInRange(5, 5)).toBe(5);
  });

  test('should throw an error if min is greater than max', () => {
    expect(() => randomInRange(10, 1)).toThrow('min cannot be greater than max.');
  });

  test('should throw an error for non-numeric input', () => {
    expect(() => randomInRange('a', 5)).toThrow('Both min and max must be numbers.');
  });
});

describe('randomIntInRange', () => {
  test('should return an integer within the specified range', () => {
    const min = 1;
    const max = 10;
    for (let i = 0; i < 100; i++) {
      const result = randomIntInRange(min, max);
      expect(Number.isInteger(result)).toBe(true);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    }
  });

  test('should handle a range where min equals max', () => {
    expect(randomIntInRange(5, 5)).toBe(5);
  });

  test('should throw an error if min is greater than max', () => {
    expect(() => randomIntInRange(10, 1)).toThrow('min cannot be greater than max.');
  });

  test('should handle floating point boundaries correctly', () => {
    const min = 1.1;
    const max = 3.9;
    for (let i = 0; i < 100; i++) {
      const result = randomIntInRange(min, max);
      expect([2, 3].includes(result)).toBe(true);
    }
  });
});
