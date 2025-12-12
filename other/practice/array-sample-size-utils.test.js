const { sampleSize } = require('./array-sample-size-utils');

describe('array-sample-size-utils', () => {
  const arr = [1, 2, 3, 4, 5];

  it('should return n elements from the array', () => {
    const result = sampleSize(arr, 3);
    expect(result).toHaveLength(3);
    result.forEach(item => {
      expect(arr).toContain(item);
    });
  });

  it('should return a single element if n is not provided', () => {
    const result = sampleSize(arr);
    expect(result).toHaveLength(1);
    expect(arr).toContain(result[0]);
  });

  it('should return all elements if n is greater than array length', () => {
    const result = sampleSize(arr, 10);
    expect(result).toHaveLength(5);
  });

  it('should return an empty array if n is 0', () => {
    const result = sampleSize(arr, 0);
    expect(result).toHaveLength(0);
  });

  it('should return an empty array for an empty array input', () => {
    const result = sampleSize([], 3);
    expect(result).toEqual([]);
  });

  it('should return an empty array for non-array input', () => {
    expect(sampleSize(null, 2)).toEqual([]);
    expect(sampleSize(undefined, 1)).toEqual([]);
    expect(sampleSize({}, 3)).toEqual([]);
  });
});
