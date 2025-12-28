const { unzip } = require('./array-unzip-utils');

describe('unzip', () => {
  it('should unzip a zipped array', () => {
    const zipped = [['a', 1, true], ['b', 2, false]];
    expect(unzip(zipped)).toEqual([['a', 'b'], [1, 2], [true, false]]);
  });

  it('should handle arrays with different lengths', () => {
    const zipped = [['a', 1, true], ['b', 2]];
    zipped[1].length = 2; // Manually set length to avoid dense/sparse issues in test writing
    expect(unzip(zipped)).toEqual([['a', 'b'], [1, 2], [true, undefined]]);
  });

  it('should return an empty array if given an empty array', () => {
    expect(unzip([])).toEqual([]);
  });

  it('should handle arrays with empty subarrays', () => {
    expect(unzip([[], []])).toEqual([]);
  });

  it('should handle null or undefined input', () => {
    expect(unzip(null)).toEqual([]);
    expect(unzip(undefined)).toEqual([]);
  });
});
