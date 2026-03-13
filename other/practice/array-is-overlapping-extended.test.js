const getOverlap = require('./array-is-overlapping-extended');

describe('getOverlap', () => {
  test('returns overlapping elements', () => {
    expect(getOverlap([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });

  test('returns empty array for no overlap', () => {
    expect(getOverlap([1], [2])).toEqual([]);
  });

  test('handles duplicates in first array', () => {
    expect(getOverlap([1, 1, 2], [1])).toEqual([1, 1]);
  });

  test('handles empty arrays', () => {
    expect(getOverlap([], [1])).toEqual([]);
    expect(getOverlap([1], [])).toEqual([]);
  });
});
