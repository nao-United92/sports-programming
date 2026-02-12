import { union } from './array-union';

describe('union', () => {
  test('should combine two arrays with unique values', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 4, 5];
    expect(union(arr1, arr2)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle multiple arrays', () => {
    const arr1 = [1, 2];
    const arr2 = [2, 3];
    const arr3 = [3, 4];
    expect(union(arr1, arr2, arr3)).toEqual([1, 2, 3, 4]);
  });

  test('should return an empty array if no arrays are provided', () => {
    expect(union()).toEqual([]);
  });

  test('should handle empty arrays as input', () => {
    const arr1 = [1, 2];
    const arr2 = [];
    expect(union(arr1, arr2)).toEqual([1, 2]);
  });

  test('should handle arrays with mixed types', () => {
    const arr1 = [1, 'a', true];
    const arr2 = ['a', false, 1];
    expect(union(arr1, arr2)).toEqual([1, 'a', true, false]);
  });

  test('should handle arrays with objects (by reference)', () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const arr1 = [obj1, obj2];
    const arr2 = [obj1, { id: 3 }];
    expect(union(arr1, arr2)).toEqual([obj1, obj2, { id: 3 }]);
  });
});
