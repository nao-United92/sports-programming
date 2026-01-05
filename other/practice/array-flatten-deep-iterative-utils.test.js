const arrayFlattenDeepIterative = require('./array-flatten-deep-iterative-utils');

describe('arrayFlattenDeepIterative', () => {
  test('should flatten a deeply nested array', () => {
    const arr = [1, [2, [3, 4], 5], 6, [7, 8]];
    expect(arrayFlattenDeepIterative(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test('should flatten an array with empty nested arrays', () => {
    const arr = [1, [],
      [2, []], 3
    ];
    expect(arrayFlattenDeepIterative(arr)).toEqual([1, 2, 3]);
  });

  test('should handle an already flat array', () => {
    const arr = [1, 2, 3];
    expect(arrayFlattenDeepIterative(arr)).toEqual([1, 2, 3]);
  });

  test('should handle an empty array', () => {
    const arr = [];
    expect(arrayFlattenDeepIterative(arr)).toEqual([]);
  });

  test('should handle array with mixed types including null and undefined', () => {
    const arr = [1, [2, null, [3]], undefined, 4];
    expect(arrayFlattenDeepIterative(arr)).toEqual([1, 2, null, 3, undefined, 4]);
  });

  test('should throw TypeError if argument is not an array', () => {
    expect(() => arrayFlattenDeepIterative(null)).toThrow(TypeError);
    expect(() => arrayFlattenDeepIterative(123)).toThrow(TypeError);
    expect(() => arrayFlattenDeepIterative('string')).toThrow(TypeError);
  });
});
