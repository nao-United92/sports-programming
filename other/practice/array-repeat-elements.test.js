const { times } = require('./array-repeat-elements');

describe('times', () => {
  it('should repeat array elements the specified number of times', () => {
    expect(times([1, 2], 3)).toEqual([1, 2, 1, 2, 1, 2]);
  });

  it('should handle an empty array', () => {
    expect(times([], 5)).toEqual([]);
  });

  it('should return an empty array if count is 0', () => {
    expect(times([1, 2, 3], 0)).toEqual([]);
  });
  
  it('should return the original array (shallow copy) if count is 1', () => {
    const arr = [1, 2, 3];
    const result = times(arr, 1);
    expect(result).toEqual([1, 2, 3]);
    expect(result).not.toBe(arr); // Ensure it's a new array
  });

  it('should work with different data types', () => {
    expect(times(['a', { b: 1 }], 2)).toEqual(['a', { b: 1 }, 'a', { b: 1 }]);
  });

  it('should throw an error if not given an array as the first argument', () => {
    expect(() => times('not an array', 2)).toThrow(TypeError);
  });

  it('should throw an error if count is not a non-negative integer', () => {
    expect(() => times([1], -1)).toThrow(TypeError);
    expect(() => times([1], 1.5)).toThrow(TypeError);
    expect(() => times([1], 'two')).toThrow(TypeError);
  });
});