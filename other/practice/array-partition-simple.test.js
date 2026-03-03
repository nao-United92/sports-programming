import { partition } from './array-partition-simple';

describe('partition', () => {
  test('should partition an array of numbers into even and odd', () => {
    const isEven = (n) => n % 2 === 0;
    const result = partition([1, 2, 3, 4, 5], isEven);
    expect(result).toEqual([[2, 4], [1, 3, 5]]);
  });

  test('should return two empty arrays for an empty input', () => {
    const result = partition([], (x) => x > 0);
    expect(result).toEqual([[], []]);
  });
});
