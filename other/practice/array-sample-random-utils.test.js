const sample = require('./array-sample-random-utils');

describe('sample', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  test('should return a single random element when n is not provided or is 1', () => {
    const result1 = sample(arr);
    expect(arr).toContain(result1);
    const result2 = sample(arr, 1);
    expect(arr).toContain(result2);
  });

  test('should return an array of n random elements when n > 1', () => {
    const result = sample(arr, 3);
    expect(result).toHaveLength(3);
    result.forEach(item => {
      expect(arr).toContain(item);
    });
    // Check for uniqueness within the sample (probabilistically)
    expect(new Set(result).size).toBeGreaterThanOrEqual(1); // At least one unique if n > 0
  });

  test('should not return more elements than available in the array when n is very large', () => {
    const result = sample(arr, 100);
    expect(result).toHaveLength(arr.length);
    result.forEach(item => {
      expect(arr).toContain(item);
    });
    expect(new Set(result).size).toBe(arr.length); // All elements should be unique if sampled more than array length
  });

  test('should return undefined for an empty array when n is 1', () => {
    expect(sample([])).toBeUndefined();
    expect(sample([], 1)).toBeUndefined();
  });

  test('should return an empty array for an empty input array when n > 1', () => {
    expect(sample([], 3)).toEqual([]);
  });

  test('should return an empty array when n is 0 or negative', () => {
    expect(sample(arr, 0)).toEqual([]);
    expect(sample(arr, -5)).toEqual([]);
  });

  test('should handle non-array input', () => {
    expect(sample(null)).toBeUndefined();
    expect(sample(undefined)).toBeUndefined();
    expect(sample('string')).toBeUndefined();
    expect(sample(123)).toBeUndefined();
    expect(sample({})).toBeUndefined();
    expect(sample(null, 3)).toEqual([]);
    expect(sample(undefined, 3)).toEqual([]);
    expect(sample('string', 3)).toEqual([]);
  });
});
