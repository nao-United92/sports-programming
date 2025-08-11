import { uniq } from './uniq-utils';

describe('uniq', () => {
  test('should return an array with unique values', () => {
    const arr = [1, 2, 2, 3, 3, 3];
    expect(uniq(arr)).toEqual([1, 2, 3]);
  });

  test('should handle an empty array', () => {
    const arr = [];
    expect(uniq(arr)).toEqual([]);
  });

  test('should handle an array with no duplicate values', () => {
    const arr = [1, 2, 3];
    expect(uniq(arr)).toEqual([1, 2, 3]);
  });

  test('should handle an array with mixed data types', () => {
    const arr = [1, 'a', 'a', 2, true, true, { key: 'value' }, { key: 'value' }];
    const result = uniq(arr);
    // Note: object equality is based on reference, so two identical objects are considered different.
    expect(result).toEqual([1, 'a', 2, true, { key: 'value' }, { key: 'value' }]);
    expect(result.length).toBe(6);
  });

  test('should return an empty array if input is not an array', () => {
    expect(uniq(null)).toEqual([]);
    expect(uniq(undefined)).toEqual([]);
    expect(uniq('string')).toEqual([]);
    expect(uniq(123)).toEqual([]);
    expect(uniq({})).toEqual([]);
  });
});
