import { geometricMean } from './array-geometric-mean';

describe('geometricMean', () => {
  test('should calculate geometric mean correctly', () => {
    expect(geometricMean([2, 8])).toBe(4);
    expect(geometricMean([4, 1, 1/32])).toBeCloseTo(0.5);
  });

  test('should return 0 for empty array', () => {
    expect(geometricMean([])).toBe(0);
  });
});
