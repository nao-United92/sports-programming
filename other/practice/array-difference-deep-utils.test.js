// other/practice/array-difference-deep-utils.test.js

const arrayDifferenceDeep = require('./array-difference-deep-utils');

describe('arrayDifferenceDeep', () => {
  test('should return elements in arr1 but not in arr2 with primitive values', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [3, 4, 5, 6];
    expect(arrayDifferenceDeep(arr1, arr2)).toEqual([1, 2]);
  });

  test('should return elements in arr1 but not in arr2 with object values (deep comparison)', () => {
    const obj1 = { id: 1, name: 'A' };
    const obj2 = { id: 2, name: 'B' };
    const obj3 = { id: 3, name: 'C' };
    const obj4 = { id: 1, name: 'A' }; // Same as obj1

    const arr1 = [obj1, obj2];
    const arr2 = [obj4, obj3];
    expect(arrayDifferenceDeep(arr1, arr2)).toEqual([obj2]);
  });

  test('should handle arrays with nested arrays', () => {
    const item1 = [1, [2, 3]];
    const item2 = [4, 5];
    const item3 = [1, [2, 3]]; // Same as item1
    const item4 = [6, 7];

    const arr1 = [item1, item2];
    const arr2 = [item3, item4];
    expect(arrayDifferenceDeep(arr1, arr2)).toEqual([item2]);
  });

  test('should return all elements of arr1 if no common elements', () => {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    expect(arrayDifferenceDeep(arr1, arr2)).toEqual([1, 2]);
  });

  test('should handle empty input arrays', () => {
    expect(arrayDifferenceDeep([], [1, 2])).toEqual([]);
    expect(arrayDifferenceDeep([1, 2], [])).toEqual([1, 2]);
    expect(arrayDifferenceDeep([], [])).toEqual([]);
  });

  test('should handle duplicate elements in arr1 correctly', () => {
    const objA = { value: 'a' };
    const arr1 = [1, objA, 2, objA, 3];
    const arr2 = [objA, 4];
    expect(arrayDifferenceDeep(arr1, arr2)).toEqual([1, 2, 3]);
  });
});
