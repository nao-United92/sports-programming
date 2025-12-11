const flattenDeep = require('./array-flatten-deep-extended-utils');

describe('flattenDeep', () => {
  test('should flatten a deeply nested array', () => {
    const arr = [1, [2, [3, [4, 5], 6], 7], 8];
    expect(flattenDeep(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test('should handle arrays with no nested arrays', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(flattenDeep(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle empty arrays', () => {
    expect(flattenDeep([])).toEqual([]);
  });

  test('should return the original value if not an array', () => {
    expect(flattenDeep(null)).toBeNull();
    expect(flattenDeep(undefined)).toBeUndefined();
    expect(flattenDeep(123)).toBe(123);
    expect(flattenDeep('string')).toBe('string');
    expect(flattenDeep({
      a: 1
    })).toEqual({
      a: 1
    });
  });

  test('should not mutate the original array', () => {
    const arr = [1, [2, 3], 4];
    const originalArr = JSON.parse(JSON.stringify(arr)); // Deep copy for comparison
    flattenDeep(arr);
    expect(arr).toEqual(originalArr);
  });

  test('should handle arrays containing mixed types', () => {
    const arr = [1, [2, 'hello', [3, true]], null, {
      a: 1
    }];
    expect(flattenDeep(arr)).toEqual([1, 2, 'hello', 3, true, null, {
      a: 1
    }]);
  });
});
