const { zip } = require('./array-zip-utils');

describe('zip', () => {
  it('should zip arrays of same length', () => {
    expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([['a', 1, true], ['b', 2, false]]);
  });

  it('should zip arrays of different lengths by padding with undefined', () => {
    expect(zip(['a'], [1, 2], [true, false, true])).toEqual([['a', 1, true], [undefined, 2, false], [undefined, undefined, true]]);
  });

  it('should return an empty array if no arrays are provided', () => {
    expect(zip()).toEqual([]);
  });

  it('should handle empty arrays', () => {
    expect(zip([], [1, 2])).toEqual([[undefined, 1], [undefined, 2]]);
  });

  it('should handle a single array', () => {
    expect(zip([1, 2, 3])).toEqual([[1], [2], [3]]);
  });
});
