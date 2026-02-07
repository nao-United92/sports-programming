const { flatMap } = require('./array-mapper-flattener');

describe('flatMap', () => {
  it('should map and flatten an array', () => {
    const arr = [1, 2, 3];
    const result = flatMap(arr, (x) => [x, x * 2]);
    expect(result).toEqual([1, 2, 2, 4, 3, 6]);
  });

  it('should handle an empty array', () => {
    const arr = [];
    const result = flatMap(arr, (x) => [x, x * 2]);
    expect(result).toEqual([]);
  });

  it('should handle no flattening needed', () => {
    const arr = [1, 2, 3];
    const result = flatMap(arr, (x) => x * 2);
    expect(result).toEqual([2, 4, 6]);
  });

  it('should handle nested arrays returned by callback', () => {
    const arr = [1, 2];
    const result = flatMap(arr, (x) => [[x], [x * 10]]);
    // flat() only flattens one level by default
    expect(result).toEqual([[1], [10], [2], [20]]);
  });

  it('should return an empty array for non-array input', () => {
    expect(flatMap(null, (x) => x)).toEqual([]);
    expect(flatMap(undefined, (x) => x)).toEqual([]);
    expect(flatMap('string', (x) => x)).toEqual([]);
  });

  it('should return an empty array for non-function callback', () => {
    const arr = [1, 2];
    expect(flatMap(arr, null)).toEqual([]);
    expect(flatMap(arr, 'string')).toEqual([]);
  });
});
