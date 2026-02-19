
const arrayIntersectionCommon = require('./array-intersection-common');

describe('arrayIntersectionCommon', () => {
  test('returns common elements', () => {
    expect(arrayIntersectionCommon([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });

  test('returns empty array if no intersection', () => {
    expect(arrayIntersectionCommon([1, 2], [3, 4])).toEqual([]);
  });

  test('handles duplicates in first array', () => {
    expect(arrayIntersectionCommon([1, 2, 2, 3], [2, 3])).toEqual([2, 2, 3]);
  });
});
