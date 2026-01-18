// other/practice/array-union-deep-utils.test.js

const arrayUnionDeep = require('./array-union-deep-utils');

describe('arrayUnionDeep', () => {
  test('should return the union of two arrays with primitive values', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 4, 5];
    expect(arrayUnionDeep(arr1, arr2)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return the union of two arrays with object values (deep comparison)', () => {
    const obj1 = { id: 1, name: 'A' };
    const obj2 = { id: 2, name: 'B' };
    const obj3 = { id: 3, name: 'C' };
    const obj4 = { id: 1, name: 'A' }; // Same as obj1

    const arr1 = [obj1, obj2];
    const arr2 = [obj4, obj3];
    expect(arrayUnionDeep(arr1, arr2)).toEqual([obj1, obj2, obj3]);
  });

  test('should handle arrays with nested arrays', () => {
    const item1 = [1, [2, 3]];
    const item2 = [4, 5];
    const item3 = [1, [2, 3]]; // Same as item1
    const item4 = [6, 7];

    const arr1 = [item1, item2];
    const arr2 = [item3, item4];
    expect(arrayUnionDeep(arr1, arr2)).toEqual([item1, item2, item4]);
  });

  test('should handle empty input arrays', () => {
    expect(arrayUnionDeep([], [1, 2])).toEqual([1, 2]);
    expect(arrayUnionDeep([1, 2], [])).toEqual([1, 2]);
    expect(arrayUnionDeep([], [])).toEqual([]);
  });

  test('should handle duplicate elements within the same array correctly', () => {
    const objA = { value: 'a' };
    const arr1 = [1, objA, 2, objA];
    const arr2 = [objA, 3];
    expect(arrayUnionDeep(arr1, arr2)).toEqual([1, objA, 2, 3]);
  });
});
