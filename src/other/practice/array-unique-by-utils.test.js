import { uniqueBy } from './array-unique-by-utils.js';

describe('uniqueBy', () => {
  test('should return unique elements based on an iteratee function', () => {
    const arr = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }, { id: 1, name: 'c' }];
    const result = uniqueBy(arr, item => item.id);
    expect(result).toEqual([{ id: 1, name: 'a' }, { id: 2, name: 'b' }]);
  });

  test('should handle primitive values', () => {
    const arr = [1, 2, 2, 3, 1];
    const result = uniqueBy(arr, item => item);
    expect(result).toEqual([1, 2, 3]);
  });

  test('should handle empty array', () => {
    expect(uniqueBy([], item => item)).toEqual([]);
  });

  test('should handle array with no duplicates', () => {
    const arr = [1, 2, 3];
    expect(uniqueBy(arr, item => item)).toEqual([1, 2, 3]);
  });

  test('should handle non-array input', () => {
    expect(uniqueBy(null, item => item)).toEqual([]);
    expect(uniqueBy(undefined, item => item)).toEqual([]);
  });
});
