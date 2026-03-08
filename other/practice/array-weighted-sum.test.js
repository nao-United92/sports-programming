import { weightedSum } from './array-weighted-sum';

describe('weightedSum', () => {
  test('should calculate weighted sum correctly', () => {
    expect(weightedSum([1, 2, 3], [1, 0, 1])).toBe(4);
  });

  test('should return 0 for mismatched lengths', () => {
    expect(weightedSum([1, 2], [1])).toBe(0);
  });
});
