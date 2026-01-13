
import { takeFirstNElements } from './array-take-first-n-elements-utils.js';

describe('takeFirstNElements', () => {
  const arr = [1, 2, 3, 4, 5];

  it('should return the first N elements of an array', () => {
    expect(takeFirstNElements(arr, 3)).toEqual([1, 2, 3]);
  });

  it('should return the entire array if N is greater than array length', () => {
    expect(takeFirstNElements(arr, 10)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return an empty array if N is 0', () => {
    expect(takeFirstNElements(arr, 0)).toEqual([]);
  });

  it('should return an empty array if N is negative', () => {
    expect(takeFirstNElements(arr, -2)).toEqual([]);
  });

  it('should return an empty array if the input array is empty', () => {
    expect(takeFirstNElements([], 3)).toEqual([]);
  });

  it('should not modify the original array', () => {
    const originalArr = [...arr];
    takeFirstNElements(arr, 2);
    expect(arr).toEqual(originalArr);
  });
});
