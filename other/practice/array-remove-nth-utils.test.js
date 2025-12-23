const removeNth = require('./array-remove-nth-utils');

describe('removeNth', () => {
  test('should remove the element at the specified index', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(removeNth(arr, 2)).toEqual([1, 2, 4, 5]);
  });

  test('should remove the first element (index 0)', () => {
    const arr = [1, 2, 3];
    expect(removeNth(arr, 0)).toEqual([2, 3]);
  });

  test('should remove the last element', () => {
    const arr = [1, 2, 3];
    expect(removeNth(arr, 2)).toEqual([1, 2]);
  });

  test('should return a shallow copy if index is out of bounds (too high)', () => {
    const arr = [1, 2, 3];
    expect(removeNth(arr, 3)).toEqual([1, 2, 3]);
    expect(removeNth(arr, 5)).toEqual([1, 2, 3]);
  });

  test('should return a shallow copy if index is out of bounds (negative)', () => {
    const arr = [1, 2, 3];
    expect(removeNth(arr, -1)).toEqual([1, 2, 3]);
  });

  test('should return a shallow copy of an empty array if input array is empty', () => {
    expect(removeNth([], 0)).toEqual([]);
  });

  test('should handle arrays with a single element', () => {
    expect(removeNth([1], 0)).toEqual([]);
    expect(removeNth([1], 1)).toEqual([1]); // Index out of bounds
  });

  test('should not mutate the original array', () => {
    const arr = [1, 2, 3];
    removeNth(arr, 1);
    expect(arr).toEqual([1, 2, 3]);
  });

  test('should return a shallow copy if input is not an array', () => {
    expect(removeNth(null, 0)).toEqual([]);
    expect(removeNth(undefined, 0)).toEqual([]);
    expect(removeNth("string", 0)).toEqual([]);
    expect(removeNth(123, 0)).toEqual([]);
    expect(removeNth({}, 0)).toEqual([]);
  });
});
