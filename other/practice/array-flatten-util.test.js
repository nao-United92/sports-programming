import { flatten } from './array-flatten-util';

describe('flatten', () => {
  it('should flatten an array a single level deep', () => {
    const originalArray = [1, [2, 3], [4, 5]];
    const flattenedArray = flatten(originalArray);
    expect(flattenedArray).toEqual([1, 2, 3, 4, 5]);
  });

  it('should not flatten nested arrays more than one level', () => {
    const originalArray = [1, [2, [3, 4]], 5];
    const flattenedArray = flatten(originalArray);
    expect(flattenedArray).toEqual([1, 2, [3, 4], 5]);
  });

  it('should return the same array if it is already flat', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const flattenedArray = flatten(originalArray);
    expect(flattenedArray).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return an empty array for an empty array', () => {
    expect(flatten([])).toEqual([]);
  });

  it('should return an empty array for non-array values', () => {
    expect(flatten(null)).toEqual([]);
    expect(flatten(undefined)).toEqual([]);
    expect(flatten({})).toEqual([]);
    expect(flatten('')).toEqual([]);
    expect(flatten(123)).toEqual([]);
  });
});
