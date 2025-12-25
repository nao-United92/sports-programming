const { unzip } = require('./array-unzip-utils.js');

describe('unzip', () => {
  it('should unzip a previously zipped array', () => {
    const zipped = [['a', 1, true], ['b', 2, false]];
    expect(unzip(zipped)).toEqual([['a', 'b'], [1, 2], [true, false]]);
  });

  it('should handle arrays with different lengths', () => {
    const zipped = [['a', 1], ['b', 2], ['c', undefined]];
    expect(unzip(zipped)).toEqual([['a', 'b', 'c'], [1, 2, undefined]]);
  });

  it('should return an empty array if the input is empty or invalid', () => {
    expect(unzip([])).toEqual([]);
    expect(unzip(null)).toEqual([]);
  });

  it('should handle nested empty arrays', () => {
    const zipped = [[], []];
    expect(unzip(zipped)).toEqual([]);
  });

  it('should work correctly with single-element arrays', () => {
    const zipped = [['a'], [1], [true]];
    expect(unzip(zipped)).toEqual([['a', 1, true]]);
  });
});
