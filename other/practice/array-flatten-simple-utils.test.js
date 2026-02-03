import { flatten } from './array-flatten-simple-utils.js';

describe('flatten', () => {
  it('should flatten a nested array recursively', () => {
    const arr = [1, [2, [3, 4], 5], 6];
    expect(flatten(arr)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle a flat array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(flatten(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an empty array', () => {
    expect(flatten([])).toEqual([]);
  });

  it('should handle an array with empty nested arrays', () => {
    const arr = [1, [], [2, []], 3];
    expect(flatten(arr)).toEqual([1, 2, 3]);
  });
});
