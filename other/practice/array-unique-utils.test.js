import { unique } from './array-unique-utils.js';

describe('unique', () => {
  test('should return an array with unique elements', () => {
    const arr = [1, 2, 2, 3, 4, 4, 5];
    expect(unique(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle an array that is already unique', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(unique(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle an empty array', () => {
    expect(unique([])).toEqual([]);
  });

  test('should handle arrays with different data types', () => {
    const arr = [1, 'a', 'a', null, null];
    expect(unique(arr)).toEqual([1, 'a', null]);
  });

  test('should return an empty array for non-array inputs', () => {
    expect(unique(null)).toEqual([]);
    expect(unique({})).toEqual([]);
  });
});