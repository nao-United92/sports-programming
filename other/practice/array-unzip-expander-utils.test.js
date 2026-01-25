const { unzip } = require('./array-unzip-expander-utils');

describe('unzip', () => {
  test('should unzip an array of arrays', () => {
    const zipped = [
      [1, 'a', true],
      [2, 'b', false],
      [3, 'c', true],
    ];
    expect(unzip(zipped)).toEqual([
      [1, 2, 3],
      ['a', 'b', 'c'],
      [true, false, true],
    ]);
  });

  test('should handle arrays with undefined values from uneven zipping', () => {
    const zipped = [
      [1, 'a'],
      [2, 'b'],
      [undefined, 'c'],
    ];
    expect(unzip(zipped)).toEqual([
      [1, 2, undefined],
      ['a', 'b', 'c'],
    ]);
  });

  test('should return an empty array if given an empty array', () => {
    expect(unzip([])).toEqual([]);
  });

  test('should handle an array of empty arrays', () => {
    expect(unzip([[], []])).toEqual([]);
  });

  test('should work correctly with single inner array', () => {
    const arr = [[1, 2, 3]];
    expect(unzip(arr)).toEqual([[1], [2], [3]]);
  });

  test('should handle single element inner arrays', () => {
    const arr = [[1], [2], [3]];
    expect(unzip(arr)).toEqual([[1, 2, 3]]);
  });
});
