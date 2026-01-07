const { fill } = require('./array-fill-utils');

describe('fill', () => {
  test('should fill the entire array with a value when start and end are not specified', () => {
    const array = [1, 2, 3, 4, 5];
    const originalArray = [...array];
    const result = fill(array, 0);
    expect(result).toEqual([0, 0, 0, 0, 0]);
    expect(array).toEqual([0, 0, 0, 0, 0]); // Original array is mutated
    expect(result).toBe(array); // Should return the mutated original array
  });

  test('should fill a portion of an array with a value', () => {
    const array = [1, 2, 3, 4, 5];
    const result = fill(array, 0, 1, 4);
    expect(result).toEqual([1, 0, 0, 0, 5]);
    expect(array).toEqual([1, 0, 0, 0, 5]); // Original array is mutated
  });

  test('should handle start and end with negative values', () => {
    const array = [1, 2, 3, 4, 5];
    const result = fill(array, '*', -3, -1); // Fills from index 2 to 4 (exclusive)
    expect(result).toEqual([1, 2, '*', '*', 5]);
    expect(array).toEqual([1, 2, '*', '*', 5]);
  });

  test('should handle start and end values out of bounds', () => {
    const array = [1, 2, 3];
    const result = fill(array, 0, -10, 10); // Fills entire array
    expect(result).toEqual([0, 0, 0]);
  });

  test('should handle an empty array', () => {
    const array = [];
    const result = fill(array, 0);
    expect(result).toEqual([]);
    expect(array).toEqual([]);
  });

  test('should throw TypeError if the first argument is not an array', () => {
    expect(() => fill(null, 1)).toThrow(TypeError);
    expect(() => fill(null, 1)).toThrow('Expected an array for the first argument.');
    expect(() => fill(undefined, 1)).toThrow(TypeError);
    expect(() => fill({}, 1)).toThrow(TypeError);
  });

  test('should correctly fill when end is omitted', () => {
    const array = [1, 2, 3, 4, 5];
    const result = fill(array, 'x', 2);
    expect(result).toEqual([1, 2, 'x', 'x', 'x']);
  });

  test('should not fill if start is greater than or equal to end', () => {
    const array = [1, 2, 3];
    const originalArray = [...array];
    fill(array, 0, 2, 2);
    expect(array).toEqual(originalArray);
    fill(array, 0, 3, 2);
    expect(array).toEqual(originalArray);
  });
});
