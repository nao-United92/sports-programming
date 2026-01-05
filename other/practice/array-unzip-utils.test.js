const arrayUnzip = require('./array-unzip-utils');

describe('arrayUnzip', () => {
  test('should ungroup elements from a zipped array', () => {
    const zipped = [
      [1, 'a', true],
      [2, 'b', false],
      [3, 'c', true],
    ];
    const expected = [
      [1, 2, 3],
      ['a', 'b', 'c'],
      [true, false, true],
    ];
    expect(arrayUnzip(zipped)).toEqual(expected);
  });

  test('should handle arrays with varying lengths, filling with undefined', () => {
    const zipped = [
      [1, 'a'],
      [2, 'b'],
      [undefined, 'c'],
    ];
    const expected = [
      [1, 2, undefined],
      ['a', 'b', 'c'],
    ];
    expect(arrayUnzip(zipped)).toEqual(expected);
  });

  test('should handle an empty input array', () => {
    expect(arrayUnzip([])).toEqual([]);
  });

  test('should handle an input array containing empty arrays', () => {
    const zipped = [
      [],
      [],
      []
    ];
    expect(arrayUnzip(zipped)).toEqual([]);
  });

  test('should handle an input array with a single sub-array', () => {
    const zipped = [
      [1, 2, 3]
    ];
    expect(arrayUnzip(zipped)).toEqual([
      [1],
      [2],
      [3]
    ]);
  });

  test('should throw TypeError if argument is not an array', () => {
    expect(() => arrayUnzip(null)).toThrow(TypeError);
    expect(() => arrayUnzip(123)).toThrow(TypeError);
    expect(() => arrayUnzip('string')).toThrow(TypeError);
  });

  test('should throw TypeError if input array contains non-array elements', () => {
    const invalidZipped = [
      [1, 2], 'a', [3, 4]
    ];
    expect(() => arrayUnzip(invalidZipped)).toThrow(TypeError);
  });
});
