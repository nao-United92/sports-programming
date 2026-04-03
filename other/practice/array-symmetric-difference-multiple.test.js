const arraySymmetricDifferenceMultiple = require('./array-symmetric-difference-multiple');

describe('arraySymmetricDifferenceMultiple', () => {
  test('should return symmetric difference of two arrays', () => {
    expect(arraySymmetricDifferenceMultiple([1, 2], [2, 3]).sort()).toEqual([1, 3]);
  });

  test('should return symmetric difference of three arrays', () => {
    // [1, 2], [2, 3] -> [1, 3]
    // [1, 3], [3, 4] -> [1, 4]
    expect(arraySymmetricDifferenceMultiple([1, 2], [2, 3], [3, 4]).sort()).toEqual([1, 4]);
  });

  test('should return the array itself if only one is provided', () => {
    expect(arraySymmetricDifferenceMultiple([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should handle empty arrays', () => {
    expect(arraySymmetricDifferenceMultiple([1, 2], [], [2, 3]).sort()).toEqual([1, 3]);
  });

  test('should handle no arguments', () => {
    expect(arraySymmetricDifferenceMultiple()).toEqual([]);
  });

  test('should handle arrays with non-primitive values (by reference)', () => {
    const obj = { a: 1 };
    expect(arraySymmetricDifferenceMultiple([obj, 1], [1, 2])).toContain(obj);
    expect(arraySymmetricDifferenceMultiple([obj, 1], [1, 2])).toContain(2);
  });
});
