import { sample, sampleSize } from './sample-utils';

describe('sample', () => {
  const arr = [1, 2, 3, 4, 5];

  test('should return an element from the array', () => {
    const result = sample(arr);
    expect(arr).toContain(result);
  });

  test('should return undefined for an empty array', () => {
    expect(sample([])).toBeUndefined();
  });

  test('should return undefined for non-array input', () => {
    expect(sample(null)).toBeUndefined();
    expect(sample({})).toBeUndefined();
    expect(sample('string')).toBeUndefined();
  });
});

describe('sampleSize', () => {
  const arr = [1, 2, 3, 4, 5];

  test('should return an array of n elements', () => {
    const result = sampleSize(arr, 3);
    expect(result).toHaveLength(3);
  });

  test('should return elements that are all from the original array', () => {
    const result = sampleSize(arr, 3);
    result.forEach(item => {
      expect(arr).toContain(item);
    });
  });

  test('should return a shuffled subset of the array (unique elements)', () => {
    const result = sampleSize(arr, 4);
    const uniqueResult = [...new Set(result)];
    expect(uniqueResult).toHaveLength(4);
  });

  test('should return an empty array if n is 0', () => {
    expect(sampleSize(arr, 0)).toEqual([]);
  });

  test('should return all elements if n is greater than array length', () => {
    const result = sampleSize(arr, 10);
    expect(result).toHaveLength(5);
    expect(result.sort()).toEqual(arr.sort());
  });

  test('should return an empty array for an empty array input', () => {
    expect(sampleSize([], 3)).toEqual([]);
  });

  test('should return an empty array for non-array input', () => {
    expect(sampleSize(null, 2)).toEqual([]);
    expect(sampleSize({}, 2)).toEqual([]);
  });

  test('should default to n=1 if n is not provided', () => {
    const result = sampleSize(arr);
    expect(result).toHaveLength(1);
    expect(arr).toContain(result[0]);
  });
});
