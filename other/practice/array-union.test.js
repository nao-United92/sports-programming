// other/practice/array-union.test.js
const arrayUnion = require('./array-union');

describe('arrayUnion', () => {
  test('should return all unique elements from both arrays', () => {
    expect(arrayUnion([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle arrays with duplicate elements within themselves', () => {
    expect(arrayUnion([1, 2, 1], [2, 3, 2])).toEqual([1, 2, 3]);
  });

  test('should handle empty input arrays', () => {
    expect(arrayUnion([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(arrayUnion([1, 2, 3], [])).toEqual([1, 2, 3]);
    expect(arrayUnion([], [])).toEqual([]);
  });

  test('should handle arrays with mixed data types', () => {
    expect(arrayUnion([1, 'a', 2], ['a', 3, null])).toEqual([1, 'a', 2, 3, null]);
  });

  test('should handle arrays with objects (reference equality)', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const obj3 = { c: 3 };
    expect(arrayUnion([obj1, obj2], [obj2, obj3])).toEqual([obj1, obj2, obj3]);
  });

  test('should return unique elements from the valid array if one input is not an array', () => {
    expect(arrayUnion(null, [1, 2, 2])).toEqual([1, 2]);
    expect(arrayUnion([1, 1, 2], 'string')).toEqual([1, 2]);
    expect(arrayUnion(123, {})).toEqual([]);
  });
});
