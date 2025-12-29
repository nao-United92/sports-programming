import { take } from './array-take-utils';

describe('take', () => {
  test('should take n elements from the beginning of an array', () => {
    expect(take([1, 2, 3], 2)).toEqual([1, 2]);
  });

  test('should take 1 element by default', () => {
    expect(take([1, 2, 3])).toEqual([1]);
  });

  test('should return all elements if n is greater than array length', () => {
    expect(take([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });

  test('should return an empty array if n is 0', () => {
    expect(take([1, 2, 3], 0)).toEqual([]);
  });

  test('should return an empty array if n is negative', () => {
    expect(take([1, 2, 3], -1)).toEqual([]);
  });

  test('should return an empty array for an empty input array', () => {
    expect(take([], 2)).toEqual([]);
  });

  test('should handle arrays with mixed data types', () => {
    expect(take([1, 'a', true, null], 3)).toEqual([1, 'a', true]);
  });
});