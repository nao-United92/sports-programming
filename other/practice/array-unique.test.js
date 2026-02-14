const { uniqueArray } = require('./array-unique');

describe('uniqueArray', () => {
  test('should return unique elements from an array of numbers', () => {
    const arr = [1, 2, 2, 3, 4, 4, 5];
    expect(uniqueArray(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return unique elements from an array of strings', () => {
    const arr = ['a', 'b', 'a', 'c', 'b'];
    expect(uniqueArray(arr)).toEqual(['a', 'b', 'c']);
  });

  test('should handle arrays with mixed types (numbers and strings)', () => {
    const arr = [1, '1', 2, 1, '2'];
    expect(uniqueArray(arr)).toEqual([1, '1', 2, '2']);
  });

  test('should return the same array if all elements are already unique', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(uniqueArray(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return an empty array if given an empty array', () => {
    expect(uniqueArray([])).toEqual([]);
  });

  test('should return an array with one element if given an array with all duplicate elements', () => {
    const arr = [1, 1, 1, 1];
    expect(uniqueArray(arr)).toEqual([1]);
  });

  test('should handle arrays with null and undefined values', () => {
    const arr = [null, undefined, null, 1, undefined];
    expect(uniqueArray(arr)).toEqual([null, undefined, 1]);
  });

  test('should handle arrays with objects (by reference)', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const arr = [obj1, obj2, obj1];
    expect(uniqueArray(arr)).toEqual([obj1, obj2]);
  });

  test('should throw an error if the argument is not an array', () => {
    expect(() => uniqueArray('not an array')).toThrow(TypeError);
    expect(() => uniqueArray(null)).toThrow(TypeError);
    expect(() => uniqueArray(undefined)).toThrow(TypeError);
    expect(() => uniqueArray(123)).toThrow(TypeError);
    expect(() => uniqueArray({})).toThrow(TypeError);
  });
});
