import take from './array-take-utils';

describe('take', () => {
  test('should take the first n elements from an array', () => {
    expect(take([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
  });

  test('should take the first element by default', () => {
    expect(take([1, 2, 3])).toEqual([1]);
  });

  test('should return an empty array if n is 0', () => {
    expect(take([1, 2, 3], 0)).toEqual([]);
  });

  test('should return the whole array if n is larger than the array length', () => {
    expect(take([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });

  test('should return an empty array for non-array inputs', () => {
    expect(take(null, 2)).toEqual([]);
  });
});
