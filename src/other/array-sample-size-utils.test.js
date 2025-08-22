import { sampleSize } from './array-sample-size-utils';

describe('sampleSize', () => {
  it('should return an array of specified size', () => {
    const array = [1, 2, 3, 4, 5];
    const result = sampleSize(array, 3);
    expect(result.length).toBe(3);
  });

  it('should return an array containing elements from the original array', () => {
    const array = [1, 2, 3, 4, 5];
    const result = sampleSize(array, 2);
    result.forEach(item => {
      expect(array).toContain(item);
    });
  });

  it('should return all elements if n is greater than array length', () => {
    const array = [1, 2, 3];
    const result = sampleSize(array, 5);
    expect(result.length).toBe(3);
    expect(result).toEqual(expect.arrayContaining(array));
  });

  it('should return an empty array for an empty input array', () => {
    expect(sampleSize([], 3)).toEqual([]);
  });

  it('should return an empty array if n is 0', () => {
    const array = [1, 2, 3];
    expect(sampleSize(array, 0)).toEqual([]);
  });

  it('should return a single random element if n is not specified', () => {
    const array = [1, 2, 3, 4, 5];
    const result = sampleSize(array);
    expect(result.length).toBe(1);
    expect(array).toContain(result[0]);
  });

  it('should not modify the original array', () => {
    const array = [1, 2, 3, 4, 5];
    const originalArray = [...array];
    sampleSize(array, 2);
    expect(array).toEqual(originalArray);
  });
});
