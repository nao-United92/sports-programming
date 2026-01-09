import { range } from './number-range-utils.js';

describe('range', () => {
  test('should create a range of numbers', () => {
    expect(range(0, 5)).toEqual([0, 1, 2, 3, 4]);
  });

  test('should create a range with a specific step', () => {
    expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8]);
  });

  test('should create a descending range', () => {
    expect(range(5, 0, -1)).toEqual([5, 4, 3, 2, 1]);
  });

  test('should return an empty array for invalid range or step', () => {
    expect(range(5, 0, 1)).toEqual([]);
    expect(range(0, 5, -1)).toEqual([]);
  });

  test('should handle a step of 0', () => {
    expect(range(5, 10, 0)).toEqual([5]);
  });
});
