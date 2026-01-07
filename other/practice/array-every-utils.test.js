const { every } = require('./array-every-utils');

describe('every', () => {
  test('should return true if all elements pass the test', () => {
    expect(every([1, 2, 3, 4], x => x > 0)).toBe(true);
  });

  test('should return false if any element fails the test', () => {
    expect(every([1, 2, 3, 4], x => x > 3)).toBe(false);
  });

  test('should return true for an empty array', () => {
    expect(every([], x => x > 0)).toBe(true);
  });

  test('should throw TypeError if the first argument is not an array', () => {
    expect(() => every(null, (x) => x)).toThrow(TypeError);
    expect(() => every(null, (x) => x)).toThrow('Expected an array for the first argument.');
    expect(() => every(undefined, (x) => x)).toThrow(TypeError);
    expect(() => every({}, (x) => x)).toThrow(TypeError);
  });

  test('should throw TypeError if the second argument is not a function', () => {
    const array = [1, 2, 3];
    expect(() => every(array, null)).toThrow(TypeError);
    expect(() => every(array, null)).toThrow('Expected a function for the second argument.');
    expect(() => every(array, undefined)).toThrow(TypeError);
    expect(() => every(array, 'not a function')).toThrow(TypeError);
  });

  test('should pass element, index, and array to the predicate', () => {
    const array = [10, 20, 30];
    const mockPredicate = jest.fn((value, index, arr) => {
      expect(arr).toBe(array);
      return true;
    });
    every(array, mockPredicate);
    expect(mockPredicate).toHaveBeenCalledWith(10, 0, array);
    expect(mockPredicate).toHaveBeenCalledWith(20, 1, array);
    expect(mockPredicate).toHaveBeenCalledWith(30, 2, array);
    expect(mockPredicate).toHaveBeenCalledTimes(3);
  });

  test('should short-circuit if a predicate returns false', () => {
    const array = [1, 2, 3, 4, 5];
    const mockPredicate = jest.fn((value) => value < 3);
    every(array, mockPredicate);
    expect(mockPredicate).toHaveBeenCalledWith(1, 0, array);
    expect(mockPredicate).toHaveBeenCalledWith(2, 1, array);
    expect(mockPredicate).toHaveBeenCalledWith(3, 2, array);
    expect(mockPredicate).toHaveBeenCalledTimes(3); // Called for 1, 2, then 3 (which returns false)
  });
});
