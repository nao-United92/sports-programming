import sample from './array-sample-utils';

describe('sample', () => {
  test('should return a single random element by default', () => {
    const array = [1, 2, 3, 4, 5];
    const result = sample(array);
    expect(array).toContain(result);
  });

  test('should return `undefined` when sampling a single element from an empty array', () => {
    expect(sample([])).toBeUndefined();
  });

  test('should return an array of `n` random elements when `n` is specified', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const n = 3;
    const result = sample(array, n);
    expect(result).toHaveLength(n);
    result.forEach(element => {
      expect(array).toContain(element);
    });
  });

  test('should return an empty array when `n` is 0', () => {
    const array = [1, 2, 3];
    expect(sample(array, 0)).toEqual([]);
  });

  test('should return all elements if `n` is greater than or equal to array length', () => {
    const array = [1, 2, 3];
    const result = sample(array, 5);
    expect(result).toHaveLength(array.length);
    expect(result).toEqual(expect.arrayContaining(array));
  });

  test('should not modify the original array when returning multiple samples', () => {
    const originalArray = [1, 2, 3, 4, 5];
    sample(originalArray, 3);
    expect(originalArray).toEqual([1, 2, 3, 4, 5]);
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => sample(null)).toThrow(TypeError);
    expect(() => sample(undefined)).toThrow(TypeError);
    expect(() => sample('string')).toThrow(TypeError);
  });

  test('should throw TypeError if n is not a non-negative integer', () => {
    const array = [1, 2, 3];
    expect(() => sample(array, -1)).toThrow(TypeError);
    expect(() => sample(array, 1.5)).toThrow(TypeError);
    expect(() => sample(array, '2')).toThrow(TypeError);
    expect(() => sample(array, null)).toThrow(TypeError);
  });

  test('returned elements should be distinct when sampling multiple elements', () => {
    const array = [1, 2, 3, 4, 5];
    const result = sample(array, 3);
    const uniqueResults = new Set(result);
    expect(uniqueResults.size).toBe(result.length);
  });
});