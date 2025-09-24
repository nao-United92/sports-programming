import { difference } from './difference-utils';

describe('difference', () => {
  it('should return the difference between two arrays', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [3, 5];
    const result = difference(arr1, arr2);
    expect(result).toEqual([1, 2, 4]);
  });

  it('should handle multiple arrays to compare against', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [3];
    const arr3 = [5];
    const result = difference(arr1, arr2, arr3);
    expect(result).toEqual([1, 2, 4]);
  });

  it('should return the original array if no values are provided', () => {
    const arr1 = [1, 2, 3];
    const result = difference(arr1);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should handle empty arrays', () => {
    const arr1 = [];
    const arr2 = [1, 2];
    const result = difference(arr1, arr2);
    expect(result).toEqual([]);
  });

  it('should handle arrays with different data types', () => {
    const arr1 = [1, 'a', 2, 'b'];
    const arr2 = [2, 'c'];
    const result = difference(arr1, arr2);
    expect(result).toEqual([1, 'a', 'b']);
  });
});