
import { flatten, flattenDeep } from './flatten-utils.js';

describe('flatten', () => {
  test('should flatten an array a single level', () => {
    const array = [1, [2, [3, [4]], 5]];
    expect(flatten(array)).toEqual([1, 2, [3, [4]], 5]);
  });

  test('should return an empty array if input is not an array', () => {
    expect(flatten(null)).toEqual([]);
    expect(flatten(undefined)).toEqual([]);
    expect(flatten({})).toEqual([]);
  });

  test('should handle an already flat array', () => {
    const array = [1, 2, 3, 4, 5];
    expect(flatten(array)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle an empty array', () => {
    expect(flatten([])).toEqual([]);
  });
});

describe('flattenDeep', () => {
  test('should recursively flatten an array', () => {
    const array = [1, [2, [3, [4]], 5]];
    expect(flattenDeep(array)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return an empty array if input is not an array', () => {
    expect(flattenDeep(null)).toEqual([]);
    expect(flattenDeep(undefined)).toEqual([]);
    expect(flattenDeep({})).toEqual([]);
  });

  test('should handle an already flat array', () => {
    const array = [1, 2, 3, 4, 5];
    expect(flattenDeep(array)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle an empty array', () => {
    expect(flattenDeep([])).toEqual([]);
  });

  test('should handle multiple levels of nesting', () => {
    const array = [[1, [2]], [[3], [[4]]], [5]];
    expect(flattenDeep(array)).toEqual([1, 2, 3, 4, 5]);
  });
});
