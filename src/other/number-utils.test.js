import { random, randomInt } from './number-utils.js';

describe('random', () => {
  it('should generate a number within the specified range', () => {
    const result = random(1, 5);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThan(5);
  });

  it('should work with default values (0 to 1)', () => {
    const result = random();
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(1);
  });
});

describe('randomInt', () => {
  it('should generate an integer within the specified range (inclusive)', () => {
    const result = randomInt(1, 10);
    expect(Number.isInteger(result)).toBe(true);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
  });

  it('should handle a small range', () => {
    const result = randomInt(5, 5);
    expect(result).toBe(5);
  });

  it('should generate numbers across the full range', () => {
    const results = new Set();
    for (let i = 0; i < 100; i++) {
      results.add(randomInt(1, 3));
    }
    expect(results.has(1)).toBe(true);
    expect(results.has(2)).toBe(true);
    expect(results.has(3)).toBe(true);
  });
});
