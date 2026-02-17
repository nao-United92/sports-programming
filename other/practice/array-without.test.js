import arrayWithout from './array-without';

describe('arrayWithout', () => {
  test('should create an array excluding specified values', () => {
    const arr = [1, 2, 3, 1, 2];
    expect(arrayWithout(arr, 1)).toEqual([2, 3, 2]);
    expect(arrayWithout(arr, 1, 2)).toEqual([3]);
    expect(arrayWithout(arr, 4)).toEqual([1, 2, 3, 1, 2]);
  });

  test('should handle an empty array', () => {
    const arr = [];
    expect(arrayWithout(arr, 1, 2)).toEqual([]);
  });

  test('should handle no values to exclude', () => {
    const arr = [1, 2, 3];
    expect(arrayWithout(arr)).toEqual([1, 2, 3]);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [1, 'a', 2, 'b', 1];
    expect(arrayWithout(arr, 1, 'b')).toEqual(['a', 2]);
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => arrayWithout(null, 1)).toThrow('Expected an array for the first argument.');
    expect(() => arrayWithout(undefined, 1)).toThrow('Expected an array for the first argument.');
    expect(() => arrayWithout('string', 1)).toThrow('Expected an array for the first argument.');
  });
});
