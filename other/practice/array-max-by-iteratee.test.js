const arrayMaxByIteratee = require('./array-max-by-iteratee');

describe('arrayMaxByIteratee', () => {
  test('should return undefined for an empty array', () => {
    expect(arrayMaxByIteratee([], x => x)).toBeUndefined();
  });

  test('should return the maximum number by default (identity iteratee)', () => {
    const arr = [1, 5, 2, 8, 3];
    expect(arrayMaxByIteratee(arr, x => x)).toBe(8);
  });

  test('should return the object with the maximum value for a given property', () => {
    const users = [{
      name: 'Alice',
      age: 30
    }, {
      name: 'Bob',
      age: 25
    }, {
      name: 'Charlie',
      age: 35
    }, {
      name: 'David',
      age: 25
    }];
    expect(arrayMaxByIteratee(users, user => user.age)).toEqual({
      name: 'Charlie',
      age: 35
    });
  });

  test('should return the element for which the iteratee returns the max string length', () => {
    const words = ['apple', 'cat', 'banana', 'elephant', 'dog'];
    expect(arrayMaxByIteratee(words, word => word.length)).toBe('elephant');
  });

  test('should return the first element if multiple elements yield the same max value', () => {
    const users = [{
      name: 'Alice',
      age: 30
    }, {
      name: 'Bob',
      age: 30
    }, {
      name: 'Charlie',
      age: 25
    }];
    expect(arrayMaxByIteratee(users, user => user.age)).toEqual({
      name: 'Alice',
      age: 30
    });
  });

  test('should handle arrays with negative numbers', () => {
    const arr = [-10, -5, -20, -2];
    expect(arrayMaxByIteratee(arr, x => x)).toBe(-2);
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => arrayMaxByIteratee(null, x => x)).toThrow(TypeError);
    expect(() => arrayMaxByIteratee(undefined, x => x)).toThrow(TypeError);
    expect(() => arrayMaxByIteratee('string', x => x)).toThrow(TypeError);
    expect(() => arrayMaxByIteratee(123, x => x)).toThrow(TypeError);
  });

  test('should throw TypeError if second argument is not a function', () => {
    const arr = [1, 2, 3];
    expect(() => arrayMaxByIteratee(arr, null)).toThrow(TypeError);
    expect(() => arrayMaxByIteratee(arr, undefined)).toThrow(TypeError);
    expect(() => arrayMaxByIteratee(arr, 'not-a-function')).toThrow(TypeError);
    expect(() => arrayMaxByIteratee(arr, 123)).toThrow(TypeError);
  });
});
