import { mathRandomInt } from './math-random-int-utils';

describe('mathRandomInt', () => {
  test('returns a number within the range', () => {
    const min = 1;
    const max = 10;
    const result = mathRandomInt(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  test('returns min when min equals max', () => {
    expect(mathRandomInt(5, 5)).toBe(5);
  });
});
