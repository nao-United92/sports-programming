const arrayUnique = require('./array-unique-utils');

describe('arrayUnique', () => {
  test('should return unique elements from an array of numbers', () => {
    const arr = [1, 2, 2, 3, 4, 4, 5];
    expect(arrayUnique(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return unique elements from an array of strings', () => {
    const arr = ['a', 'b', 'b', 'c', 'a'];
    expect(arrayUnique(arr)).toEqual(['a', 'b', 'c']);
  });

  test('should handle empty arrays', () => {
    const arr = [];
    expect(arrayUnique(arr)).toEqual([]);
  });

  test('should handle arrays with no duplicates', () => {
    const arr = [1, 2, 3];
    expect(arrayUnique(arr)).toEqual([1, 2, 3]);
  });

  test('should handle mixed types if Set can compare them', () => {
    const arr = [1, '1', 2, 1, '2'];
    expect(arrayUnique(arr)).toEqual([1, '1', 2, '2']);
  });

  test('should throw an error if the input is not an array', () => {
    expect(() => arrayUnique(null)).toThrow('Expected an array for the first argument.');
    expect(() => arrayUnique(undefined)).toThrow('Expected an array for the first argument.');
    expect(() => arrayUnique('string')).toThrow('Expected an array for the first argument.');
    expect(() => arrayUnique(123)).toThrow('Expected an array for the first argument.');
    expect(() => arrayUnique({})).toThrow('Expected an array for the first argument.');
  });
});
