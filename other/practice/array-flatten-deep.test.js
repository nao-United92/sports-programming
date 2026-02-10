import arrayFlattenDeep from './array-flatten-deep';

describe('arrayFlattenDeep', () => {
  test('should deep flatten a simple nested array', () => {
    expect(arrayFlattenDeep([1, [2, [3, 4]], 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should deep flatten an array with multiple levels of nesting', () => {
    expect(arrayFlattenDeep([1, [2, [3, [4, 5]]], 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should return an empty array if an empty array is provided', () => {
    expect(arrayFlattenDeep([])).toEqual([]);
  });

  test('should handle an array with no nested arrays', () => {
    expect(arrayFlattenDeep([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should handle arrays with mixed types', () => {
    expect(arrayFlattenDeep([1, ['a', [true, null]], {c: 1}])).toEqual([1, 'a', true, null, {c: 1}]);
  });

  test('should handle deeply empty nested arrays', () => {
    expect(arrayFlattenDeep([1, [], [[]], [[[]]], 2])).toEqual([1, 2]);
  });
});
