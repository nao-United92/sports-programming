import { lastNElements } from './array-last-n-elements-utils.js';

describe('lastNElements', () => {
  it('should return the last N elements of an array', () => {
    expect(lastNElements([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);
  });

  it('should return the last element if N is not specified', () => {
    expect(lastNElements([1, 2, 3])).toEqual([3]);
  });

  it('should return the entire array if N is greater than or equal to the array length', () => {
    expect(lastNElements([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });

  it('should handle an empty array', () => {
    expect(lastNElements([], 2)).toEqual([]);
  });

  it('should return an empty array if N is 0 or negative', () => {
    expect(lastNElements([1, 2, 3], 0)).toEqual([]);
    expect(lastNElements([1, 2, 3], -1)).toEqual([]);
  });

  it('should not mutate the original array', () => {
    const arr = [1, 2, 3];
    const originalArr = [...arr];
    lastNElements(arr, 2);
    expect(arr).toEqual(originalArr);
  });
});