const arrayMinByIteratee = require('./array-min-by-iteratee');

describe('arrayMinByIteratee', () => {
  test('should return undefined for an empty array', () => {
    expect(arrayMinByIteratee([], x => x)).toBeUndefined();
  });

  test('should return the minimum number by default (identity iteratee)', () => {
    const arr = [1, 5, 2, 8, 3];
    expect(arrayMinByIteratee(arr, x => x)).toBe(1);
  });

  test('should return the object with the minimum value for a given property', () => {
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
    expect(arrayMinByIteratee(users, user => user.age)).toEqual({
      name: 'Bob',
      age: 25
    });
  });

  test('should return the element for which the iteratee returns the min string length', () => {
    const words = ['apple', 'cat', 'banana', 'elephant', 'dog'];
    expect(arrayMinByIteratee(words, word => word.length)).toBe('cat');
  });

  test('should return the first element if multiple elements yield the same min value', () => {
    const users = [{
      name: 'Alice',
      age: 30
    }, {
      name: 'Bob',
      age: 30
    }, {
      name: 'Charlie',
      age: 35
    }];
    expect(arrayMinByIteratee(users, user => user.age)).toEqual({
      name: 'Alice',
      age: 30
    });
  });

  test('should handle arrays with negative numbers', () => {
    const arr = [-10, -5, -20, -2];
    expect(arrayMinByIteratee(arr, x => x)).toBe(-20);
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => arrayMinByIteratee(null, x => x)).toThrow(TypeError);
    expect(() => arrayMinByIteratee(undefined, x => x)).toThrow(TypeError);
    expect(() => arrayMinByIteratee('string', x => x)).toThrow(TypeError);
    expect(() => arrayMinByIteratee(123, x => x)).toThrow(TypeError);
  });

  test('should throw TypeError if second argument is not a function', () => {
    const arr = [1, 2, 3];
    expect(() => arrayMinByIteratee(arr, null)).toThrow(TypeError);
    expect(() => arrayMinByIteratee(arr, undefined)).toThrow(TypeError);
    expect(() => arrayMinByIteratee(arr, 'not-a-function')).toThrow(TypeError);
    expect(() => arrayMinByIteratee(arr, 123)).toThrow(TypeError);
  });
});
