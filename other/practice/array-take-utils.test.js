import take from './array-take-utils';

describe('take', () => {
  test('should take the first element by default', () => {
    expect(take([1, 2, 3])).toEqual([1]);
  });

  test('should take the first n elements', () => {
    expect(take([1, 2, 3, 4], 2)).toEqual([1, 2]);
  });

  test('should take all elements if n is larger than array size', () => {
    expect(take([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });

  test('should take no elements if n is 0', () => {
    expect(take([1, 2, 3], 0)).toEqual([]);
  });

  test('should handle an empty array', () => {
    expect(take([])).toEqual([]);
  });
});
