import { sampleN } from './array-sample-n-utils.js';

describe('sampleN', () => {
  it('should return n random elements from the array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const n = 3;
    const result = sampleN(arr, n);
    expect(result.length).toBe(n);
    result.forEach(item => expect(arr).toContain(item));
    // Check for uniqueness (probabilistic, but highly likely for small n)
    expect(new Set(result).size).toBe(n);
  });

  it('should return all elements if n is greater than or equal to array length', () => {
    const arr = [1, 2, 3];
    const result = sampleN(arr, 5);
    expect(result.length).toBe(arr.length);
    result.forEach(item => expect(arr).toContain(item));
    expect(new Set(result).size).toBe(arr.length);
  });

  it('should return an empty array for an empty input array', () => {
    expect(sampleN([], 3)).toEqual([]);
  });

  it('should return an empty array if n is 0 or negative', () => {
    const arr = [1, 2, 3];
    expect(sampleN(arr, 0)).toEqual([]);
    expect(sampleN(arr, -1)).toEqual([]);
  });

  it('should return one random element if n is not specified', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sampleN(arr);
    expect(result.length).toBe(1);
    expect(arr).toContain(result[0]);
  });

  it('should not mutate the original array', () => {
    const arr = [1, 2, 3];
    const originalArr = [...arr];
    sampleN(arr, 2);
    expect(arr).toEqual(originalArr);
  });
});