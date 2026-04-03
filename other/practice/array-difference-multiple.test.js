const arrayDifferenceMultiple = require('./array-difference-multiple');

describe('arrayDifferenceMultiple', () => {
  test('should return elements in the first array not in others', () => {
    expect(arrayDifferenceMultiple([1, 2, 3, 4], [2], [4, 5])).toEqual([1, 3]);
  });

  test('should return all elements if no others are provided', () => {
    expect(arrayDifferenceMultiple([1, 2])).toEqual([1, 2]);
  });

  test('should handle empty first array', () => {
    expect(arrayDifferenceMultiple([], [1])).toEqual([]);
  });

  test('should handle empty other arrays', () => {
    expect(arrayDifferenceMultiple([1, 2], [], [])).toEqual([1, 2]);
  });

  test('should return empty if all elements are in others', () => {
    expect(arrayDifferenceMultiple([1, 2], [1, 2], [3])).toEqual([]);
  });

  test('should handle no arguments', () => {
    expect(arrayDifferenceMultiple()).toEqual([]);
  });
});
