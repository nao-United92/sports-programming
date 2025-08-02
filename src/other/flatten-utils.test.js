import { flatten, flattenDepth, flattenDeep } from './flatten-utils.js';

describe('flatten', () => {
  test('should flatten a single level deep', () => {
    const array = [1, [2, [3, 4]], 5];
    expect(flatten(array)).toEqual([1, 2, [3, 4], 5]);
  });

  test('should return an empty array if input is not an array', () => {
    expect(flatten(null)).toEqual([]);
    expect(flatten(undefined)).toEqual([]);
    expect(flatten('string')).toEqual([]);
  });

  test('should handle an empty array', () => {
    expect(flatten([])).toEqual([]);
  });
});

describe('flattenDepth', () => {
  test('should flatten to a specified depth', () => {
    const array = [1, [2, [3, [4]]], 5];
    expect(flattenDepth(array, 1)).toEqual([1, 2, [3, [4]], 5]);
    expect(flattenDepth(array, 2)).toEqual([1, 2, 3, [4], 5]);
    expect(flattenDepth(array, 3)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should flatten a single level by default', () => {
    const array = [1, [2, [3, 4]], 5];
    expect(flattenDepth(array)).toEqual([1, 2, [3, 4], 5]);
  });

  test('should return an empty array if input is not an array', () => {
    expect(flattenDepth(null, 1)).toEqual([]);
    expect(flattenDepth(undefined, 1)).toEqual([]);
  });

  test('should handle depth of 0', () => {
    const array = [1, [2, [3]]];
    expect(flattenDepth(array, 0)).toEqual(array);
  });

  test('should handle negative depth as 0', () => {
    const array = [1, [2, [3]]];
    expect(flattenDepth(array, -1)).toEqual(array);
  });
});

describe('flattenDeep', () => {
  test('should flatten an array recursively', () => {
    const array = [1, [2, [3, [4, [5]]]], 6];
    expect(flattenDeep(array)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should return an empty array if input is not an array', () => {
    expect(flattenDeep(null)).toEqual([]);
    expect(flattenDeep(undefined)).toEqual([]);
  });

  test('should handle an empty array', () => {
    expect(flattenDeep([])).toEqual([]);
  });
});