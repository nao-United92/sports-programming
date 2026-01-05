const arrayFlattenOneLevel = require('./array-flatten-one-level-utils');

describe('arrayFlattenOneLevel', () => {
  test('should flatten a single level nested array', () => {
    const arr = [1, [2, 3], 4];
    expect(arrayFlattenOneLevel(arr)).toEqual([1, 2, 3, 4]);
  });

  test('should not flatten deeply nested arrays', () => {
    const arr = [1, [2, [3, 4]], 5];
    expect(arrayFlattenOneLevel(arr)).toEqual([1, 2, [3, 4], 5]);
  });

  test('should handle an already flat array', () => {
    const arr = [1, 2, 3];
    expect(arrayFlattenOneLevel(arr)).toEqual([1, 2, 3]);
  });

  test('should handle an empty array', () => {
    const arr = [];
    expect(arrayFlattenOneLevel(arr)).toEqual([]);
  });

  test('should handle array with empty nested arrays', () => {
    const arr = [1, [],
      [2, []], 3
    ];
    expect(arrayFlattenOneLevel(arr)).toEqual([1, 2, [], 3]); // Note: [] is still in the array
  });

  test('should handle array with mixed types', () => {
    const arr = [1, 'a', [2, true], null, [undefined]];
    expect(arrayFlattenOneLevel(arr)).toEqual([1, 'a', 2, true, null, undefined]);
  });

  test('should throw TypeError if argument is not an array', () => {
    expect(() => arrayFlattenOneLevel(null)).toThrow(TypeError);
    expect(() => arrayFlattenOneLevel(123)).toThrow(TypeError);
    expect(() => arrayFlattenOneLevel('string')).toThrow(TypeError);
  });
});
