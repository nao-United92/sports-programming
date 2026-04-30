const intersection = require('./array-intersection');

describe('intersection', () => {
  test('should return common elements from two arrays', () => {
    expect(intersection([2, 1], [2, 3])).toEqual([2]);
  });

  test('should return common elements from multiple arrays', () => {
    expect(intersection([1, 2, 3], [2, 3, 4], [3, 4, 5])).toEqual([3]);
  });

  test('should return an empty array if no arrays are provided', () => {
    expect(intersection()).toEqual([]);
  });

  test('should return an empty array if there is no intersection', () => {
    expect(intersection([1, 2], [3, 4])).toEqual([]);
  });

  test('should handle arrays with duplicate elements', () => {
    expect(intersection([1, 2, 2], [2, 2, 3])).toEqual([2, 2]);
  });
});
