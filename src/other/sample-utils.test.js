import { sample, sampleSize } from './sample-utils.js';

describe('sample', () => {
  const array = [1, 2, 3, 4, 5];

  test('should return a single element from the array', () => {
    const result = sample(array);
    expect(array).toContain(result);
  });

  test('should return undefined for an empty array', () => {
    expect(sample([])).toBeUndefined();
  });

  test('should return undefined for non-array inputs', () => {
    expect(sample(null)).toBeUndefined();
    expect(sample({})).toBeUndefined();
    expect(sample(123)).toBeUndefined();
  });
});

describe('sampleSize', () => {
  const array = [1, 2, 3, 4, 5];

  test('should return an array of the specified size', () => {
    const result = sampleSize(array, 3);
    expect(result).toHaveLength(3);
  });

  test('should return elements that are all from the original array', () => {
    const result = sampleSize(array, 3);
    result.forEach(item => {
      expect(array).toContain(item);
    });
  });

  test('should return unique elements', () => {
    const result = sampleSize(array, 3);
    const uniqueResult = [...new Set(result)];
    expect(result).toEqual(uniqueResult);
  });

  test('should return an empty array if n is 0', () => {
    expect(sampleSize(array, 0)).toEqual([]);
  });

  test('should return a shuffled copy of the array if n is greater than array length', () => {
    const result = sampleSize(array, 10);
    expect(result).toHaveLength(5);
    expect(result.sort()).toEqual(array.sort());
  });

  test('should return an empty array for an empty array input', () => {
    expect(sampleSize([], 3)).toEqual([]);
  });

  test('should return an empty array for non-array inputs', () => {
    expect(sampleSize(null, 3)).toEqual([]);
    expect(sampleSize({}, 3)).toEqual([]);
  });

  test('should return one element if n is not provided', () => {
    const result = sampleSize(array);
    expect(result).toHaveLength(1);
    expect(array).toContain(result[0]);
  });
});