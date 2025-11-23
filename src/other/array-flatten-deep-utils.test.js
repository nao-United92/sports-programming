import { flattenDeep } from './array-flatten-deep-utils';

describe('flattenDeep', () => {
  it('should flatten a deeply nested array', () => {
    const arr = [1, [2, [3, [4]], 5], 6];
    expect(flattenDeep(arr)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle an empty array', () => {
    const arr = [];
    expect(flattenDeep(arr)).toEqual([]);
  });

  it('should handle an array with no nested arrays', () => {
    const arr = [1, 2, 3];
    expect(flattenDeep(arr)).toEqual([1, 2, 3]);
  });

  it('should handle an array with empty nested arrays', () => {
    const arr = [1, [], [2, []], 3];
    expect(flattenDeep(arr)).toEqual([1, 2, 3]);
  });

  it('should handle non-array inputs gracefully', () => {
    expect(flattenDeep(null)).toEqual([]);
    expect(flattenDeep(undefined)).toEqual([]);
    expect(flattenDeep(123)).toEqual([]);
    expect(flattenDeep('string')).toEqual([]);
    expect(flattenDeep({})).toEqual([]);
  });

  it('should handle mixed types in the array', () => {
    const arr = [1, [2, 'hello', [3, true]], {a: 1}, 4];
    expect(flattenDeep(arr)).toEqual([1, 2, 'hello', 3, true, {a: 1}, 4]);
  });
});