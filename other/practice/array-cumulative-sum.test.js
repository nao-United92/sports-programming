import { cumulativeSum } from './array-cumulative-sum';

describe('cumulativeSum', () => {
  test('should return cumulative sum of numbers', () => {
    expect(cumulativeSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
  });

  test('should handle empty array', () => {
    expect(cumulativeSum([])).toEqual([]);
  });

  test('should handle negative numbers', () => {
    expect(cumulativeSum([1, -1, 2, -2])).toEqual([1, 0, 2, 0]);
  });
});
