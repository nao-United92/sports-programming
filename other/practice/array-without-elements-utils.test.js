import { without } from './array-without-elements-utils.js';

describe('without', () => {
  it('should remove specified values from an array', () => {
    const arr = [1, 2, 3, 4, 5, 2];
    expect(without(arr, 2, 5)).toEqual([1, 3, 4]);
  });

  it('should return the same array if no values are removed', () => {
    const arr = [1, 2, 3, 4];
    expect(without(arr, 5, 6)).toEqual([1, 2, 3, 4]);
  });

  it('should handle an empty array', () => {
    expect(without([], 1, 2)).toEqual([]);
  });

  it('should handle different data types', () => {
    const arr = [1, 'a', 2, 'b', 'a'];
    expect(without(arr, 'a', 2)).toEqual([1, 'b']);
  });
});
