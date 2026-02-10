import arrayFlatten from './array-flatten';

describe('arrayFlatten', () => {
  test('should flatten a simple nested array by one level', () => {
    expect(arrayFlatten([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
  });

  test('should flatten an array with multiple nested arrays', () => {
    expect(arrayFlatten([1, [2], [3, 4], 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should not deep flatten', () => {
    expect(arrayFlatten([1, [2, [3, 4]], 5])).toEqual([1, 2, [3, 4], 5]);
  });

  test('should return an empty array if an empty array is provided', () => {
    expect(arrayFlatten([])).toEqual([]);
  });

  test('should handle an array with no nested arrays', () => {
    expect(arrayFlatten([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should handle arrays with mixed types', () => {
    expect(arrayFlatten([1, ['a', 'b'], {c: 1}])).toEqual([1, 'a', 'b', {c: 1}]);
  });
});
