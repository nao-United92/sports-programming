const uniqueValues = require('./array-unique-values-utils');

describe('uniqueValues', () => {
  test('should return unique values from an array of numbers', () => {
    const arr = [1, 2, 2, 3, 4, 4, 5, 1];
    expect(uniqueValues(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return unique values from an array of strings', () => {
    const arr = ['a', 'b', 'a', 'c', 'b', 'd'];
    expect(uniqueValues(arr)).toEqual(['a', 'b', 'c', 'd']);
  });

  test('should return the same array if all values are already unique', () => {
    const arr = [1, 2, 3, 4];
    expect(uniqueValues(arr)).toEqual([1, 2, 3, 4]);
  });

  test('should return an empty array for an empty input array', () => {
    expect(uniqueValues([])).toEqual([]);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [1, 'a', 1, null, undefined, 'a', true, true, null];
    expect(uniqueValues(arr)).toEqual([1, 'a', null, undefined, true]);
  });

  test('should handle objects (by reference)', () => {
    const obj1 = {
      a: 1
    };
    const obj2 = {
      b: 2
    };
    const arr = [obj1, obj2, obj1, {
      a: 1
    }];
    expect(uniqueValues(arr)).toEqual([obj1, obj2, {
      a: 1
    }]); // {a:1} is a new object, so it's unique by reference
  });

  test('should return an empty array if input is not an array', () => {
    expect(uniqueValues(null)).toEqual([]);
    expect(uniqueValues(undefined)).toEqual([]);
    expect(uniqueValues("string")).toEqual([]);
    expect(uniqueValues(123)).toEqual([]);
    expect(uniqueValues({})).toEqual([]);
  });
});
