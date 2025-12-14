import takeRight from './array-take-right-utils';

describe('takeRight', () => {
  test('should take the last element by default', () => {
    expect(takeRight([1, 2, 3])).toEqual([3]);
  });

  test('should take the last n elements', () => {
    expect(takeRight([1, 2, 3, 4], 2)).toEqual([3, 4]);
  });

  test('should take all elements if n is larger than array size', () => {
    expect(takeRight([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });

  test('should take no elements if n is 0', () => {
    expect(takeRight([1, 2, 3], 0)).toEqual([]);
  });

  test('should handle an empty array', () => {
    expect(takeRight([])).toEqual([]);
  });
});
