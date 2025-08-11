import { flatten, flattenDepth } from './flatten-utils';

describe('flatten', () => {
  test('should flatten a nested array by one level', () => {
    const arr = [1, [2, 3], [4, [5, 6]]];
    expect(flatten(arr)).toEqual([1, 2, 3, 4, [5, 6]]);
  });

  test('should handle an empty array', () => {
    const arr = [];
    expect(flatten(arr)).toEqual([]);
  });

  test('should handle a flat array', () => {
    const arr = [1, 2, 3];
    expect(flatten(arr)).toEqual([1, 2, 3]);
  });

  test('should handle an array with empty nested arrays', () => {
    const arr = [1, [], [2, []]];
    expect(flatten(arr)).toEqual([1, 2]);
  });

  test('should handle an array with mixed data types', () => {
    const arr = [1, 'a', [2, true], { key: 'value' }];
    expect(flatten(arr)).toEqual([1, 'a', 2, true, { key: 'value' }]);
  });

  test('should return an empty array if input is not an array', () => {
    expect(flatten(null)).toEqual([]);
    expect(flatten(undefined)).toEqual([]);
    expect(flatten('string')).toEqual([]);
    expect(flatten(123)).toEqual([]);
    expect(flatten({})).toEqual([]);
  });
});
