import { randomInt } from './random-int';

describe('randomInt', () => {
  test('returns an integer within the range', () => {
    for (let i = 0; i < 100; i++) {
      const result = randomInt(1, 10);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(10);
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  test('handles range with one number', () => {
    expect(randomInt(5, 5)).toBe(5);
  });

  test('handles negative range', () => {
    const result = randomInt(-10, -5);
    expect(result).toBeGreaterThanOrEqual(-10);
    expect(result).toBeLessThanOrEqual(-5);
  });
});
