
import { isSubset } from './array-is-subset-utils.js';

describe('isSubset', () => {
  it('should return true if the first array is a subset of the second', () => {
    expect(isSubset([1, 2], [1, 2, 3, 4])).toBe(true);
  });

  it('should return true if the arrays are identical', () => {
    expect(isSubset([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  it('should return false if the first array is not a subset of the second', () => {
    expect(isSubset([1, 5], [1, 2, 3, 4])).toBe(false);
  });

  it('should return true if the first array is empty', () => {
    expect(isSubset([], [1, 2, 3])).toBe(true);
  });

  it('should return false if the second array is empty and the first is not', () => {
    expect(isSubset([1], [])).toBe(false);
  });

  it('should handle arrays with duplicate values', () => {
    expect(isSubset([1, 2, 2], [1, 2, 3, 2])).toBe(true);
  });

  it('should handle arrays with different order but same elements', () => {
    expect(isSubset([2, 1], [1, 2, 3])).toBe(true);
  });

  it('should handle arrays with objects (reference equality)', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const obj3 = { c: 3 };
    expect(isSubset([obj1], [obj1, obj2])).toBe(true);
    expect(isSubset([obj1, obj3], [obj1, obj2])).toBe(false);
  });
});
