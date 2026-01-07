const { findLastIndex } = require('./array-find-last-index-utils');

describe('findLastIndex', () => {
  test('should find the last index of an element in an array that satisfies the predicate', () => {
    const array = [1, 2, 3, 2, 1];
    expect(findLastIndex(array, (x) => x === 2)).toBe(3);
  });

  test('should return -1 if no element is found that satisfies the predicate', () => {
    const array = [1, 2, 3, 4, 5];
    expect(findLastIndex(array, (x) => x === 6)).toBe(-1);
  });

  test('should work with complex objects and a predicate', () => {
    const array = [{ id: 1 }, { id: 2 }, { id: 1 }];
    expect(findLastIndex(array, (x) => x.id === 1)).toBe(2);
  });

  test('should return -1 for an empty array', () => {
    expect(findLastIndex([], (x) => x > 0)).toBe(-1);
  });

  test('should throw TypeError if the first argument is not an array', () => {
    expect(() => findLastIndex(null, (x) => x)).toThrow(TypeError);
    expect(() => findLastIndex(null, (x) => x)).toThrow('Expected an array for the first argument.');
    expect(() => findLastIndex(undefined, (x) => x)).toThrow(TypeError);
    expect(() => findLastIndex({}, (x) => x)).toThrow(TypeError);
  });

  test('should throw TypeError if the second argument is not a function', () => {
    const array = [1, 2, 3];
    expect(() => findLastIndex(array, null)).toThrow(TypeError);
    expect(() => findLastIndex(array, null)).toThrow('Expected a function for the second argument.');
    expect(() => findLastIndex(array, undefined)).toThrow(TypeError);
    expect(() => findLastIndex(array, 'not a function')).toThrow(TypeError);
  });

  test('should pass element, index, and array to the predicate', () => {
    const array = [10, 20, 30, 20, 10];
    const mockPredicate = jest.fn((value, index, arr) => {
      expect(arr).toBe(array);
      return value === 20;
    });
    findLastIndex(array, mockPredicate);
    expect(mockPredicate).toHaveBeenCalledWith(10, 4, array); // Last element first
    expect(mockPredicate).toHaveBeenCalledWith(20, 3, array); // Found here
    expect(mockPredicate).toHaveBeenCalledTimes(2); // Should stop after finding the last 20
  });
});
