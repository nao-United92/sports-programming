const { sampleSize } = require('./array-sample-size-utils');

describe('sampleSize', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  test('should return a sample of the specified size', () => {
    const size = 3;
    const result = sampleSize(array, size);
    expect(result).toHaveLength(size);
    result.forEach(item => {
      expect(array).toContain(item);
    });
    // Ensure the result is a new array and not a reference to the original
    expect(result).not.toBe(array);
  });

  test('should return a sample of default size 1 if n is not provided', () => {
    const result = sampleSize(array);
    expect(result).toHaveLength(1);
    expect(array).toContain(result[0]);
  });

  test('should return all elements if n is greater than array length', () => {
    const size = array.length + 5;
    const result = sampleSize(array, size);
    expect(result).toHaveLength(array.length);
    // Ensure all original elements are present in the result
    array.forEach(item => {
      expect(result).toContain(item);
    });
  });

  test('should return an empty array if n is 0', () => {
    const result = sampleSize(array, 0);
    expect(result).toEqual([]);
  });

  test('should return an empty array if n is negative', () => {
    const result = sampleSize(array, -3);
    expect(result).toEqual([]);
  });

  test('should return an empty array for an empty array input', () => {
    const result = sampleSize([], 3);
    expect(result).toEqual([]);
  });

  test('should return an empty array for non-array input', () => {
    expect(sampleSize(null, 2)).toEqual([]);
    expect(sampleSize(undefined, 1)).toEqual([]);
    expect(sampleSize({}, 3)).toEqual([]);
  });

  test('should return a new array instance even if the sample size is the same as the array length', () => {
    const result = sampleSize(array, array.length);
    expect(result).not.toBe(array);
    expect(result).toEqual(expect.arrayContaining(array));
    expect(array).toEqual(expect.arrayContaining(result));
  });

  test('should produce different samples across multiple calls', () => {
    const sample1 = sampleSize(array, 5);
    const sample2 = sampleSize(array, 5);
    // There's a very small chance they could be the same, but for practical purposes,
    // we expect them to be different. This test might fail rarely due to true randomness.
    expect(sample1).not.toEqual(sample2);
  });
});
