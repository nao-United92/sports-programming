// other/practice/array-intersection-deep-utils.test.js

const arrayIntersectionDeep = require('./array-intersection-deep-utils');

describe('arrayIntersectionDeep', () => {
  test('should return common elements from two arrays with primitive values', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [3, 4, 5, 6];
    expect(arrayIntersectionDeep(arr1, arr2)).toEqual([3, 4]);
  });

  test('should return common elements from two arrays with object values (deep comparison)', () => {
    const obj1 = { id: 1, name: 'A' };
    const obj2 = { id: 2, name: 'B' };
    const obj3 = { id: 3, name: 'C' };
    const obj4 = { id: 1, name: 'A' }; // Same as obj1

    const arr1 = [obj1, obj2];
    const arr2 = [obj4, obj3];
    expect(arrayIntersectionDeep(arr1, arr2)).toEqual([obj1]);
  });

  test('should handle arrays with nested arrays', () => {
    const item1 = [1, [2, 3]];
    const item2 = [4, 5];
    const item3 = [1, [2, 3]]; // Same as item1
    const item4 = [6, 7];

    const arr1 = [item1, item2];
    const arr2 = [item3, item4];
    expect(arrayIntersectionDeep(arr1, arr2)).toEqual([item1]);
  });

  test('should return an empty array if no common elements', () => {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    expect(arrayIntersectionDeep(arr1, arr2)).toEqual([]);
  });

  test('should handle empty input arrays', () => {
    expect(arrayIntersectionDeep([], [1, 2])).toEqual([]);
    expect(arrayIntersectionDeep([1, 2], [])).toEqual([]);
    expect(arrayIntersectionDeep([], [])).toEqual([]);
  });

  test('should handle duplicate common elements correctly', () => {
    const objA = { value: 'a' };
    const arr1 = [1, objA, 2, objA];
    const arr2 = [objA, 2, 3];
    expect(arrayIntersectionDeep(arr1, arr2)).toEqual([objA, 2]);
  });
});
