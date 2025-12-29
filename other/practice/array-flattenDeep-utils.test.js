import { flattenDeep } from './array-flattenDeep-utils';

describe('flattenDeep', () => {
  test('should recursively flatten an array', () => {
    expect(flattenDeep([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle already flat arrays', () => {
    expect(flattenDeep([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle empty arrays', () => {
    expect(flattenDeep([])).toEqual([]);
  });

  test('should handle arrays with mixed data types', () => {
    expect(flattenDeep([1, 'a', [2, [true]], null, [undefined]])).toEqual([1, 'a', 2, true, null, undefined]);
  });

  test('should handle array with empty nested arrays', () => {
    expect(flattenDeep([1, [],
      [2, []],
      [
        [
          []
        ]
      ]
    ])).toEqual([1, 2]);
  });

  test('should handle non-array input', () => {
    expect(flattenDeep(1)).toEqual([1]);
    expect(flattenDeep('a')).toEqual(['a']);
    expect(flattenDeep(null)).toEqual([null]);
    expect(flattenDeep(undefined)).toEqual([undefined]);
  });
});
