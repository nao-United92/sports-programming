
import { takeLastNElements } from './array-take-last-n-elements-utils.js';

describe('takeLastNElements', () => {
  const arr = [1, 2, 3, 4, 5];

  it('should return the last N elements of an array', () => {
    expect(takeLastNElements(arr, 3)).toEqual([3, 4, 5]);
  });

  it('should return the entire array if N is greater than array length', () => {
    expect(takeLastNElements(arr, 10)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return an empty array if N is 0', () => {
    expect(takeLastNElements(arr, 0)).toEqual([]);
  });

  it('should return an empty array if N is negative', () => {
    expect(takeLastNElements(arr, -2)).toEqual([]);
  });

  it('should return an empty array if the input array is empty', () => {
    expect(takeLastNElements([], 3)).toEqual([]);
  });

  it('should not modify the original array', () => {
    const originalArr = [...arr];
    takeLastNElements(arr, 2);
    expect(arr).toEqual(originalArr);
  });
});
