const arrayMove = require('./array-move-utils');

describe('arrayMove', () => {
  test('should move an element from one position to another', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arrayMove(arr, 0, 2)).toEqual([2, 3, 1, 4, 5]); // Move 1 from index 0 to index 2
  });

  test('should move an element to the end of the array', () => {
    const arr = [1, 2, 3];
    expect(arrayMove(arr, 0, 2)).toEqual([2, 3, 1]); // Move 1 from index 0 to index 2 (end)
  });

  test('should move an element to the beginning of the array', () => {
    const arr = [1, 2, 3];
    expect(arrayMove(arr, 2, 0)).toEqual([3, 1, 2]); // Move 3 from index 2 to index 0 (beginning)
  });

  test('should handle negative `fromIndex` values (relative to end)', () => {
    const arr = [1, 2, 3, 4, 5];
    // fromIndex = -2 means arr.length - 2 = 3 (element 4)
    expect(arrayMove(arr, -2, 0)).toEqual([4, 1, 2, 3, 5]);
  });

  test('should handle negative `toIndex` values (relative to end)', () => {
    const arr = [1, 2, 3, 4, 5];
    // toIndex = -2 means arr.length - 2 = 3 (insert before 4)
    // Move 1 from index 0 to index (5-2=3)
    expect(arrayMove(arr, 0, -2)).toEqual([2, 3, 1, 4, 5]);
  });


  test('should not modify the original array', () => {
    const arr = [1, 2, 3];
    arrayMove(arr, 0, 1);
    expect(arr).toEqual([1, 2, 3]);
  });

  test('should handle invalid `fromIndex` (out of bounds) gracefully', () => {
    const arr = [1, 2, 3];
    // If fromIndex is out of bounds, splice would remove nothing.
    // The implementation assumes valid indices for splice.
    // It should return a copy of the original array if fromIndex is invalid.
    // Note: JS splice handles negative indices and indices > length.
    expect(arrayMove(arr, 10, 0)).toEqual([1, 2, 3]);
    expect(arrayMove(arr, -10, 0)).toEqual([1, 2, 3]);
  });

  test('should handle invalid `toIndex` (out of bounds) gracefully', () => {
    const arr = [1, 2, 3];
    expect(arrayMove(arr, 0, 10)).toEqual([2, 3, 1]); // moved to end
    expect(arrayMove(arr, 0, -10)).toEqual([1, 2, 3]); // moved to beginning
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => arrayMove(null, 0, 1)).toThrow(TypeError);
    expect(() => arrayMove(123, 0, 1)).toThrow(TypeError);
    expect(() => arrayMove('string', 0, 1)).toThrow(TypeError);
  });

  test('should throw TypeError if indices are not numbers', () => {
    const arr = [1, 2, 3];
    expect(() => arrayMove(arr, '0', 1)).toThrow(TypeError);
    expect(() => arrayMove(arr, 0, '1')).toThrow(TypeError);
    expect(() => arrayMove(arr, 0, null)).toThrow(TypeError);
  });
});
