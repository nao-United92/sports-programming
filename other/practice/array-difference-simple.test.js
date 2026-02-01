const arrayDifferenceSimple = require('./array-difference-simple');

describe('arrayDifferenceSimple', () => {
  test('should return elements from the first array that are not in the second', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [3, 4, 6];
    expect(arrayDifferenceSimple(arr1, arr2)).toEqual([1, 2, 5]);
  });

  test('should return an empty array if all elements of arr1 are in arr2', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3, 4, 5];
    expect(arrayDifferenceSimple(arr1, arr2)).toEqual([]);
  });

  test('should return the first array if the second array is empty', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [];
    expect(arrayDifferenceSimple(arr1, arr2)).toEqual([1, 2, 3]);
  });

  test('should return an empty array if the first array is empty', () => {
    const arr1 = [];
    const arr2 = [1, 2, 3];
    expect(arrayDifferenceSimple(arr1, arr2)).toEqual([]);
  });

  test('should handle arrays with duplicate elements in arr1', () => {
    const arr1 = [1, 2, 2, 3, 4, 5];
    const arr2 = [2, 4];
    expect(arrayDifferenceSimple(arr1, arr2)).toEqual([1, 3, 5]);
  });

  test('should handle arrays with mixed data types', () => {
    const obj1 = {
      id: 1
    };
    const obj2 = {
      id: 2
    };
    const arr1 = [1, 'a', null, obj1, undefined, obj2];
    const arr2 = ['a', null, obj1];
    expect(arrayDifferenceSimple(arr1, arr2)).toEqual([1, undefined, obj2]);
  });

  test('should return an empty array if both arrays are empty', () => {
    expect(arrayDifferenceSimple([], [])).toEqual([]);
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => arrayDifferenceSimple(null, [1, 2])).toThrow(TypeError);
    expect(() => arrayDifferenceSimple(undefined, [1, 2])).toThrow(TypeError);
    expect(() => arrayDifferenceSimple('string', [1, 2])).toThrow(TypeError);
    expect(() => arrayDifferenceSimple(123, [1, 2])).toThrow(TypeError);
  });

  test('should throw TypeError if second argument is not an array', () => {
    expect(() => arrayDifferenceSimple([1, 2], null)).toThrow(TypeError);
    expect(() => arrayDifferenceSimple([1, 2], undefined)).toThrow(TypeError);
    expect(() => arrayDifferenceSimple([1, 2], 'string')).toThrow(TypeError);
    expect(() => arrayDifferenceSimple([1, 2], 123)).toThrow(TypeError);
  });
});
