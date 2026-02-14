const intersection = require('./array-intersection');

describe('intersection', () => {
  test('should return common elements between two arrays', () => {
    expect(intersection([1, 2, 3], [3, 4, 5])).toEqual([3]);
    expect(intersection([1, 2, 3, 4, 5], [3, 5, 6, 7])).toEqual([3, 5]);
  });

  test('should handle arrays with no common elements', () => {
    expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
  });

  test('should handle arrays with duplicate common elements in the second array', () => {
    expect(intersection([1, 2, 3], [3, 3, 4, 5])).toEqual([3, 3]);
  });

  test('should handle arrays with duplicate common elements in the first array', () => {
    expect(intersection([1, 2, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });

  test('should handle empty arrays', () => {
    expect(intersection([], [1, 2, 3])).toEqual([]);
    expect(intersection([1, 2, 3], [])).toEqual([]);
    expect(intersection([], [])).toEqual([]);
  });

  test('should handle arrays with different data types', () => {
    expect(intersection([1, 'a', null], ['a', 2, undefined])).toEqual(['a']);
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => intersection(null, [1, 2])).toThrow('Both arguments must be arrays.');
  });

  test('should throw an error if the second argument is not an array', () => {
    expect(() => intersection([1, 2], 'string')).toThrow('Both arguments must be arrays.');
  });

  test('should throw an error if both arguments are not arrays', () => {
    expect(() => intersection(1, 'string')).toThrow('Both arguments must be arrays.');
  });
});
