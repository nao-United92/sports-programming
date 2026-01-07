const { findIndex } = require('./array-find-index-utils');

describe('findIndex', () => {
  test('should find the index of an element in an array that satisfies the predicate', () => {
    const array = [1, 2, 3, 4, 5];
    const predicate = (x) => x === 3;
    const result = findIndex(array, predicate);
    expect(result).toBe(2);
  });

  test('should return -1 if no element is found that satisfies the predicate', () => {
    const array = [1, 2, 3, 4, 5];
    const predicate = (x) => x === 6;
    const result = findIndex(array, predicate);
    expect(result).toBe(-1);
  });

  test('should work with complex objects and a predicate', () => {
    const array = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const predicate = (x) => x.id === 2;
    const result = findIndex(array, predicate);
    expect(result).toBe(1);
  });

  test('should return -1 for an empty array', () => {
    expect(findIndex([], (x) => x > 0)).toBe(-1);
  });

  test('should throw TypeError if the first argument is not an array', () => {
    expect(() => findIndex(null, (x) => x)).toThrow(TypeError);
    expect(() => findIndex(null, (x) => x)).toThrow('Expected an array for the first argument.');
    expect(() => findIndex(undefined, (x) => x)).toThrow(TypeError);
    expect(() => findIndex({}, (x) => x)).toThrow(TypeError);
  });

  test('should throw TypeError if the second argument is not a function', () => {
    const array = [1, 2, 3];
    expect(() => findIndex(array, null)).toThrow(TypeError);
    expect(() => findIndex(array, null)).toThrow('Expected a function for the second argument.');
    expect(() => findIndex(array, undefined)).toThrow(TypeError);
    expect(() => findIndex(array, 'not a function')).toThrow(TypeError);
  });

  test('should pass element, index, and array to the predicate', () => {
    const array = [10, 20, 30];
    const mockPredicate = jest.fn((value, index, arr) => {
      expect(arr).toBe(array);
      return value === 20;
    });
    findIndex(array, mockPredicate);
    expect(mockPredicate).toHaveBeenCalledWith(10, 0, array);
    expect(mockPredicate).toHaveBeenCalledWith(20, 1, array);
    expect(mockPredicate).toHaveBeenCalledTimes(2); // Should stop after finding 20
  });
});
