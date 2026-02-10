import arrayUnique from './array-unique';

describe('arrayUnique', () => {
  test('should return unique elements from an array of numbers', () => {
    expect(arrayUnique([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return unique elements from an array of strings', () => {
    expect(arrayUnique(['a', 'b', 'a', 'c', 'b'])).toEqual(['a', 'b', 'c']);
  });

  test('should handle mixed types correctly', () => {
    expect(arrayUnique([1, '1', 2, 1])).toEqual([1, '1', 2]);
  });

  test('should return an empty array if an empty array is provided', () => {
    expect(arrayUnique([])).toEqual([]);
  });

  test('should return the same array if all elements are unique', () => {
    const arr = [1, 2, 3];
    expect(arrayUnique(arr)).toEqual(arr);
  });

  test('should handle arrays with null and undefined values', () => {
    expect(arrayUnique([1, null, 2, undefined, null, 1])).toEqual([1, null, 2, undefined]);
  });
});
