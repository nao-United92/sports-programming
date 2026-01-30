// other/practice/array-unzip.test.js
const arrayUnzip = require('./array-unzip');

describe('arrayUnzip', () => {
  test('should unzip an array of grouped elements into separate arrays', () => {
    const zipped = [['a', 1, true], ['b', 2, false]];
    const unzipped = arrayUnzip(zipped);
    expect(unzipped).toEqual([
      ['a', 'b'],
      [1, 2],
      [true, false],
    ]);
  });

  test('should handle varying lengths of inner arrays in the zipped input', () => {
    const zipped = [['a', 1], ['b', 2], ['c', undefined]];
    const unzipped = arrayUnzip(zipped);
    expect(unzipped).toEqual([
      ['a', 'b', 'c'],
      [1, 2, undefined],
    ]);
  });

  test('should return an empty array for an empty input array', () => {
    expect(arrayUnzip([])).toEqual([]);
  });

  test('should handle single inner array in the zipped input', () => {
    const zipped = [['a'], ['b'], ['c']];
    const unzipped = arrayUnzip(zipped);
    expect(unzipped).toEqual([
      ['a', 'b', 'c'],
    ]);
  });

  test('should handle inner arrays with different lengths (leading to undefined)', () => {
    const zipped = [['a', 1], ['b', 2, 'extra'], ['c']];
    const unzipped = arrayUnzip(zipped);
    expect(unzipped).toEqual([
      ['a', 'b', 'c'],
      [1, 2, undefined],
      [undefined, 'extra', undefined],
    ]);
  });

  test('should handle non-array elements in the zipped input, treating them as undefined for unzipping', () => {
    const zipped = [['a', 1], 'not an array', ['c', 3]];
    const unzipped = arrayUnzip(zipped);
    expect(unzipped).toEqual([
      ['a', undefined, 'c'],
      [1, undefined, 3],
    ]);
  });

  test('should return an empty array if zippedArray contains empty arrays only', () => {
    expect(arrayUnzip([[], [], []])).toEqual([]);
  });

  test('should return an empty array if input is not an array', () => {
    expect(arrayUnzip(null)).toEqual([]);
    expect(arrayUnzip(undefined)).toEqual([]);
    expect(arrayUnzip('string')).toEqual([]);
    expect(arrayUnzip(123)).toEqual([]);
    expect(arrayUnzip({})).toEqual([]);
  });
});
