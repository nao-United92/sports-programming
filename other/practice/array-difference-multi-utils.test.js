const differenceMulti = require('./array-difference-multi-utils');

describe('differenceMulti', () => {
  test('should return elements in the first array not present in subsequent arrays', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [3, 4];
    const arr3 = [5, 6];
    expect(differenceMulti(arr1, arr2, arr3)).toEqual([1, 2]);
  });

  test('should handle empty subsequent arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [];
    expect(differenceMulti(arr1, arr2)).toEqual([1, 2, 3]);
  });

  test('should handle empty first array', () => {
    const arr1 = [];
    const arr2 = [1, 2];
    expect(differenceMulti(arr1, arr2)).toEqual([]);
  });

  test('should handle no subsequent arrays', () => {
    const arr1 = [1, 2, 3];
    expect(differenceMulti(arr1)).toEqual([1, 2, 3]);
  });

  test('should handle mixed types', () => {
    const arr1 = [1, 'a', null, undefined, 5];
    const arr2 = ['a', null];
    const arr3 = [undefined, 6];
    expect(differenceMulti(arr1, arr2, arr3)).toEqual([1, 5]);
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => differenceMulti(null, [1, 2])).toThrow('Expected the first argument to be an array');
    expect(() => differenceMulti(123, [1, 2])).toThrow('Expected the first argument to be an array');
  });

  test('should throw an error if any subsequent argument is not an array', () => {
    expect(() => differenceMulti([1, 2], null)).toThrow('Expected all subsequent arguments to be arrays');
    expect(() => differenceMulti([1, 2], [3], 'string')).toThrow('Expected all subsequent arguments to be arrays');
  });
});
