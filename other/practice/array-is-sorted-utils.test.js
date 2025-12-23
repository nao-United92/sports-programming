const isSorted = require('./array-is-sorted-utils');

describe('isSorted', () => {
  it('should return true for a sorted array of numbers', () => {
    expect(isSorted([1, 2, 3, 4, 5])).toBe(true);
  });

  it('should return false for an unsorted array of numbers', () => {
    expect(isSorted([1, 3, 2, 4, 5])).toBe(false);
  });

  it('should return true for a sorted array of strings', () => {
    expect(isSorted(['apple', 'banana', 'orange'], (a, b) => a.localeCompare(b))).toBe(true);
  });

  it('should return false for an unsorted array of strings', () => {
    expect(isSorted(['banana', 'apple', 'orange'], (a, b) => a.localeCompare(b))).toBe(false);
  });

  it('should return true for an empty array', () => {
    expect(isSorted([])).toBe(true);
  });

  it('should return true for a single-element array', () => {
    expect(isSorted([1])).toBe(true);
  });

  it('should work with a custom comparator for descending order', () => {
    const descending = (a, b) => b - a;
    expect(isSorted([5, 4, 3, 2, 1], descending)).toBe(true);
    expect(isSorted([1, 2, 3, 4, 5], descending)).toBe(false);
  });
});
