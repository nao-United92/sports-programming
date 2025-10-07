import { sum } from './array-sum-utils.js';

describe('sum', () => {
  test('should return the correct sum of an array of numbers', () => {
    expect(sum([1, 2, 3, 4, 5])).toBe(15);
  });

  test('should return 0 for an empty array', () => {
    expect(sum([])).toBe(0);
  });

  test('should work with negative numbers', () => {
    expect(sum([-1, -2, 3, 4, 5])).toBe(9);
  });
});
