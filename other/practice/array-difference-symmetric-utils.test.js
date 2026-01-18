// other/practice/array-difference-symmetric-utils.test.js

const arrayDifferenceSymmetric = require('./array-difference-symmetric-utils');

describe('arrayDifferenceSymmetric', () => {
  test('should return elements present in either array but not both (primitives)', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 4, 5];
    expect(arrayDifferenceSymmetric(arr1, arr2)).toEqual([1, 2, 4, 5]);
  });

  test('should return elements present in either array but not both (objects)', () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const obj3 = { id: 3 };
    const obj1_clone = { id: 1 };

    const arr1 = [obj1, obj2];
    const arr2 = [obj1_clone, obj3];
    expect(arrayDifferenceSymmetric(arr1, arr2)).toEqual([obj2, obj3]);
  });

  test('should handle nested arrays', () => {
    const nested1 = [1, [2, 3]];
    const nested2 = [4, 5];
    const nested1_clone = [1, [2, 3]];
    const nested3 = [6, 7];

    const arr1 = [nested1, nested2];
    const arr2 = [nested1_clone, nested3];
    expect(arrayDifferenceSymmetric(arr1, arr2)).toEqual([nested2, nested3]);
  });

  test('should return empty array if both arrays are identical', () => {
    const arr1 = [1, { a: 1 }];
    const arr2 = [1, { a: 1 }];
    expect(arrayDifferenceSymmetric(arr1, arr2)).toEqual([]);
  });

  test('should handle empty arrays', () => {
    expect(arrayDifferenceSymmetric([], [1, 2])).toEqual([1, 2]);
    expect(arrayDifferenceSymmetric([1, 2], [])).toEqual([1, 2]);
    expect(arrayDifferenceSymmetric([], [])).toEqual([]);
  });
});
