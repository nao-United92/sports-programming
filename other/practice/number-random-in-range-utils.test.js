import randomInRange from './number-random-in-range-utils';

describe('randomInRange', () => {
  test('should return a number within the specified range', () => {
    const min = 5;
    const max = 10;
    const result = randomInRange(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThan(max);
  });

  test('should work with negative ranges', () => {
    const min = -10;
    const max = -5;
    const result = randomInRange(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThan(max);
  });

  test('should handle default range (0 to 1)', () => {
    const result = randomInRange();
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(1);
  });

  test('should return NaN for non-number inputs', () => {
    expect(randomInRange('a', 10)).toBeNaN();
    expect(randomInRange(1, 'b')).toBeNaN();
    expect(randomInRange(null, 10)).toBeNaN();
  });
});
