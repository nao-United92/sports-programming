const arraySampleSize = require('./array-sample-size-utils');

describe('arraySampleSize', () => {
  test('should return an array of the specified size', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const sampleSize = 3;
    const result = arraySampleSize(arr, sampleSize);
    expect(result.length).toBe(sampleSize);
  });

  test('should return all elements if n is greater than or equal to array length', () => {
    const arr = [1, 2, 3];
    const result1 = arraySampleSize(arr, 5);
    expect(result1.length).toBe(3);
    expect(result1.sort()).toEqual(arr.sort()); // Check if all original elements are present

    const result2 = arraySampleSize(arr, 3);
    expect(result2.length).toBe(3);
    expect(result2.sort()).toEqual(arr.sort());
  });

  test('should return an empty array if n is 0', () => {
    const arr = [1, 2, 3];
    expect(arraySampleSize(arr, 0)).toEqual([]);
  });

  test('should return an empty array for an empty input array', () => {
    expect(arraySampleSize([], 5)).toEqual([]);
    expect(arraySampleSize([])).toEqual([]);
  });

  test('should contain elements only from the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arraySampleSize(arr, 3);
    result.forEach(element => {
      expect(arr).toContain(element);
    });
  });

  test('should return a single element by default (n=1)', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arraySampleSize(arr);
    expect(result.length).toBe(1);
    expect(arr).toContain(result[0]);
  });

  test('should throw an error if the input is not an array', () => {
    expect(() => arraySampleSize(null, 1)).toThrow('Expected an array for the first argument.');
    expect(() => arraySampleSize(123, 1)).toThrow('Expected an array for the first argument.');
  });

  test('should throw an error if n is not a non-negative number', () => {
    expect(() => arraySampleSize([1, 2], -1)).toThrow('Expected n to be a non-negative number.');
    expect(() => arraySampleSize([1, 2], 'abc')).toThrow('Expected n to be a non-negative number.');
  });
});
