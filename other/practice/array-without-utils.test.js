const arrayWithout = require('./array-without-utils');

describe('arrayWithout', () => {
  test('should remove specified numbers from an array', () => {
    const arr = [1, 2, 3, 1, 4, 5];
    expect(arrayWithout(arr, 1, 5)).toEqual([2, 3, 4]);
  });

  test('should remove specified strings from an array', () => {
    const arr = ['a', 'b', 'c', 'a', 'd'];
    expect(arrayWithout(arr, 'a', 'd')).toEqual(['b', 'c']);
  });

  test('should handle cases where no values are specified to remove', () => {
    const arr = [1, 2, 3];
    expect(arrayWithout(arr)).toEqual([1, 2, 3]);
  });

  test('should handle cases where values to remove are not present in the array', () => {
    const arr = [1, 2, 3];
    expect(arrayWithout(arr, 4, 5)).toEqual([1, 2, 3]);
  });

  test('should handle empty arrays', () => {
    const arr = [];
    expect(arrayWithout(arr, 1, 2)).toEqual([]);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [1, 'a', null, undefined, 2, 'b'];
    expect(arrayWithout(arr, null, 'b')).toEqual([1, 'a', undefined, 2]);
  });

  test('should return a new array and not modify the original', () => {
    const arr = [1, 2, 3];
    const originalArr = [...arr];
    arrayWithout(arr, 1);
    expect(arr).toEqual(originalArr);
  });

  test('should throw an error if the input is not an array', () => {
    expect(() => arrayWithout(null, 1)).toThrow('Expected an array for the first argument.');
    expect(() => arrayWithout(undefined, 1)).toThrow('Expected an array for the first argument.');
    expect(() => arrayWithout('string', 1)).toThrow('Expected an array for the first argument.');
    expect(() => arrayWithout(123, 1)).toThrow('Expected an array for the first argument.');
    expect(() => arrayWithout({}, 1)).toThrow('Expected an array for the first argument.');
  });
});
