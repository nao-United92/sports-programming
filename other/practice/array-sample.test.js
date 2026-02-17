import arraySample from './array-sample';

describe('arraySample', () => {
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  test('should return a single random element when n is not specified or 1', () => {
    const sample = arraySample(testArray);
    expect(testArray).toContain(sample);
  });

  test('should return an array of n random elements when n is specified', () => {
    const n = 3;
    const samples = arraySample(testArray, n);
    expect(samples).toHaveLength(n);
    samples.forEach(s => expect(testArray).toContain(s));
    // Test for uniqueness of samples if n <= array.length
    if (n <= testArray.length) {
      expect(new Set(samples).size).toBe(n);
    }
  });

  test('should return an empty array if the input array is empty and n > 0', () => {
    expect(arraySample([], 5)).toEqual([]);
  });

  test('should return undefined if the input array is empty and n is not specified or 1', () => {
    expect(arraySample([])).toBeUndefined();
    expect(arraySample([], 1)).toBeUndefined();
  });

  test('should return an empty array if n is 0', () => {
    expect(arraySample(testArray, 0)).toEqual([]);
  });

  test('should return all elements (shuffled) if n is greater than or equal to array length', () => {
    const samples = arraySample(testArray, testArray.length);
    expect(samples).toHaveLength(testArray.length);
    expect(samples.sort((a, b) => a - b)).toEqual(testArray.sort((a, b) => a - b));
    expect(samples).not.toBe(testArray); // Ensure it's a new array
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => arraySample(null)).toThrow('Expected an array for the first argument.');
    expect(() => arraySample(undefined)).toThrow('Expected an array for the first argument.');
  });

  test('should throw an error if n is not a non-negative integer', () => {
    expect(() => arraySample(testArray, -1)).toThrow('Expected a non-negative integer for the second argument.');
    expect(() => arraySample(testArray, 1.5)).toThrow('Expected a non-negative integer for the second argument.');
    expect(() => arraySample(testArray, 'string')).toThrow('Expected a non-negative integer for the second argument.');
  });
});
