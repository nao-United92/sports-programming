import arrayFlattenDeep from './array-flatten-deep';

describe('arrayFlattenDeep', () => {
  test('should deeply flatten a nested array', () => {
    const arr = [1, [2, [3, [4, 5]]], 6];
    expect(arrayFlattenDeep(arr)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should handle a flat array', () => {
    const arr = [1, 2, 3];
    expect(arrayFlattenDeep(arr)).toEqual([1, 2, 3]);
  });

  test('should handle an empty array', () => {
    const arr = [];
    expect(arrayFlattenDeep(arr)).toEqual([]);
  });

  test('should handle an array with empty nested arrays', () => {
    const arr = [1, [],
      [2, []], 3
    ];
    expect(arrayFlattenDeep(arr)).toEqual([1, 2, 3]);
  });

  test('should throw an error if the argument is not an array', () => {
    expect(() => arrayFlattenDeep(null)).toThrow('Expected an array for the first argument.');
    expect(() => arrayFlattenDeep(undefined)).toThrow('Expected an array for the first argument.');
    expect(() => arrayFlattenDeep('string')).toThrow('Expected an array for the first argument.');
    expect(() => arrayFlattenDeep(123)).toThrow('Expected an array for the first argument.');
    expect(() => arrayFlattenDeep({})).toThrow('Expected an array for the first argument.');
  });
});
