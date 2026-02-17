import arrayZip from './array-zip';

describe('arrayZip', () => {
  test('should zip two arrays of equal length', () => {
    const arr1 = [1, 2, 3];
    const arr2 = ['a', 'b', 'c'];
    expect(arrayZip(arr1, arr2)).toEqual([
      [1, 'a'],
      [2, 'b'],
      [3, 'c']
    ]);
  });

  test('should zip multiple arrays of equal length', () => {
    const arr1 = [1, 2];
    const arr2 = ['a', 'b'];
    const arr3 = [true, false];
    expect(arrayZip(arr1, arr2, arr3)).toEqual([
      [1, 'a', true],
      [2, 'b', false]
    ]);
  });

  test('should handle arrays of different lengths, filling with undefined', () => {
    const arr1 = [1, 2, 3];
    const arr2 = ['a', 'b'];
    expect(arrayZip(arr1, arr2)).toEqual([
      [1, 'a'],
      [2, 'b'],
      [3, undefined]
    ]);
  });

  test('should handle empty arrays', () => {
    const arr1 = [];
    const arr2 = ['a', 'b'];
    expect(arrayZip(arr1, arr2)).toEqual([
      [undefined, 'a'],
      [undefined, 'b']
    ]);
  });

  test('should handle all empty arrays', () => {
    expect(arrayZip([], [])).toEqual([]);
  });

  test('should throw an error if any argument is not an array', () => {
    const arr1 = [1, 2];
    expect(() => arrayZip(arr1, null)).toThrow('Expected all arguments to be arrays.');
    expect(() => arrayZip(undefined, arr1)).toThrow('Expected all arguments to be arrays.');
    expect(() => arrayZip(arr1, 'string')).toThrow('Expected all arguments to be arrays.');
  });
});
