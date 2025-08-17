import { take, drop } from './array-slice-utils.js';

describe('take', () => {
  test('should take the first element by default', () => {
    expect(take([1, 2, 3])).toEqual([1]);
  });

  test('should take the first n elements', () => {
    expect(take([1, 2, 3], 2)).toEqual([1, 2]);
  });

  test('should take all elements if n is greater than the array length', () => {
    expect(take([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });

  test('should return an empty array if n is 0', () => {
    expect(take([1, 2, 3], 0)).toEqual([]);
  });

  test('should return an empty array for non-array inputs', () => {
    expect(take(null)).toEqual([]);
    expect(take(undefined)).toEqual([]);
    expect(take({})).toEqual([]);
  });
});

describe('drop', () => {
  test('should drop the first element by default', () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
  });

  test('should drop the first n elements', () => {
    expect(drop([1, 2, 3], 2)).toEqual([3]);
  });

  test('should return an empty array if n is greater than the array length', () => {
    expect(drop([1, 2, 3], 5)).toEqual([]);
  });

  test('should return the full array if n is 0', () => {
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  test('should return an empty array for non-array inputs', () => {
    expect(drop(null)).toEqual([]);
    expect(drop(undefined)).toEqual([]);
    expect(drop({})).toEqual([]);
  });
});
