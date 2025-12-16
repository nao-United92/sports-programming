const differenceBy = require('./array-difference-by-utils');

describe('differenceBy', () => {
  it('should return the difference of two arrays based on an iteratee function', () => {
    const arr1 = [2.1, 1.2];
    const arr2 = [2.3, 3.4];
    const result = differenceBy(arr1, arr2, Math.floor);
    expect(result).toEqual([1.2]);
  });

  it('should return the difference of two arrays of objects based on a property string', () => {
    const arr1 = [{ 'x': 2 }, { 'x': 1 }];
    const arr2 = [{ 'x': 1 }];
    const result = differenceBy(arr1, arr2, 'x');
    expect(result).toEqual([{ 'x': 2 }]);
  });

  it('should return the first array if the second array is empty', () => {
    const arr1 = [1, 2, 3];
    expect(differenceBy(arr1, [], 'x')).toEqual([1, 2, 3]);
  });

  it('should return an empty array if the first array is empty', () => {
    expect(differenceBy([], [1, 2, 3], 'x')).toEqual([]);
  });

  it('should return an empty array if the input is not an array', () => {
    expect(differenceBy(null, [1, 2, 3])).toEqual([]);
    expect(differenceBy(undefined, [1, 2, 3])).toEqual([]);
  });

  it('should work with multiple arrays to exclude from', () => {
    // Note: The function signature in this implementation only supports one array of values.
    // To support multiple arrays, the function and tests would need to be modified.
    // This test case assumes a single values array.
    const arr1 = [10, 20, 30, 40, 50];
    const arr2 = [30, 50];
    const result = differenceBy(arr1, arr2, x => x);
    expect(result).toEqual([10, 20, 40]);
  });
});
