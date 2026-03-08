import { weightedAverage } from './array-weighted-average';

describe('weightedAverage', () => {
  test('should calculate weighted average correctly', () => {
    expect(weightedAverage([10, 20, 30], [1, 2, 3])).toBe((10*1 + 20*2 + 30*3) / (1+2+3));
  });

  test('should return 0 for mismatching lengths', () => {
    expect(weightedAverage([1, 2], [1])).toBe(0);
  });

  test('should return 0 for empty arrays', () => {
    expect(weightedAverage([], [])).toBe(0);
  });
});
