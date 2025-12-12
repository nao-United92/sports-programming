const flattenStack = require('./array-flatten-stack-utils');

describe('flattenStack', () => {
  test('should flatten a nested array', () => {
    const arr = [1, [2, [3, [4]], 5]];
    expect(flattenStack(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle an already flat array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(flattenStack(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle an empty array', () => {
    expect(flattenStack([])).toEqual([]);
  });

  test('should handle an array with empty arrays', () => {
    const arr = [1, [], [2, []], [[], 5]];
    expect(flattenStack(arr)).toEqual([1, 2, 5]);
  });

  test('should handle non-array input', () => {
    expect(flattenStack('not an array')).toBe('not an array');
    expect(flattenStack({ a: 1 })).toEqual({ a: 1 });
    expect(flattenStack(null)).toBeNull();
  });
});
