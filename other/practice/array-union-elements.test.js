const arrayUnionElements = require('./array-union-elements');

describe('arrayUnionElements', () => {
  test('should return an empty array if no arrays are provided', () => {
    expect(arrayUnionElements()).toEqual([]);
  });

  test('should return unique elements from a single array', () => {
    const arr = [1, 2, 2, 3, 4, 4];
    expect(arrayUnionElements(arr)).toEqual([1, 2, 3, 4]);
  });

  test('should compute the union of two arrays of numbers', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 4, 5];
    expect(arrayUnionElements(arr1, arr2)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should compute the union of multiple arrays of numbers', () => {
    const arr1 = [1, 2];
    const arr2 = [2, 3, 4];
    const arr3 = [4, 5, 6];
    expect(arrayUnionElements(arr1, arr2, arr3)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should handle arrays with mixed data types', () => {
    const obj1 = {
      id: 1,
      value: 'a'
    };
    const obj2 = {
      id: 1,
      value: 'b'
    }; // A distinct object with same id, different value
    const obj3 = {
      id: 2
    };

    const arr1 = [1, 'a', null, obj1, undefined];
    const arr2 = ['a', 2, null, obj2];
    const arr3 = [obj3, undefined, 1];

    const union = arrayUnionElements(arr1, arr2, arr3);

    // Set treats objects by reference, so all distinct object instances will be present.
    // The order is not guaranteed for elements added to Set via Array.from().
    expect(union).toEqual(expect.arrayContaining([1, 'a', null, obj1, undefined, 2, obj2, obj3]));
    expect(union.length).toBe(8); // 1, 'a', null, obj1, undefined, 2, obj2, obj3
  });

  test('should handle arrays containing empty arrays (as distinct objects)', () => {
    const emptyArr1 = [];
    const emptyArr2 = [];
    const arr1 = [1, 2, emptyArr1];
    const arr2 = [3, emptyArr2];
    const union = arrayUnionElements(arr1, arr2);

    // Because emptyArr1 and emptyArr2 are distinct object instances, Set will include both.
    expect(union).toEqual(expect.arrayContaining([1, 2, emptyArr1, 3, emptyArr2]));
    expect(union.length).toBe(5); // 1, 2, emptyArr1, 3, emptyArr2
  });

  test('should throw TypeError if any argument is not an array', () => {
    expect(() => arrayUnionElements([1, 2], null)).toThrow(TypeError);
    expect(() => arrayUnionElements(undefined, [1, 2])).toThrow(TypeError);
    expect(() => arrayUnionElements([1, 2], 'string')).toThrow(TypeError);
    expect(() => arrayUnionElements(123, [1, 2])).toThrow(TypeError);
  });
});