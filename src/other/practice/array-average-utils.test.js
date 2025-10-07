import { average } from './array-average-utils.js';

describe('average', () => {
  test('should return the correct average of an array of numbers', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
  });

  test('should return 0 for an empty array', () => {
    expect(average([])).toBe(0);
  });

  test('should work with negative numbers', () => {
    expect(average([-1, -2, 3, 4, 5])).toBe(1.8);
  });
});
