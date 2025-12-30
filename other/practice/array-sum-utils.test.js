import sum from './array-sum-utils';

describe('sum', () => {
  test('should return the sum of an array of numbers', () => {
    expect(sum([1, 2, 3, 4, 5])).toBe(15);
  });

  test('should return 0 for an empty array', () => {
    expect(sum([])).toBe(0);
  });

  test('should ignore non-number elements', () => {
    expect(sum([1, '2', 3, null, 4, undefined, 5, {}])).toBe(13);
  });

  test('should handle negative numbers', () => {
    expect(sum([-1, -2, 3, 4, -5])).toBe(-1);
  });

  test('should return 0 if not an array', () => {
    expect(sum(null)).toBe(0);
    expect(sum(undefined)).toBe(0);
    expect(sum({})).toBe(0);
  });
});