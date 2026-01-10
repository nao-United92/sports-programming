const { sampleSize } = require('./array-random-sample-generator.js');

describe('sampleSize', () => {
  test('should return an array of specified size', () => {
    const arr = [1, 2, 3, 4, 5];
    const size = 3;
    const result = sampleSize(arr, size);
    expect(result).toHaveLength(size);
  });

  test('should return an empty array if input array is empty', () => {
    expect(sampleSize([], 3)).toEqual([]);
  });

  test('should return an empty array if size is 0', () => {
    const arr = [1, 2, 3];
    expect(sampleSize(arr, 0)).toEqual([]);
  });

  test('should return all elements if size is greater than array length', () => {
    const arr = [1, 2, 3];
    const result = sampleSize(arr, 5);
    expect(result).toHaveLength(3);
    arr.forEach(item => expect(result).toContain(item));
  });

  test('should return elements that are present in the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sampleSize(arr, 2);
    result.forEach(item => expect(arr).toContain(item));
  });

  test('should return unique elements when size <= array length', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sampleSize(arr, 3);
    const uniqueResult = [...new Set(result)];
    expect(uniqueResult).toHaveLength(result.length);
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => sampleSize(null, 2)).toThrow('Expected an array for the first argument.');
    expect(() => sampleSize(undefined, 2)).toThrow('Expected an array for the first argument.');
    expect(() => sampleSize(123, 2)).toThrow('Expected an array for the first argument.');
  });

  test('should throw an error if the second argument is not a non-negative number', () => {
    expect(() => sampleSize([1, 2], 'abc')).toThrow('Expected a non-negative number for the second argument.');
    expect(() => sampleSize([1, 2], -1)).toThrow('Expected a non-negative number for the second argument.');
    expect(() => sampleSize([1, 2], null)).toThrow('Expected a non-negative number for the second argument.');
  });

  test('should work with default size (1)', () => {
    const arr = [1, 2, 3];
    const result = sampleSize(arr);
    expect(result).toHaveLength(1);
    expect(arr).toContain(result[0]);
  });
});
