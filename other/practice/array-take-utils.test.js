import { take } from './array-take-utils.js';

describe('take', () => {
  test('should take the first n elements of an array', () => {
    expect(take([1, 2, 3], 2)).toEqual([1, 2]);
  });

  test('should take the first element by default', () => {
    expect(take([1, 2, 3])).toEqual([1]);
  });

  test('should return all elements if n is greater than length', () => {
    expect(take([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });

  test('should return an empty array if n is 0', () => {
    expect(take([1, 2, 3], 0)).toEqual([]);
  });

  test('should return an empty array for an empty array', () => {
    expect(take([], 2)).toEqual([]);
  });
});