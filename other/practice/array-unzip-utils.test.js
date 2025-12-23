const unzip = require('./array-unzip-utils');

describe('unzip', () => {
  it('should unzip a zipped array', () => {
    const zipped = [['a', 1, true], ['b', 2, false]];
    expect(unzip(zipped)).toEqual([['a', 'b'], [1, 2], [true, false]]);
  });

  it('should handle unzipping arrays with different lengths', () => {
    const zipped = [['a', 1, true], ['b', 2], ['c']];
    expect(unzip(zipped)).toEqual([['a', 'b', 'c'], [1, 2, undefined], [true, undefined, undefined]]);
  });

  it('should return an empty array for an empty input array', () => {
    expect(unzip([])).toEqual([]);
  });

  it('should handle empty subarrays', () => {
    const zipped = [[], ['a'], []];
    expect(unzip(zipped)).toEqual([[undefined, 'a', undefined]]);
  });
});