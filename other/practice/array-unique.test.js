import arrayUnique from './array-unique';

describe('arrayUnique', () => {
  test('should return an array with unique elements', () => {
    const arr = [1, 2, 2, 3, 4, 4, 5];
    expect(arrayUnique(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle empty arrays', () => {
    const arr = [];
    expect(arrayUnique(arr)).toEqual([]);
  });

  test('should handle arrays with all unique elements', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arrayUnique(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [1, 'a', 2, 'b', 'a', 1];
    expect(arrayUnique(arr)).toEqual([1, 'a', 2, 'b']);
  });

  test('should throw an error if the argument is not an array', () => {
    expect(() => arrayUnique(null)).toThrow('Expected an array for the first argument.');
    expect(() => arrayUnique(undefined)).toThrow('Expected an array for the first argument.');
    expect(() => arrayUnique('string')).toThrow('Expected an array for the first argument.');
    expect(() => arrayUnique(123)).toThrow('Expected an array for the first argument.');
    expect(() => arrayUnique({})).toThrow('Expected an array for the first argument.');
  });
});
