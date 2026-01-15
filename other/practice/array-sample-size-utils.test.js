import { sampleSize } from './array-sample-size-utils.js';

describe('sampleSize', () => {
  const arr = [1, 2, 3, 4, 5];

  test('should return an array of n random elements', () => {
    const result = sampleSize(arr, 3);
    expect(result).toHaveLength(3);
    result.forEach(item => expect(arr).toContain(item));
  });

  test('should return all elements if n is greater than array length', () => {
    const result = sampleSize(arr, 10);
    expect(result).toHaveLength(5);
    expect(result.sort()).toEqual(arr.sort());
  });

  test('should return one element by default', () => {
    const result = sampleSize(arr);
    expect(result).toHaveLength(1);
    expect(arr).toContain(result[0]);
  });

  test('should return an empty array for an empty array', () => {
    expect(sampleSize([], 2)).toEqual([]);
  });
});