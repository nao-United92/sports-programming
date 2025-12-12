const { flattenDeep } = require('./array-flatten-deep-extended-utils');

describe('flattenDeep', () => {
  test('should flatten a deeply nested array', () => {
    expect(flattenDeep([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return the same array if it is not nested', () => {
    expect(flattenDeep([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle an empty array', () => {
    expect(flattenDeep([])).toEqual([]);
  });

  test('should handle an array with empty arrays', () => {
    expect(flattenDeep([1, [], [2, []]])).toEqual([1, 2]);
  });

  test('should handle multiple levels of nesting', () => {
    const deepArray = [1, [2, [3, [4, [5, [6]]]]]];
    expect(flattenDeep(deepArray)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});