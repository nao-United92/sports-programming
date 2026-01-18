// other/practice/array-zip-utils.test.js

const arrayZip = require('./array-zip-utils');

describe('arrayZip', () => {
  test('should zip two arrays of the same length', () => {
    const arr1 = [1, 2, 3];
    const arr2 = ['a', 'b', 'c'];
    expect(arrayZip(arr1, arr2)).toEqual([
      [1, 'a'],
      [2, 'b'],
      [3, 'c'],
    ]);
  });

  test('should zip three arrays of the same length', () => {
    const arr1 = [1, 2];
    const arr2 = ['a', 'b'];
    const arr3 = [true, false];
    expect(arrayZip(arr1, arr2, arr3)).toEqual([
      [1, 'a', true],
      [2, 'b', false],
    ]);
  });

  test('should zip arrays of different lengths, truncating to the shortest', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = ['a', 'b'];
    expect(arrayZip(arr1, arr2)).toEqual([
      [1, 'a'],
      [2, 'b'],
    ]);
  });

  test('should return an empty array if no arrays are provided', () => {
    expect(arrayZip()).toEqual([]);
  });

  test('should return an empty array if one of the input arrays is empty', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [];
    expect(arrayZip(arr1, arr2)).toEqual([]);
  });

  test('should handle arrays with mixed types', () => {
    const arr1 = [1, 'hello', { key: 'value' }];
    const arr2 = [true, null, [1, 2]];
    expect(arrayZip(arr1, arr2)).toEqual([
      [1, true],
      ['hello', null],
      [{ key: 'value' }, [1, 2]],
    ]);
  });
});
