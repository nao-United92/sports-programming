const findDuplicates = require('./array-find-duplicates-utils');

describe('findDuplicates', () => {
  test('should return an empty array if there are no duplicates', () => {
    expect(findDuplicates([1, 2, 3, 4, 5])).toEqual([]);
  });

  test('should return duplicates for numbers', () => {
    expect(findDuplicates([1, 2, 2, 3, 3, 3, 4])).toEqual([2, 3]);
  });

  test('should return duplicates for strings', () => {
    expect(findDuplicates(['a', 'b', 'a', 'c', 'b'])).toEqual(['a', 'b']);
  });

  test('should handle arrays with mixed types', () => {
    expect(findDuplicates([1, 'a', 1, 'b', 'a'])).toEqual([1, 'a']);
  });

  test('should return an empty array for an empty input array', () => {
    expect(findDuplicates([])).toEqual([]);
  });

  test('should handle arrays with undefined and null values', () => {
    expect(findDuplicates([1, null, undefined, 1, null])).toEqual([1, null]);
  });

  test('should return an empty array if input is not an array', () => {
    expect(findDuplicates(null)).toEqual([]);
    expect(findDuplicates(undefined)).toEqual([]);
    expect(findDuplicates("string")).toEqual([]);
    expect(findDuplicates(123)).toEqual([]);
    expect(findDuplicates({})).toEqual([]);
  });

  test('should handle objects (by reference)', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    expect(findDuplicates([obj1, obj2, obj1])).toEqual([obj1]);
  });

  test('should not consider different object instances as duplicates', () => {
    expect(findDuplicates([{ a: 1 }, { a: 1 }])).toEqual([]);
  });
});
