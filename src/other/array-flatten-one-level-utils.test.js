
import { flatten } from './array-flatten-one-level-utils';

describe('flatten', () => {
  test('should flatten a nested array one level deep', () => {
    expect(flatten([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
  });

  test('should only flatten one level deep', () => {
    expect(flatten([1, [2, [3, 4]], 5])).toEqual([1, 2, [3, 4], 5]);
  });

  test('should return the same array if already flat', () => {
    expect(flatten([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should handle empty array', () => {
    expect(flatten([])).toEqual([]);
  });

  test('should handle array with empty nested arrays', () => {
    expect(flatten([1, [], 2])).toEqual([1, 2]);
  });

  test('should handle array with mixed types', () => {
    expect(flatten([1, ['a', true], { key: 'value' }])).toEqual([1, 'a', true, { key: 'value' }]);
  });

  test('should return empty array for non-array input', () => {
    expect(flatten(null)).toEqual([]);
    expect(flatten(undefined)).toEqual([]);
    expect(flatten(123)).toEqual([]);
    expect(flatten('string')).toEqual([]);
    expect(flatten({})).toEqual([]);
  });
});
