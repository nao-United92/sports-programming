import takeRight from './array-take-right-utils';

describe('takeRight', () => {
  test('should take the last n elements from an array', () => {
    expect(takeRight([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);
  });

  test('should take the last element by default', () => {
    expect(takeRight([1, 2, 3])).toEqual([3]);
  });

  test('should return an empty array if n is 0', () => {
    expect(takeRight([1, 2, 3], 0)).toEqual([]);
  });

  test('should return the whole array if n is larger than the array length', () => {
    expect(takeRight([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });

  test('should return an empty array for non-array inputs', () => {
    expect(takeRight(null, 2)).toEqual([]);
  });
});