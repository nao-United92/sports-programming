const arrayZip = require('./array-zip-utils');

describe('arrayZip', () => {
  test('should zip two arrays of equal length', () => {
    const arr1 = [1, 2, 3];
    const arr2 = ['a', 'b', 'c'];
    expect(arrayZip(arr1, arr2)).toEqual([[1, 'a'], [2, 'b'], [3, 'c']]);
  });

  test('should zip multiple arrays of equal length', () => {
    const arr1 = [1, 2];
    const arr2 = ['a', 'b'];
    const arr3 = [true, false];
    expect(arrayZip(arr1, arr2, arr3)).toEqual([[1, 'a', true], [2, 'b', false]]);
  });

  test('should zip arrays of different lengths, padding with undefined', () => {
    const arr1 = [1, 2, 3];
    const arr2 = ['a', 'b'];
    expect(arrayZip(arr1, arr2)).toEqual([[1, 'a'], [2, 'b'], [3, undefined]]);
  });

  test('should handle empty arrays as input', () => {
    expect(arrayZip([], [])).toEqual([]);
    expect(arrayZip([1, 2], [])).toEqual([[1, undefined], [2, undefined]]);
    expect(arrayZip([], ['a', 'b'])).toEqual([[undefined, 'a'], [undefined, 'b']]);
  });

  test('should handle a single array input', () => {
    const arr1 = [1, 2, 3];
    expect(arrayZip(arr1)).toEqual([[1], [2], [3]]);
  });

  test('should handle no array inputs', () => {
    expect(arrayZip()).toEqual([]);
  });

  test('should throw an error if any argument is not an array', () => {
    expect(() => arrayZip([1, 2], null)).toThrow('Expected all arguments to be arrays.');
    expect(() => arrayZip([1, 2], 'string')).toThrow('Expected all arguments to be arrays.');
    expect(() => arrayZip(123, [4, 5])).toThrow('Expected all arguments to be arrays.');
  });
});