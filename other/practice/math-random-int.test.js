import { randomInt } from './math-random-int';

describe('randomInt', () => {
  test('returns an integer within the specified range', () => {
    const min = 1;
    const max = 10;
    for (let i = 0; i < 100; i++) {
      const result = randomInt(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThan(max);
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  test('works with negative numbers', () => {
    const min = -10;
    const max = -1;
    const result = randomInt(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThan(max);
  });
});
