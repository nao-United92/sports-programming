const zip = require('./array-zip-utils');

describe('zip', () => {
  it('should zip together arrays of the same length', () => {
    const result = zip(['a', 'b'], [1, 2], [true, false]);
    expect(result).toEqual([['a', 1, true], ['b', 2, false]]);
  });

  it('should zip together arrays of different lengths', () => {
    const result = zip(['a', 'b', 'c'], [1, 2], [true]);
    expect(result).toEqual([['a', 1, true], ['b', 2, undefined], ['c', undefined, undefined]]);
  });

  it('should return an empty array if no arrays are provided', () => {
    expect(zip()).toEqual([]);
  });

  it('should handle empty arrays', () => {
    const result = zip([], [1, 2], []);
    expect(result).toEqual([[undefined, 1, undefined], [undefined, 2, undefined]]);
  });

  it('should work with a single array', () => {
    const result = zip(['a', 'b', 'c']);
    expect(result).toEqual([['a'], ['b'], ['c']]);
  });
});
