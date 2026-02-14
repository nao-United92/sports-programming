const differenceOneWay = require('./array-difference-one-way');

describe('differenceOneWay', () => {
  test('should return elements in arr1 that are not in arr2', () => {
    expect(differenceOneWay([1, 2, 3], [3, 4, 5])).toEqual([1, 2]);
    expect(differenceOneWay([1, 2, 3, 4, 5], [3, 5, 6, 7])).toEqual([1, 2, 4]);
  });

  test('should handle arrays with no common elements', () => {
    expect(differenceOneWay([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3]);
  });

  test('should handle arr2 being empty', () => {
    expect(differenceOneWay([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  test('should handle arr1 being empty', () => {
    expect(differenceOneWay([], [1, 2, 3])).toEqual([]);
  });

  test('should handle both arrays being empty', () => {
    expect(differenceOneWay([], [])).toEqual([]);
  });

  test('should handle duplicate elements in arr1', () => {
    expect(differenceOneWay([1, 2, 2, 3], [2])).toEqual([1, 3]);
  });

  test('should handle duplicate elements in arr2', () => {
    expect(differenceOneWay([1, 2, 3], [2, 2])).toEqual([1, 3]);
  });

  test('should handle arrays with different data types', () => {
    expect(differenceOneWay([1, 'a', null], ['a', 2, undefined])).toEqual([1, null]);
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => differenceOneWay(null, [1, 2])).toThrow('Both arguments must be arrays.');
  });

  test('should throw an error if the second argument is not an array', () => {
    expect(() => differenceOneWay([1, 2], 'string')).toThrow('Both arguments must be arrays.');
  });
});
