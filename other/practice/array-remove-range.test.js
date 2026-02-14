const { removeRange } = require('./array-remove-range');

describe('removeRange', () => {
  const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  test('should remove elements from the middle of the array', () => {
    expect(removeRange(originalArray, 3, 6)).toEqual([1, 2, 3, 8, 9, 10]); // Removes 4, 5, 6, 7
  });

  test('should remove elements from the beginning of the array', () => {
    expect(removeRange(originalArray, 0, 2)).toEqual([4, 5, 6, 7, 8, 9, 10]); // Removes 1, 2, 3
  });

  test('should remove elements from the end of the array', () => {
    expect(removeRange(originalArray, 7, 9)).toEqual([1, 2, 3, 4, 5, 6, 7]); // Removes 8, 9, 10
  });

  test('should remove all elements if range covers entire array', () => {
    expect(removeRange(originalArray, 0, 9)).toEqual([]);
  });

  test('should return original array if range is invalid (startIndex > endIndex)', () => {
    expect(() => removeRange(originalArray, 5, 2)).toThrow('startIndex cannot be greater than endIndex');
  });

  test('should return original array if range is outside array bounds (start and end too high)', () => {
    expect(removeRange(originalArray, 10, 12)).toEqual(originalArray);
  });

  test('should return original array if no elements are removed', () => {
    expect(removeRange(originalArray, 100, 101)).toEqual(originalArray);
    expect(removeRange(originalArray, 5, 5)).toEqual([1, 2, 3, 4, 5, 7, 8, 9, 10]); // Removes only 6
  });

  test('should return a new array reference', () => {
    const result = removeRange(originalArray, 0, 1);
    expect(result).not.toBe(originalArray);
  });

  test('should not modify the original array', () => {
    const originalArrayCopy = [...originalArray];
    removeRange(originalArray, 0, 1);
    expect(originalArray).toEqual(originalArrayCopy);
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => removeRange('not an array', 0, 1)).toThrow(TypeError);
    expect(() => removeRange(null, 0, 1)).toThrow(TypeError);
  });

  test('should throw TypeError if startIndex or endIndex are not non-negative integers', () => {
    expect(() => removeRange(originalArray, '0', 1)).toThrow(TypeError);
    expect(() => removeRange(originalArray, 0, '1')).toThrow(TypeError);
    expect(() => removeRange(originalArray, -1, 1)).toThrow(TypeError);
    expect(() => removeRange(originalArray, 0.5, 1)).toThrow(TypeError);
  });
});
