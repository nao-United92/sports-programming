const { intersection } = require('./array-intersection-utils');

describe('intersection', () => {
  test('should return common elements of two arrays', () => {
    expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });

  test('should handle arrays with no common elements', () => {
    expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
  });

  test('should handle empty arrays', () => {
    expect(intersection([], [1, 2, 3])).toEqual([]);
    expect(intersection([1, 2, 3], [])).toEqual([]);
    expect(intersection([], [])).toEqual([]);
  });

  test('should remove duplicate elements from the result', () => {
    expect(intersection([1, 2, 2, 3], [2, 3, 3, 4])).toEqual([2, 3]);
  });

  test('should work with different data types', () => {
    expect(intersection([1, 'a', null], [null, 'a', 2])).toEqual(expect.arrayContaining(['a', null]));
  });
});