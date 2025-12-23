const without = require('./array-without-utils');

describe('without', () => {
  it('should create an array excluding all given values', () => {
    expect(without([1, 2, 3, 1, 2], 1, 2)).toEqual([3]);
  });

  it('should handle a single value to exclude', () => {
    expect(without([1, 2, 3], 1)).toEqual([2, 3]);
  });

  it('should return the same array if no values are excluded', () => {
    expect(without([1, 2, 3], 4)).toEqual([1, 2, 3]);
  });

  it('should return an empty array if all values are excluded', () => {
    expect(without([1, 2, 3], 1, 2, 3)).toEqual([]);
  });

  it('should handle an empty input array', () => {
    expect(without([], 1, 2)).toEqual([]);
  });
});
