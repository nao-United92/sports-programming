const without = require('./array-without-util');

describe('without', () => {
  it('should remove specified values from an array', () => {
    expect(without([1, 2, 3, 1, 2], 1, 2)).toEqual([3]);
  });

  it('should return a new array', () => {
    const arr = [1, 2, 3];
    const result = without(arr, 1);
    expect(result).not.toBe(arr);
    expect(result).toEqual([2, 3]);
  });

  it('should not modify the original array', () => {
    const arr = [1, 2, 3];
    without(arr, 1);
    expect(arr).toEqual([1, 2, 3]);
  });

  it('should do nothing if no values are specified for removal', () => {
    expect(without([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should handle an empty initial array', () => {
    expect(without([], 1, 2)).toEqual([]);
  });

  it('should work with different data types', () => {
    expect(without([1, 'a', true, null], 'a', null)).toEqual([1, true]);
  });
});
