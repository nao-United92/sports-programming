const { intersectionBy } = require('./array-intersection-by-utils');

describe('intersectionBy', () => {
  test('should return intersection of two arrays based on id property', () => {
    const arr1 = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];
    const arr2 = [{ id: 2, name: 'Robert' }, { id: 3, name: 'Charles' }, { id: 4, name: 'David' }];
    const result = intersectionBy(arr1, arr2, item => item.id);
    expect(result).toEqual([{ id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }]);
  });

  test('should return intersection of two arrays based on value (identity iteratee)', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [3, 4, 5, 6];
    const result = intersectionBy(arr1, arr2, item => item);
    expect(result).toEqual([3, 4]);
  });

  test('should handle empty first array', () => {
    const arr1 = [];
    const arr2 = [{ id: 1 }];
    const result = intersectionBy(arr1, arr2, item => item.id);
    expect(result).toEqual([]);
  });

  test('should handle empty second array', () => {
    const arr1 = [{ id: 1 }];
    const arr2 = [];
    const result = intersectionBy(arr1, arr2, item => item.id);
    expect(result).toEqual([]);
  });

  test('should handle both arrays being empty', () => {
    const arr1 = [];
    const arr2 = [];
    const result = intersectionBy(arr1, arr2, item => item);
    expect(result).toEqual([]);
  });

  test('should work with custom iteratee function', () => {
    const arr1 = ['apple', 'banana', 'apricot'];
    const arr2 = ['grape', 'orange', 'application']; // application's substring(0,3) is 'app'
    const result = intersectionBy(arr1, arr2, item => item.substring(0, 3));
    expect(result).toEqual(['apple']); // Only 'apple' (iteratee 'app') is present in both
  });

  test('should not include duplicates from the first array if iteratee values match', () => {
    const arr1 = [{ id: 1, name: 'A' }, { id: 1, name: 'B' }];
    const arr2 = [{ id: 1, name: 'C' }];
    const result = intersectionBy(arr1, arr2, item => item.id);
    expect(result).toEqual([{ id: 1, name: 'A' }, { id: 1, name: 'B' }]);
  });
});
