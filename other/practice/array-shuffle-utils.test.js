const arrayShuffle = require('./array-shuffle-utils');

describe('arrayShuffle', () => {
  test('should return a shuffled array with the same elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = arrayShuffle(arr);
    expect(shuffled).toHaveLength(arr.length);
    expect(shuffled.sort()).toEqual(arr.sort());
    // It's highly probable to be different, but not guaranteed
    // For a robust test, check that elements are present and count matches
    arr.forEach(item => expect(shuffled).toContain(item));
    expect(shuffled.length).toBe(arr.length);
  });

  test('should shuffle the array in place if inPlace is true', () => {
    const arr = [1, 2, 3, 4, 5];
    const originalArr = [...arr];
    const shuffled = arrayShuffle(arr, true);
    expect(shuffled).toBe(arr); // Check for reference equality
    expect(shuffled).toHaveLength(originalArr.length);
    expect(shuffled.sort()).toEqual(originalArr.sort());
  });

  test('should return a new array if inPlace is false or not specified', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = arrayShuffle(arr);
    expect(shuffled).not.toBe(arr); // Check for reference inequality
  });

  test('should handle empty array', () => {
    const arr = [];
    const shuffled = arrayShuffle(arr);
    expect(shuffled).toEqual([]);
  });

  test('should handle single element array', () => {
    const arr = [1];
    const shuffled = arrayShuffle(arr);
    expect(shuffled).toEqual([1]);
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => arrayShuffle(null)).toThrow(TypeError);
    expect(() => arrayShuffle('string')).toThrow(TypeError);
    expect(() => arrayShuffle(123)).toThrow(TypeError);
  });
});
