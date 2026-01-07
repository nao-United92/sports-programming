const { unzip } = require('./array-unzip-utils');

describe('unzip', () => {
  test('should ungroup elements from a zipped array', () => {
    const zipped = [
      ['a', 1, true],
      ['b', 2, false],
    ];
    const expected = [
      ['a', 'b'],
      [1, 2],
      [true, false],
    ];
    expect(unzip(zipped)).toEqual(expected);
  });

  test('should handle arrays with varying lengths, filling with undefined', () => {
    const zipped = [['a', 1], ['b', 2, false]];
    const expected = [
      ['a', 'b'],
      [1, 2],
      [undefined, false],
    ];
    expect(unzip(zipped)).toEqual(expected);
  });

  test('should handle an empty input array', () => {
    expect(unzip([])).toEqual([]);
  });

  test('should handle an input array containing empty arrays', () => {
    expect(unzip([[], []])).toEqual([]);
  });

  test('should handle an input array with a single sub-array', () => {
    const zipped = [[1, 2, 3]];
    expect(unzip(zipped)).toEqual([[1], [2], [3]]);
  });

  test('should return an empty array if argument is not an array', () => {
    expect(unzip(null)).toEqual([]);
    expect(unzip(undefined)).toEqual([]);
    expect(unzip({})).toEqual([]);
  });

  test('should handle non-array elements within the input array', () => {
    const invalidZipped = [['a', 1], null, ['b', 2]];
    const expected = [
      ['a', undefined, 'b'],
      [1, undefined, 2],
    ];
    expect(unzip(invalidZipped)).toEqual(expected);
  });

  test('should handle `undefined` and `null` values correctly', () => {
    const zipped = [['a', undefined], ['b', null]];
    const expected = [
        ['a', 'b'],
        [undefined, null]
    ];
    expect(unzip(zipped)).toEqual(expected);
  });
});
