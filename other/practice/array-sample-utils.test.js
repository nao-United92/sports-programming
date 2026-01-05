const arraySample = require('./array-sample-utils');

describe('arraySample', () => {
  test('should return a single random element when n is not specified', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arraySample(arr);
    expect(arr).toContain(result[0]);
    expect(result.length).toBe(1);
  });

  test('should return n random elements from the array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const n = 3;
    const result = arraySample(arr, n);
    expect(result.length).toBe(n);
    result.forEach(item => expect(arr).toContain(item));
    // Test that elements are unique within the sample (highly probable for small n)
    expect(new Set(result).size).toBe(n);
  });

  test('should return an empty array if n is 0', () => {
    const arr = [1, 2, 3];
    expect(arraySample(arr, 0)).toEqual([]);
  });

  test('should return all elements if n is greater than or equal to array length', () => {
    const arr = [1, 2, 3];
    const result = arraySample(arr, 5);
    expect(result.length).toBe(3);
    expect(arr).toEqual(expect.arrayContaining(result));
    expect(new Set(result).size).toBe(3); // Ensure uniqueness, as it should return the original distinct elements
  });

  test('should not modify the original array', () => {
    const arr = [1, 2, 3];
    arraySample(arr, 2);
    expect(arr).toEqual([1, 2, 3]);
  });

  test('should handle empty array gracefully', () => {
    expect(arraySample([], 2)).toEqual([]);
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => arraySample(null)).toThrow(TypeError);
    expect(() => arraySample('string')).toThrow(TypeError);
    expect(() => arraySample(123)).toThrow(TypeError);
  });

  test('should throw RangeError if n is a negative number', () => {
    expect(() => arraySample([1, 2, 3], -1)).toThrow(RangeError);
  });
});
