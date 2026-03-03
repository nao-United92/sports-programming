import { take } from './array-take-simple';

describe('take', () => {
  test('should take 1 element by default', () => {
    expect(take([1, 2, 3])).toEqual([1]);
  });

  test('should take n elements', () => {
    expect(take([1, 2, 3], 2)).toEqual([1, 2]);
  });

  test('should return an empty array if n is 0', () => {
    expect(take([1, 2, 3], 0)).toEqual([]);
  });

  test('should return the whole array if n > length', () => {
    expect(take([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });

  test('should handle negative n', () => {
    expect(take([1, 2, 3], -1)).toEqual([]);
  });
});
