const { sampleSize } = require('./array-sample-size-utils');

describe('sampleSize', () => {
  test('should return an array of the specified size', () => {
    const array = [1, 2, 3, 4, 5];
    const size = 3;
    const result = sampleSize(array, size);
    expect(result).toHaveLength(size);
  });

  test('should return elements that exist in the original array', () => {
    const array = [1, 2, 3, 4, 5];
    const size = 2;
    const result = sampleSize(array, size);
    result.forEach(element => {
      expect(array).toContain(element);
    });
  });

  test('should return the entire array if n is greater than or equal to the array length', () => {
    const array = [1, 2, 3];
    expect(sampleSize(array, 5)).toHaveLength(3);
    expect(sampleSize(array, 3)).toHaveLength(3);
  });

  test('should return an empty array if the input array is empty', () => {
    expect(sampleSize([], 2)).toEqual([]);
  });

  test('should return an empty array if n is less than 0', () => {
    expect(sampleSize([1, 2, 3], -1)).toEqual([]);
  });

  test('should return a single random element by default', () => {
    const array = [1, 2, 3, 4, 5];
    const result = sampleSize(array);
    expect(result).toHaveLength(1);
    expect(array).toContain(result[0]);
  });

  test('should not modify the original array', () => {
    const original = [1, 2, 3];
    sampleSize(original, 2);
    expect(original).toEqual([1, 2, 3]);
  });
});