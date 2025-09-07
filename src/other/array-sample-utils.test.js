import { sample, sampleSize } from './array-sample-utils';

describe('sample', () => {
  it('should return an element from the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sample(arr);
    expect(arr).toContain(result);
  });

  it('should return undefined for an empty array', () => {
    expect(sample([])).toBeUndefined();
  });

  it('should return undefined for non-array inputs', () => {
    expect(sample(null)).toBeUndefined();
    expect(sample(undefined)).toBeUndefined();
    expect(sample({})).toBeUndefined();
    expect(sample('string')).toBeUndefined();
  });

  it('should work with an array of one element', () => {
    expect(sample([1])).toBe(1);
  });
});

describe('sampleSize', () => {
  it('should return an array of the specified size', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sampleSize(arr, 3);
    expect(result.length).toBe(3);
  });

  it('should return an array containing elements from the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sampleSize(arr, 3);
    result.forEach(item => {
      expect(arr).toContain(item);
    });
  });

  it('should return all elements if n is greater than or equal to array length', () => {
    const arr = [1, 2, 3];
    const result = sampleSize(arr, 5);
    expect(result.length).toBe(3);
    expect(result).toEqual(expect.arrayContaining(arr));
  });

  it('should return an empty array for an empty input array', () => {
    expect(sampleSize([], 3)).toEqual([]);
  });

  it('should return an empty array if n is 0', () => {
    const arr = [1, 2, 3];
    expect(sampleSize(arr, 0)).toEqual([]);
  });

  it('should return an empty array for non-array inputs', () => {
    expect(sampleSize(null, 2)).toEqual([]);
    expect(sampleSize(undefined, 2)).toEqual([]);
  });
});
