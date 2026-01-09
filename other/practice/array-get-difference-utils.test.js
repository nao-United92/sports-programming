import { getDifference } from './array-get-difference-utils.js';

describe('getDifference', () => {
  test('should return the difference between two arrays', () => {
    expect(getDifference([1, 2, 3], [2, 3, 4])).toEqual([1]);
  });

  test('should return the first array if the second array is empty', () => {
    expect(getDifference([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  test('should return an empty array if the first array is empty', () => {
    expect(getDifference([], [1, 2, 3])).toEqual([]);
  });

  test('should return an empty array for non-array inputs', () => {
    expect(getDifference([1, 2, 3], 'not an array')).toEqual([]);
    expect(getDifference(null, [1, 2, 3])).toEqual([]);
  });

  test('should handle arrays with different data types', () => {
    expect(getDifference([1, 'a', null], ['a', 3, undefined])).toEqual([1, null]);
  });
});
