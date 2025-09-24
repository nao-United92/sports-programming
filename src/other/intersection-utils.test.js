import { intersection } from './intersection-utils';

describe('intersection', () => {
  it('should return the intersection of two arrays', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [3, 4, 5, 6];
    const result = intersection(arr1, arr2);
    expect(result).toEqual([3, 4]);
  });

  it('should handle multiple arrays', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [2, 3, 4, 5];
    const arr3 = [3, 4, 5, 6];
    const result = intersection(arr1, arr2, arr3);
    expect(result).toEqual([3, 4]);
  });

  it('should return an empty array if there is no intersection', () => {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const result = intersection(arr1, arr2);
    expect(result).toEqual([]);
  });

  it('should handle empty arrays', () => {
    const arr1 = [1, 2];
    const arr2 = [];
    const result = intersection(arr1, arr2);
    expect(result).toEqual([]);
  });

  it('should handle arrays with different data types', () => {
    const arr1 = [1, 'a', 2, 'b'];
    const arr2 = [2, 'c', 'a'];
    const result = intersection(arr1, arr2);
    expect(result).toEqual(['a', 2]);
  });
});