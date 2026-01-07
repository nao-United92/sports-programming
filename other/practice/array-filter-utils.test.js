const { filter } = require('./array-filter-utils');

describe('filter', () => {
  test('should filter an array based on a predicate function', () => {
    const array = [1, 2, 3, 4, 5];
    expect(filter(array, (x) => x % 2 === 0)).toEqual([2, 4]);
  });

  test('should return an empty array if no elements satisfy the predicate', () => {
    const array = [1, 3, 5];
    expect(filter(array, (x) => x % 2 === 0)).toEqual([]);
  });

  test('should return all elements if all elements satisfy the predicate', () => {
    const array = [2, 4, 6];
    expect(filter(array, (x) => x % 2 === 0)).toEqual([2, 4, 6]);
  });

  test('should handle empty array', () => {
    expect(filter([], (x) => x % 2 === 0)).toEqual([]);
  });

  test('should not mutate the original array', () => {
    const array = [1, 2, 3];
    const originalArray = [...array];
    filter(array, (x) => x > 1);
    expect(array).toEqual(originalArray);
  });

  test('should throw TypeError if the first argument is not an array', () => {
    expect(() => filter(null, (x) => x)).toThrow(TypeError);
    expect(() => filter(null, (x) => x)).toThrow('Expected an array for the first argument.');
    expect(() => filter(undefined, (x) => x)).toThrow(TypeError);
    expect(() => filter({}, (x) => x)).toThrow(TypeError);
  });

  test('should throw TypeError if the second argument is not a function', () => {
    const array = [1, 2, 3];
    expect(() => filter(array, null)).toThrow(TypeError);
    expect(() => filter(array, null)).toThrow('Expected a function for the second argument.');
    expect(() => filter(array, undefined)).toThrow(TypeError);
    expect(() => filter(array, 'not a function')).toThrow(TypeError);
  });

  test('should pass element, index, and array to the predicate', () => {
    const array = [10, 20, 30];
    const mockPredicate = jest.fn((value, index, arr) => {
      expect(arr).toBe(array);
      return value > 15 && index < 2;
    });
    filter(array, mockPredicate);
    expect(mockPredicate).toHaveBeenCalledWith(10, 0, array);
    expect(mockPredicate).toHaveBeenCalledWith(20, 1, array);
    expect(mockPredicate).toHaveBeenCalledWith(30, 2, array);
    expect(mockPredicate).toHaveBeenCalledTimes(3);
  });
});
