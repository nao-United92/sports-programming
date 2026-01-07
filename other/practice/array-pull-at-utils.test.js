const { pullAt } = require('./array-pull-at-utils');

describe('pullAt', () => {
  test('should mutate the original array and return the removed elements', () => {
    const array = ['a', 'b', 'c', 'd'];
    const indexes = [1, 3];
    const result = pullAt(array, indexes);

    expect(result).toEqual(['b', 'd']);
    expect(array).toEqual(['a', 'c']);
  });

  test('should handle unsorted and duplicate indexes correctly', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    const indexes = [3, 0, 3];
    const result = pullAt(array, indexes);

    expect(result).toEqual(['a', 'd']);
    expect(array).toEqual(['b', 'c', 'e']);
  });

  test('should not modify the array if indexes are out of bounds', () => {
    const array = ['a', 'b', 'c'];
    const originalArray = [...array];
    const indexes = [5, -1];
    const result = pullAt(array, indexes);

    expect(result).toEqual([]);
    expect(array).toEqual(originalArray);
  });

  test('should handle an empty indexes array', () => {
    const array = ['a', 'b', 'c'];
    const originalArray = [...array];
    const result = pullAt(array, []);

    expect(result).toEqual([]);
    expect(array).toEqual(originalArray);
  });

  test('should return an empty array for non-array inputs', () => {
    expect(pullAt(null, [1])).toEqual([]);
    expect(pullAt('abc', [0])).toEqual([]);
  });

  test('should not modify the array if indexes is not an array', () => {
    const array = ['a', 'b', 'c'];
    const originalArray = [...array];
    const result = pullAt(array, 1);

    expect(result).toEqual([]);
    expect(array).toEqual(originalArray);
  });

  test('should handle removing the first and last elements', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    const indexes = [0, 4];
    const result = pullAt(array, indexes);

    expect(result).toEqual(['a', 'e']);
    expect(array).toEqual(['b', 'c', 'd']);
  });
});
