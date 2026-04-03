const intersectionMultiple = require('./array-intersection-multiple');

describe('intersectionMultiple', () => {
  test('returns the intersection of multiple arrays', () => {
    expect(intersectionMultiple([1, 2, 3], [2, 3, 4], [3, 4, 5])).toEqual([3]);
    expect(intersectionMultiple([1, 2, 2, 3], [2, 2, 3, 4], [2, 3, 3, 5])).toEqual([2, 3]);
  });

  test('returns an empty array if there are no arrays', () => {
    expect(intersectionMultiple()).toEqual([]);
  });

  test('returns a unique set from a single array', () => {
    expect(intersectionMultiple([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  test('returns an empty array if one of the arrays is empty', () => {
    expect(intersectionMultiple([1, 2, 3], [], [2, 3])).toEqual([]);
  });

  test('handles non-numeric elements', () => {
    expect(intersectionMultiple(['a', 'b', 'c'], ['b', 'c', 'd'], ['c', 'd', 'e'])).toEqual(['c']);
  });
});
