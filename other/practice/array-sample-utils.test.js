const { sample, sampleSize } = require('./array-sample-utils');

describe('sample', () => {
  const arr = [1, 2, 3, 4, 5];

  test('should return a single element from the array', () => {
    const result = sample(arr);
    expect(arr).toContain(result);
  });

  test('should return undefined for an empty array', () => {
    const result = sample([]);
    expect(result).toBeUndefined();
  });
});

describe('sampleSize', () => {
  const arr = [1, 2, 3, 4, 5];

  test('should return an array of specified size', () => {
    const result = sampleSize(arr, 3);
    expect(result).toHaveLength(3);
    result.forEach(item => expect(arr).toContain(item));
  });

  test('should return an array of size 1 if n is not specified', () => {
    const result = sampleSize(arr);
    expect(result).toHaveLength(1);
    expect(arr).toContain(result[0]);
  });

  test('should return all elements if n is greater than array length', () => {
    const result = sampleSize(arr, 10);
    expect(result).toHaveLength(arr.length);
    result.forEach(item => expect(arr).toContain(item));
  });

  test('should return an empty array for an empty input array', () => {
    const result = sampleSize([], 3);
    expect(result).toEqual([]);
  });

  test('should return an empty array if n is 0', () => {
    const result = sampleSize(arr, 0);
    expect(result).toEqual([]);
  });
});