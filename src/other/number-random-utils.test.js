import { random } from './number-random-utils.js';

describe('random', () => {
  test('should generate a random integer within the specified range', () => {
    const min = 1;
    const max = 10;
    for (let i = 0; i < 100; i++) {
      const randomNumber = random(min, max);
      expect(randomNumber).toBeGreaterThanOrEqual(min);
      expect(randomNumber).toBeLessThanOrEqual(max);
      expect(Number.isInteger(randomNumber)).toBe(true);
    }
  });

  test('should generate a random floating-point number within the specified range', () => {
    const min = 1.5;
    const max = 10.5;
    for (let i = 0; i < 100; i++) {
      const randomNumber = random(min, max, true);
      expect(randomNumber).toBeGreaterThanOrEqual(min);
      expect(randomNumber).toBeLessThanOrEqual(max);
      expect(Number.isInteger(randomNumber)).toBe(false);
    }
  });

  test('should handle cases where lower is greater than upper', () => {
    const min = 10;
    const max = 1;
    for (let i = 0; i < 100; i++) {
      const randomNumber = random(min, max);
      expect(randomNumber).toBeGreaterThanOrEqual(1);
      expect(randomNumber).toBeLessThanOrEqual(10);
      expect(Number.isInteger(randomNumber)).toBe(true);
    }
  });

  test('should handle single argument (upper bound only)', () => {
    const max = 5;
    for (let i = 0; i < 100; i++) {
      const randomNumber = random(max);
      expect(randomNumber).toBeGreaterThanOrEqual(0);
      expect(randomNumber).toBeLessThanOrEqual(max);
      expect(Number.isInteger(randomNumber)).toBe(true);
    }
  });

  test('should handle no arguments (0 to 1 floating)', () => {
    for (let i = 0; i < 100; i++) {
      const randomNumber = random();
      expect(randomNumber).toBeGreaterThanOrEqual(0);
      expect(randomNumber).toBeLessThanOrEqual(1);
      expect(Number.isInteger(randomNumber)).toBe(false);
    }
  });
});
