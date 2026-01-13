
import { isSuperset } from './array-is-superset-utils.js';

describe('isSuperset', () => {
  it('should return true if the first array is a superset of the second', () => {
    expect(isSuperset([1, 2, 3, 4], [1, 2])).toBe(true);
  });

  it('should return true if the arrays are identical', () => {
    expect(isSuperset([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  it('should return false if the first array is not a superset of the second', () => {
    expect(isSuperset([1, 2, 3, 4], [1, 5])).toBe(false);
  });

  it('should return true if the second array is empty', () => {
    expect(isSuperset([1, 2, 3], [])).toBe(true);
  });

  it('should return false if the first array is empty and the second is not', () => {
    expect(isSuperset([], [1])).toBe(false);
  });

  it('should handle arrays with duplicate values in superset', () => {
    expect(isSuperset([1, 2, 2, 3], [1, 2])).toBe(true);
  });

  it('should handle arrays with duplicate values in subset (requires all to be present)', () => {
    expect(isSuperset([1, 2, 3], [1, 2, 2])).toBe(false); // Because '2' needs to appear twice in superset
  });

  it('should handle arrays with different order but same elements', () => {
    expect(isSuperset([3, 1, 2], [1, 2])).toBe(true);
  });
});
