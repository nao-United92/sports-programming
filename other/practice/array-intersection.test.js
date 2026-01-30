// other/practice/array-intersection.test.js
const arrayIntersection = require('./array-intersection');

describe('arrayIntersection', () => {
  test('should return common elements between two arrays', () => {
    expect(arrayIntersection([1, 2, 3], [3, 4, 5])).toEqual([3]);
  });

  test('should handle arrays with no common elements', () => {
    expect(arrayIntersection([1, 2], [3, 4])).toEqual([]);
  });

  test('should handle arrays with duplicate common elements', () => {
    expect(arrayIntersection([1, 2, 2, 3], [2, 3, 3, 4])).toEqual([2, 3]);
  });

  test('should handle empty input arrays', () => {
    expect(arrayIntersection([], [1, 2, 3])).toEqual([]);
    expect(arrayIntersection([1, 2, 3], [])).toEqual([]);
    expect(arrayIntersection([], [])).toEqual([]);
  });

  test('should handle arrays with mixed data types', () => {
    expect(arrayIntersection([1, 'a', 2], ['a', 3, 4])).toEqual(['a']);
    expect(arrayIntersection([1, null, 2], [null, 3, 4])).toEqual([null]);
    expect(arrayIntersection([1, undefined, 2], [undefined, 3, 4])).toEqual([undefined]);
  });

  test('should handle arrays with objects (reference equality)', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const obj3 = { c: 3 };
    expect(arrayIntersection([obj1, obj2], [obj2, obj3])).toEqual([obj2]);
  });

  test('should return empty array if inputs are not arrays', () => {
    expect(arrayIntersection(null, [1, 2])).toEqual([]);
    expect(arrayIntersection([1, 2], 'string')).toEqual([]);
    expect(arrayIntersection(123, {})).toEqual([]);
  });
});