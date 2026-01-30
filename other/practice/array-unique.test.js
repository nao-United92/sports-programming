// other/practice/array-unique.test.js
const arrayUnique = require('./array-unique');

describe('arrayUnique', () => {
  test('should return an array with unique values', () => {
    expect(arrayUnique([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle empty arrays', () => {
    expect(arrayUnique([])).toEqual([]);
  });

  test('should handle arrays with no duplicates', () => {
    expect(arrayUnique([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should handle arrays with mixed data types', () => {
    expect(arrayUnique([1, '1', 2, 1, '2', '1'])).toEqual([1, '1', 2, '2']);
  });

  test('should handle arrays with objects (reference equality)', () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    expect(arrayUnique([obj1, obj2, obj1])).toEqual([obj1, obj2]);
  });

  test('should return an empty array if input is not an array', () => {
    expect(arrayUnique(null)).toEqual([]);
    expect(arrayUnique(undefined)).toEqual([]);
    expect(arrayUnique('string')).toEqual([]);
    expect(arrayUnique(123)).toEqual([]);
    expect(arrayUnique({})).toEqual([]);
  });
});