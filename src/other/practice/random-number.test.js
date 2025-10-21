import { randomNumber } from './random-number';

describe('randomNumber', () => {
  it('should return a number within the specified range', () => {
    const min = 1;
    const max = 10;
    const result = randomNumber(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThan(max);
  });

  it('should handle negative numbers', () => {
    const min = -10;
    const max = -1;
    const result = randomNumber(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThan(max);
  });

  it('should handle a range that includes zero', () => {
    const min = -5;
    const max = 5;
    const result = randomNumber(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThan(max);
  });

  it('should return the same number if min and max are the same', () => {
    const min = 5;
    const max = 5;
    const result = randomNumber(min, max);
    expect(result).toBe(5);
  });
});
