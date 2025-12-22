import { deepFlatten } from './array-deep-flatten-utils';

describe('deepFlatten', () => {
  it('should completely flatten a nested array', () => {
    const arr = [1, [2, 3], [4, [5, 6]]];
    expect(deepFlatten(arr)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle an already flat array', () => {
    const arr = [1, 2, 3];
    expect(deepFlatten(arr)).toEqual([1, 2, 3]);
  });

  it('should handle an empty array', () => {
    expect(deepFlatten([])).toEqual([]);
  });

  it('should handle non-array input', () => {
    expect(deepFlatten(42)).toEqual([42]);
  });
});
