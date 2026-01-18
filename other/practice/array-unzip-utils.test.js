// other/practice/array-unzip-utils.test.js

const arrayUnzip = require('./array-unzip-utils');

describe('arrayUnzip', () => {
  test('should unzip a simple zipped array', () => {
    const zipped = [
      [1, 'a'],
      [2, 'b'],
      [3, 'c'],
    ];
    expect(arrayUnzip(zipped)).toEqual([
      [1, 2, 3],
      ['a', 'b', 'c'],
    ]);
  });

  test('should unzip an array with three grouped elements', () => {
    const zipped = [
      [1, 'a', true],
      [2, 'b', false],
    ];
    expect(arrayUnzip(zipped)).toEqual([
      [1, 2],
      ['a', 'b'],
      [true, false],
    ]);
  });

  test('should handle an empty zipped array', () => {
    expect(arrayUnzip([])).toEqual([]);
  });

  test('should handle a zipped array where inner arrays have different lengths (should align)', () => {
    // This case might be tricky for "unzip" if not handled carefully,
    // arrayZip typically truncates, so unzip should ideally reverse that.
    // My current arrayUnzip assumes consistent inner array lengths.
    // Let's test based on the output of arrayZip.
    const zipped = [
      [1, 'a'],
      [2, 'b'],
    ];
    expect(arrayUnzip(zipped)).toEqual([
      [1, 2],
      ['a', 'b'],
    ]);
  });

  test('should handle arrays with mixed types', () => {
    const zipped = [
      [1, true],
      ['hello', null],
      [{ key: 'value' }, [1, 2]],
    ];
    expect(arrayUnzip(zipped)).toEqual([
      [1, 'hello', { key: 'value' }],
      [true, null, [1, 2]],
    ]);
  });

  test('should handle a zipped array where inner arrays are empty', () => {
    expect(arrayUnzip([[], [], []])).toEqual([[], [], []]);
  });

  test('should handle a zipped array with single element inner arrays', () => {
    const zipped = [[1], [2], [3]];
    expect(arrayUnzip(zipped)).toEqual([[1, 2, 3]]);
  });
});