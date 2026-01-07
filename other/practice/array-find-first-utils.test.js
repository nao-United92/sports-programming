const { findFirst } = require('./array-find-first-utils');

describe('findFirst', () => {
  const numbers = [10, 20, 30, 40, 50];
  const objects = [{
    id: 1,
    value: 'a'
  }, {
    id: 2,
    value: 'b'
  }, {
    id: 3,
    value: 'c'
  }];

  test('should return the first element that satisfies the predicate', () => {
    expect(findFirst(numbers, num => num > 25)).toBe(30);
  });

  test('should return undefined if no element satisfies the predicate', () => {
    expect(findFirst(numbers, num => num > 100)).toBeUndefined();
  });

  test('should return undefined for an empty array', () => {
    expect(findFirst([], num => num > 0)).toBeUndefined();
  });

  test('predicate should receive value, index, and array as arguments', () => {
    const mockPredicate = jest.fn((value, index, arr) => {
      expect(arr).toEqual(numbers);
      return value === 30;
    });
    findFirst(numbers, mockPredicate);
    expect(mockPredicate).toHaveBeenCalledWith(10, 0, numbers);
    expect(mockPredicate).toHaveBeenCalledWith(20, 1, numbers);
    expect(mockPredicate).toHaveBeenCalledWith(30, 2, numbers);
  });

  test('should not modify the original array', () => {
    const originalArray = [...numbers];
    findFirst(originalArray, num => num > 25);
    expect(originalArray).toEqual(numbers);
  });

  test('should work with objects', () => {
    expect(findFirst(objects, obj => obj.id === 2)).toEqual({
      id: 2,
      value: 'b'
    });
  });

  test('should throw TypeError if the first argument is not an array', () => {
    expect(() => findFirst(null, () => true)).toThrow(TypeError);
    expect(() => findFirst(null, () => true)).toThrow('Expected an array for the first argument.');
    expect(() => findFirst(undefined, () => true)).toThrow(TypeError);
    expect(() => findFirst("string", () => true)).toThrow(TypeError);
  });

  test('should throw TypeError if the second argument is not a function', () => {
    expect(() => findFirst(numbers, null)).toThrow(TypeError);
    expect(() => findFirst(numbers, null)).toThrow('Expected a function for the second argument.');
    expect(() => findFirst(numbers, "not a function")).toThrow(TypeError);
  });
});
