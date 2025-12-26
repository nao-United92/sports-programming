const {
  unzip
} = require('./array-unzip-utils');

describe('unzip', () => {
  test('should unzip a zipped array', () => {
    const zipped = [
      ['a', 1, true],
      ['b', 2, false]
    ];
    const unzipped = [
      ['a', 'b'],
      [1, 2],
      [true, false]
    ];
    expect(unzip(zipped)).toEqual(unzipped);
  });

  test('should handle arrays with different lengths', () => {
    const zipped = [
      ['a', 1],
      ['b', 2],
      ['c']
    ];
    const unzipped = [
      ['a', 'b', 'c'],
      [1, 2, undefined]
    ];
    expect(unzip(zipped)).toEqual(unzipped);
  });

  test('should return an empty array for an empty input array', () => {
    expect(unzip([])).toEqual([]);
  });

  test('should handle non-array input', () => {
    expect(unzip(null)).toEqual([]);
    expect(unzip(undefined)).toEqual([]);
  });
});