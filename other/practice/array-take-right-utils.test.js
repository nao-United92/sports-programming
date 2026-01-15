import { takeRight } from './array-take-right-utils.js';

describe('takeRight', () => {
  test('should take the last n elements of an array', () => {
    expect(takeRight([1, 2, 3], 2)).toEqual([2, 3]);
  });

  test('should take the last element by default', () => {
    expect(takeRight([1, 2, 3])).toEqual([3]);
  });

  test('should return all elements if n is greater than length', () => {
    expect(takeRight([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });

  test('should return an empty array if n is 0', () => {
    expect(takeRight([1, 2, 3], 0)).toEqual([]);
  });

  test('should return an empty array for an empty array', () => {
    expect(takeRight([], 2)).toEqual([]);
  });
});
