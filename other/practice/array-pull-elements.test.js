const arrayPullElements = require('./array-pull-elements');

describe('arrayPullElements', () => {
  test('should remove specified values from the array', () => {
    const arr = [1, 2, 3, 1, 4, 2, 5];
    arrayPullElements(arr, 1, 2);
    expect(arr).toEqual([3, 4, 5]);
  });

  test('should modify the array in place', () => {
    const arr = [1, 2, 3];
    const originalArr = arr;
    arrayPullElements(arr, 2);
    expect(arr).toBe(originalArr);
  });

  test('should handle cases where values to remove are not present', () => {
    const arr = [1, 2, 3];
    arrayPullElements(arr, 4, 5);
    expect(arr).toEqual([1, 2, 3]);
  });

  test('should return an empty array if all elements are removed', () => {
    const arr = [1, 2, 3];
    arrayPullElements(arr, 1, 2, 3);
    expect(arr).toEqual([]);
  });

  test('should handle empty input array', () => {
    const arr = [];
    arrayPullElements(arr, 1, 2);
    expect(arr).toEqual([]);
  });

  test('should handle no values to remove', () => {
    const arr = [1, 2, 3];
    arrayPullElements(arr);
    expect(arr).toEqual([1, 2, 3]);
  });

  test('should handle mixed data types', () => {
    const obj1 = {
      id: 1
    };
    const obj2 = {
      id: 2
    };
    const arr = [1, 'a', null, obj1, undefined, obj2, 'a'];
    arrayPullElements(arr, 'a', null, obj2);
    expect(arr).toEqual([1, obj1, undefined]);
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => arrayPullElements(null, 1)).toThrow(TypeError);
    expect(() => arrayPullElements(undefined, 1)).toThrow(TypeError);
    expect(() => arrayPullElements('string', 1)).toThrow(TypeError);
    expect(() => arrayPullElements(123, 1)).toThrow(TypeError);
    expect(() => arrayPullElements({}, 1)).toThrow(TypeError);
  });
});
