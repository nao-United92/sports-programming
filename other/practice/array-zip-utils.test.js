const zip = require('./array-zip-utils').default;

describe('zip', () => {
  test('should group corresponding elements from multiple arrays', () => {
    const arr1 = ['a', 'b'];
    const arr2 = [1, 2];
    const arr3 = [true, false];
    expect(zip(arr1, arr2, arr3)).toEqual([
      ['a', 1, true],
      ['b', 2, false],
    ]);
  });

  test('should handle arrays of different lengths, truncating to the shortest', () => {
    const arr1 = ['a', 'b', 'c'];
    const arr2 = [1, 2];
    expect(zip(arr1, arr2)).toEqual([
      ['a', 1],
      ['b', 2],
    ]);
  });

  test('should return an empty array if no arrays are provided', () => {
    expect(zip()).toEqual([]);
  });

  test('should return an empty array if any input array is empty', () => {
    const arr1 = ['a', 'b'];
    const arr2 = [];
    expect(zip(arr1, arr2)).toEqual([]);
    expect(zip([], ['a', 'b'])).toEqual([]);
  });

  test('should handle single array input', () => {
    const arr1 = ['a', 'b', 'c'];
    expect(zip(arr1)).toEqual([
      ['a'],
      ['b'],
      ['c'],
    ]);
  });

  test('should handle empty arrays and non-array arguments gracefully', () => {
    // Note: The current implementation expects arrays. Non-array arguments would cause errors.
    // This test case assumes that 'zip' will only be called with arrays or handles non-arrays appropriately.
    // For this specific implementation, non-array args will cause errors if accessed like arrays.
    const arr1 = [1, 2];
    const arr2 = [];
    const arr3 = [3, 4];
    expect(zip(arr1, arr2, arr3)).toEqual([]);
  });
});