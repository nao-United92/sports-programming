// other/practice/array-zip.test.js
const arrayZip = require('./array-zip');

describe('arrayZip', () => {
  test('should zip two arrays of equal length', () => {
    expect(arrayZip(['a', 'b'], [1, 2])).toEqual([
      ['a', 1],
      ['b', 2],
    ]);
  });

  test('should zip three arrays of equal length', () => {
    expect(arrayZip(['a', 'b'], [1, 2], [true, false])).toEqual([
      ['a', 1, true],
      ['b', 2, false],
    ]);
  });

  test('should handle arrays of different lengths (shorter arrays filled with undefined)', () => {
    expect(arrayZip(['a', 'b', 'c'], [1, 2])).toEqual([
      ['a', 1],
      ['b', 2],
      ['c', undefined],
    ]);
  });

  test('should handle arrays of different lengths (longer arrays determine length)', () => {
    expect(arrayZip([1, 2], ['a', 'b', 'c'])).toEqual([
      [1, 'a'],
      [2, 'b'],
      [undefined, 'c'],
    ]);
  });

  test('should return an empty array if no arrays are provided', () => {
    expect(arrayZip()).toEqual([]);
  });

  test('should handle empty arrays as input', () => {
    expect(arrayZip([], [], [])).toEqual([]);
    expect(arrayZip(['a', 'b'], [])).toEqual([
      ['a', undefined],
      ['b', undefined],
    ]);
  });

  test('should handle single array input', () => {
    expect(arrayZip([1, 2, 3])).toEqual([
      [1],
      [2],
      [3],
    ]);
  });

  test('should handle arrays with mixed types', () => {
    expect(arrayZip([1, 'b'], [true, null])).toEqual([
      [1, true],
      ['b', null],
    ]);
  });

  test('should handle non-array arguments, treating them as empty arrays (or undefined values)', () => {
    expect(arrayZip(['a', 'b'], null, [1, 2])).toEqual([
      ['a', undefined, 1],
      ['b', undefined, 2],
    ]);
    expect(arrayZip(['a', 'b'], undefined, [1, 2])).toEqual([
      ['a', undefined, 1],
      ['b', undefined, 2],
    ]);
  });
});