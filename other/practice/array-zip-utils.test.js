const arrayZip = require('./array-zip-utils');

describe('arrayZip', () => {
  test('should group corresponding elements from multiple arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = ['a', 'b', 'c'];
    const arr3 = [true, false, true];
    expect(arrayZip(arr1, arr2, arr3)).toEqual([
      [1, 'a', true],
      [2, 'b', false],
      [3, 'c', true],
    ]);
  });

  test('should handle arrays of different lengths, filling with undefined for missing elements', () => {
    const arr1 = [1, 2];
    const arr2 = ['a', 'b', 'c'];
    expect(arrayZip(arr1, arr2)).toEqual([
      [1, 'a'],
      [2, 'b'],
      [undefined, 'c'],
    ]);
  });

  test('should handle a single array input', () => {
    const arr = [1, 2, 3];
    expect(arrayZip(arr)).toEqual([
      [1],
      [2],
      [3],
    ]);
  });

  test('should handle empty arrays', () => {
    const arr1 = [];
    const arr2 = [1, 2];
    const arr3 = [];
    expect(arrayZip(arr1, arr2, arr3)).toEqual([
      [undefined, 1, undefined],
      [undefined, 2, undefined],
    ]);
  });

  test('should handle no arguments', () => {
    expect(arrayZip()).toEqual([]);
  });

  test('should throw TypeError if any argument is not an array', () => {
    expect(() => arrayZip([1, 2], null)).toThrow(TypeError);
    expect(() => arrayZip([1, 2], 'string')).toThrow(TypeError);
    expect(() => arrayZip(123, [1, 2])).toThrow(TypeError);
  });
});
