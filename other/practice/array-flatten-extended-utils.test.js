const { flatten } = require('./array-flatten-extended-utils');

describe('flatten', () => {
  test('should flatten a nested array', () => {
    expect(flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5]);
  });

  test('should return the same array if it is not nested', () => {
    expect(flatten([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle an empty array', () => {
    expect(flatten([])).toEqual([]);
  });

  test('should handle an array with empty arrays', () => {
    expect(flatten([1, [], [2, []]])).toEqual([1, 2, []]);
  });

  test('should not flatten deeper than one level', () => {
    const deepArray = [1, [2, [3, [4]]]];
    expect(flatten(deepArray)).toEqual([1, 2, [3, [4]]]);
  });
});