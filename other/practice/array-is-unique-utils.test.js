import { isUnique } from './array-is-unique-utils.js';

describe('isUnique', () => {
  it('should return true for an array with unique values', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(isUnique(arr)).toBe(true);
  });

  it('should return false for an array with duplicate values', () => {
    const arr = [1, 2, 2, 3, 4];
    expect(isUnique(arr)).toBe(false);
  });

  it('should return true for an empty array', () => {
    expect(isUnique([])).toBe(true);
  });

  it('should handle arrays with mixed data types', () => {
    const arr = [1, 'a', 2, 'b'];
    expect(isUnique(arr)).toBe(true);
  });

  it('should handle arrays with mixed data types and duplicates', () => {
    const arr = [1, 'a', 2, 'a'];
    expect(isUnique(arr)).toBe(false);
  });
});