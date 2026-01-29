import zip from './array-zip-utils';

describe('zip', () => {
  it('should combine multiple arrays into an array of arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = ['a', 'b', 'c'];
    const arr3 = [true, false, true];
    expect(zip(arr1, arr2, arr3)).toEqual([
      [1, 'a', true],
      [2, 'b', false],
      [3, 'c', true],
    ]);
  });

  it('should handle arrays of different lengths', () => {
    const arr1 = [1, 2];
    const arr2 = ['a', 'b', 'c'];
    expect(zip(arr1, arr2)).toEqual([
      [1, 'a'],
      [2, 'b'],
      [undefined, 'c'],
    ]);
  });

  it('should handle an empty array as input', () => {
    expect(zip([], ['a', 'b'])).toEqual([
      [undefined, 'a'],
      [undefined, 'b'],
    ]);
  });

  it('should return an empty array if no arrays are provided', () => {
    expect(zip()).toEqual([]);
  });

  it('should handle a single array', () => {
    expect(zip([1, 2, 3])).toEqual([[1], [2], [3]]);
  });

  it('should handle arrays with null or undefined elements', () => {
    const arr1 = [1, null, 3];
    const arr2 = ['a', undefined, 'c'];
    expect(zip(arr1, arr2)).toEqual([
      [1, 'a'],
      [null, undefined],
      [3, 'c'],
    ]);
  });
});