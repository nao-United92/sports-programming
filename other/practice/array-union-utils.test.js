import { union } from './array-union-utils.js';

describe('union', () => {
  it('should return the union of two arrays', () => {
    expect(union([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return the union of multiple arrays', () => {
    expect(union([1, 2], [2, 3], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  it('should handle empty arrays', () => {
    expect(union([], [1, 2])).toEqual([1, 2]);
    expect(union([1, 2], [])).toEqual([1, 2]);
    expect(union([], [])).toEqual([]);
  });

  it('should handle arrays with duplicate values', () => {
    expect(union([1, 1, 2], [2, 3, 3])).toEqual([1, 2, 3]);
  });
});