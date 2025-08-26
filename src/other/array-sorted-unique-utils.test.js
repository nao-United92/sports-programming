import { sortedUniq, sortedUniqBy } from './array-sorted-unique-utils.js';

describe('sortedUniq', () => {
  it('should remove duplicate values from a sorted array', () => {
    expect(sortedUniq([1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
    expect(sortedUniq(['a', 'a', 'b', 'b'])).toEqual(['a', 'b']);
  });

  it('should return an empty array for an empty input', () => {
    expect(sortedUniq([])).toEqual([]);
  });

  it('should handle arrays with no duplicates', () => {
    expect(sortedUniq([1, 2, 3])).toEqual([1, 2, 3]);
  });
});

describe('sortedUniqBy', () => {
  it('should remove duplicate values based on iteratee result', () => {
    const array = [
      { 'x': 1 },
      { 'x': 2 },
      { 'x': 1 },
      { 'x': 3 },
      { 'x': 2 }
    ];
    // Note: sortedUniqBy expects a sorted array based on the iteratee result.
    // For this test, we assume the array is already sorted by 'x' for simplicity.
    const sortedArray = [
      { 'x': 1 },
      { 'x': 1 },
      { 'x': 2 },
      { 'x': 2 },
      { 'x': 3 }
    ];
    expect(sortedUniqBy(sortedArray, (o) => o.x)).toEqual([{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }]);
  });

  it('should return an empty array for an empty input', () => {
    expect(sortedUniqBy([], (o) => o.x)).toEqual([]);
  });
});
