import { sampleSize } from './array-sample-size';

describe('sampleSize', () => {
  test('should return an empty array for an empty input array', () => {
    expect(sampleSize([], 3)).toEqual([]);
  });

  test('should return an empty array for non-array input', () => {
    expect(sampleSize(null, 3)).toEqual([]);
    expect(sampleSize(undefined, 3)).toEqual([]);
    expect(sampleSize(123, 3)).toEqual([]);
    expect(sampleSize('string', 3)).toEqual([]);
  });

  test('should return an empty array if n is 0 or negative', () => {
    const arr = [1, 2, 3];
    expect(sampleSize(arr, 0)).toEqual([]);
    expect(sampleSize(arr, -1)).toEqual([]);
  });

  test('should return a single random element by default (n=1)', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sampleSize(arr);
    expect(result).toHaveLength(1);
    expect(arr).toContain(result[0]);
  });

  test('should return n random elements from the array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const size = 5;
    const result = sampleSize(arr, size);
    expect(result).toHaveLength(size);
    result.forEach((item) => expect(arr).toContain(item));
    // Ensure all elements in the result are unique
    expect(new Set(result).size).toBe(size);
  });

  test('should return all elements if n is greater than or equal to array length', () => {
    const arr = [1, 2, 3];
    const result1 = sampleSize(arr, 3);
    expect(result1).toHaveLength(3);
    expect(new Set(result1).size).toBe(3); // All elements should be unique

    const result2 = sampleSize(arr, 5);
    expect(result2).toHaveLength(3);
    expect(new Set(result2).size).toBe(3);
  });

  test('should not modify the original array', () => {
    const arr = [1, 2, 3];
    const originalArr = [...arr];
    sampleSize(arr, 2);
    expect(arr).toEqual(originalArr);
  });
});
