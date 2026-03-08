import { weightedMedian } from './array-weighted-median';

describe('weightedMedian', () => {
  test('should calculate weighted median correctly', () => {
    expect(weightedMedian([1, 2, 3], [1, 2, 1])).toBe(2);
    expect(weightedMedian([10, 100, 1000], [0.1, 0.5, 0.4])).toBe(100);
  });

  test('should return 0 for empty array', () => {
    expect(weightedMedian([], [])).toBe(0);
  });
});
