const { dropRight } = require('./array-drop-right-utils');

describe('dropRight', () => {
  test('should drop the last element by default', () => {
    expect(dropRight([1, 2, 3])).toEqual([1, 2]);
  });

  test('should drop the specified number of elements from the end', () => {
    expect(dropRight([1, 2, 3, 4, 5], 2)).toEqual([1, 2, 3]);
  });

  test('should return an empty array if n is greater than or equal to the array length', () => {
    expect(dropRight([1, 2, 3], 3)).toEqual([]);
    expect(dropRight([1, 2, 3], 5)).toEqual([]);
  });

  test('should return a copy of the array if n is 0', () => {
    const original = [1, 2, 3];
    const result = dropRight(original, 0);
    expect(result).toEqual(original);
    expect(result).not.toBe(original);
  });

  test('should return an empty array if the input array is empty', () => {
    expect(dropRight([], 2)).toEqual([]);
  });

  test('should return an empty array for invalid n', () => {
    expect(dropRight([1, 2, 3], -1)).toEqual([]);
  });
});