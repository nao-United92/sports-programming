import { flattenByDepth } from './array-flatten-by-depth-utils.js';

describe('flattenByDepth', () => {
  const arr = [1, [2, [3, [4]], 5]];

  test('should flatten an array to a specified depth', () => {
    expect(flattenByDepth(arr, 1)).toEqual([1, 2, [3, [4]], 5]);
  });

  test('should flatten an array to a greater depth', () => {
    expect(flattenByDepth(arr, 2)).toEqual([1, 2, 3, [4], 5]);
  });

  test('should completely flatten the array if depth is high enough', () => {
    expect(flattenByDepth(arr, 3)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should default to a depth of 1', () => {
    expect(flattenByDepth(arr)).toEqual([1, 2, [3, [4]], 5]);
  });

  test('should return the array as is if depth is less than 1', () => {
    expect(flattenByDepth(arr, 0)).toEqual(arr);
    expect(flattenByDepth(arr, -1)).toEqual(arr);
  });
});