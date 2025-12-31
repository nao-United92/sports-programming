import { initialNElements } from './array-initial-n-elements-utils.js';

describe('initialNElements', () => {
  it('should return the first N elements of an array', () => {
    expect(initialNElements([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
  });

  it('should return the first element if N is not specified', () => {
    expect(initialNElements([1, 2, 3])).toEqual([1]);
  });

  it('should return the entire array if N is greater than or equal to the array length', () => {
    expect(initialNElements([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });

  it('should handle an empty array', () => {
    expect(initialNElements([], 2)).toEqual([]);
  });

  it('should return an empty array if N is 0 or negative', () => {
    expect(initialNElements([1, 2, 3], 0)).toEqual([]);
    expect(initialNElements([1, 2, 3], -1)).toEqual([]);
  });

  it('should not mutate the original array', () => {
    const arr = [1, 2, 3];
    const originalArr = [...arr];
    initialNElements(arr, 2);
    expect(arr).toEqual(originalArr);
  });
});