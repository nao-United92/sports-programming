import { flattenDeep } from './array-flatten-deep-utils.js';

describe('flattenDeep', () => {
  it('should recursively flatten a deeply nested array', () => {
    expect(flattenDeep([1, [2, [3, [4]]], 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an array with no nested arrays', () => {
    expect(flattenDeep([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should handle an empty array', () => {
    expect(flattenDeep([])).toEqual([]);
  });

  it('should handle an array with empty nested arrays', () => {
    expect(flattenDeep([1, [], [2, []], 3])).toEqual([1, 2, 3]);
  });

  it('should not modify the original array', () => {
    const arr = [1, [2, [3]]];
    const originalArr = JSON.parse(JSON.stringify(arr)); // Deep copy
    flattenDeep(arr);
    expect(arr).toEqual(originalArr);
  });
});