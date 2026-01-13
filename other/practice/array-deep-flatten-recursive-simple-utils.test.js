
import { deepFlattenRecursiveSimple } from './array-deep-flatten-recursive-simple-utils.js';

describe('deepFlattenRecursiveSimple', () => {
  it('should flatten a deeply nested array', () => {
    const arr = [1, [2, [3, 4], 5], 6];
    expect(deepFlattenRecursiveSimple(arr)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle an already flat array', () => {
    const arr = [1, 2, 3];
    expect(deepFlattenRecursiveSimple(arr)).toEqual([1, 2, 3]);
  });

  it('should handle an empty array', () => {
    const arr = [];
    expect(deepFlattenRecursiveSimple(arr)).toEqual([]);
  });

  it('should handle an array with empty nested arrays', () => {
    const arr = [1, [], [2, []], 3];
    expect(deepFlattenRecursiveSimple(arr)).toEqual([1, 2, 3]);
  });

  it('should handle arrays containing null and undefined', () => {
    const arr = [1, [null, [undefined], 2]];
    expect(deepFlattenRecursiveSimple(arr)).toEqual([1, null, undefined, 2]);
  });

  it('should not modify the original array', () => {
    const arr = [1, [2, [3]]];
    const originalArr = [...arr];
    deepFlattenRecursiveSimple(arr);
    expect(arr).toEqual(originalArr);
  });
});
