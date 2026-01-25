const { flatten } = require('./array-flatten-recursive-utils');

describe('flatten', () => {
  test('should flatten a simple nested array', () => {
    expect(flatten([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
  });

  test('should flatten a deeply nested array', () => {
    expect(flatten([1, [2, [3, [4, 5], 6], 7], 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test('should return an empty array if given an empty array', () => {
    expect(flatten([])).toEqual([]);
  });

  test('should handle an array with no nested arrays', () => {
    expect(flatten([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should handle arrays with mixed data types', () => {
    expect(flatten([1, [2, 'hello'], true, [null, undefined]])).toEqual([1, 2, 'hello', true, null, undefined]);
  });

  test('should handle arrays containing empty nested arrays', () => {
    expect(flatten([1, [], [2, []], 3])).toEqual([1, 2, 3]);
  });
});
