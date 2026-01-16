const arrayFlattenDepthSpecific = require('./array-flatten-depth-specific-utils');

describe('arrayFlattenDepthSpecific', () => {
  test('should flatten a nested array by a default depth of 1', () => {
    const arr = [1, [2, [3, 4]], 5];
    expect(arrayFlattenDepthSpecific(arr)).toEqual([1, 2, [3, 4], 5]);
  });

  test('should flatten a nested array by a specified depth of 2', () => {
    const arr = [1, [2, [3, 4]], 5];
    expect(arrayFlattenDepthSpecific(arr, 2)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should flatten a nested array to infinite depth when depth is very large', () => {
    const arr = [1, [2, [3, [4, [5]]]]];
    expect(arrayFlattenDepthSpecific(arr, Infinity)).toEqual([1, 2, 3, 4, 5]);
    expect(arrayFlattenDepthSpecific(arr, 100)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return a shallow copy if depth is 0', () => {
    const arr = [1, [2, 3], 4];
    expect(arrayFlattenDepthSpecific(arr, 0)).toEqual([1, [2, 3], 4]);
    expect(arrayFlattenDepthSpecific(arr, 0)).not.toBe(arr); // Ensure it's a new array
  });

  test('should handle empty arrays', () => {
    const arr = [];
    expect(arrayFlattenDepthSpecific(arr)).toEqual([]);
  });

  test('should handle arrays with no nested arrays', () => {
    const arr = [1, 2, 3];
    expect(arrayFlattenDepthSpecific(arr)).toEqual([1, 2, 3]);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [1, [true, 'a'], { b: 2 }];
    expect(arrayFlattenDepthSpecific(arr)).toEqual([1, true, 'a', { b: 2 }]);
  });

  test('should throw an error if the input is not an array', () => {
    expect(() => arrayFlattenDepthSpecific(null)).toThrow('Expected an array for the first argument.');
    expect(() => arrayFlattenDepthSpecific(undefined)).toThrow('Expected an array for the first argument.');
    expect(() => arrayFlattenDepthSpecific('string')).toThrow('Expected an array for the first argument.');
  });

  test('should throw an error if depth is not a non-negative number', () => {
    expect(() => arrayFlattenDepthSpecific([1], -1)).toThrow('Expected depth to be a non-negative number.');
    expect(() => arrayFlattenDepthSpecific([1], 'abc')).toThrow('Expected depth to be a non-negative number.');
  });
});
