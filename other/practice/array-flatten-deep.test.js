import { flattenDeep } from './array-flatten-deep';

describe('flattenDeep', () => {
  test('should flatten a deeply nested array', () => {
    const arr = [1, [2, [3, [4]], 5], 6];
    expect(flattenDeep(arr)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should return an empty array if given an empty array', () => {
    const arr = [];
    expect(flattenDeep(arr)).toEqual([]);
  });

  test('should return the same array if no nesting', () => {
    const arr = [1, 2, 3];
    expect(flattenDeep(arr)).toEqual([1, 2, 3]);
  });

  test('should handle arrays with null or undefined values', () => {
    const arr = [1, [null, [undefined]], 3];
    expect(flattenDeep(arr)).toEqual([1, null, undefined, 3]);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [1, ['a', [true, { key: 'value' }]], 3];
    expect(flattenDeep(arr)).toEqual([1, 'a', true, { key: 'value' }, 3]);
  });

  test('should handle deeply nested empty arrays', () => {
    const arr = [1, [], [2, [], [3, []]], 4];
    expect(flattenDeep(arr)).toEqual([1, 2, 3, 4]);
  });
});
