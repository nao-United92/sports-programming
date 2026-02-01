const arrayGroupByIteratee = require('./array-group-by-iteratee');

describe('arrayGroupByIteratee', () => {
  test('should group numbers by their parity', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const result = arrayGroupByIteratee(arr, num => num % 2 === 0 ? 'even' : 'odd');
    expect(result).toEqual({
      odd: [1, 3, 5],
      even: [2, 4, 6]
    });
  });

  test('should group strings by their first letter', () => {
    const arr = ['apple', 'banana', 'cat', 'apricot', 'bat'];
    const result = arrayGroupByIteratee(arr, word => word[0]);
    expect(result).toEqual({
      a: ['apple', 'apricot'],
      b: ['banana', 'bat'],
      c: ['cat']
    });
  });

  test('should group objects by a property value', () => {
    const users = [{
      id: 1,
      name: 'Alice'
    }, {
      id: 2,
      name: 'Bob'
    }, {
      id: 1,
      name: 'Alicia'
    }, {
      id: 3,
      name: 'Charlie'
    }];
    const result = arrayGroupByIteratee(users, user => user.id);
    expect(result).toEqual({
      '1': [{
        id: 1,
        name: 'Alice'
      }, {
        id: 1,
        name: 'Alicia'
      }],
      '2': [{
        id: 2,
        name: 'Bob'
      }],
      '3': [{
        id: 3,
        name: 'Charlie'
      }]
    });
  });

  test('should handle empty array', () => {
    expect(arrayGroupByIteratee([], x => x)).toEqual({});
  });

  test('should handle numeric keys derived from iteratee', () => {
    const arr = [1, 2, 3, 4];
    const result = arrayGroupByIteratee(arr, num => num % 2); // 0 for even, 1 for odd
    expect(result).toEqual({
      '1': [1, 3],
      '0': [2, 4]
    });
  });

  test('should use index in iteratee', () => {
    const arr = ['a', 'b', 'c', 'd'];
    const result = arrayGroupByIteratee(arr, (char, index) => index % 2 === 0 ? 'evenIndex' : 'oddIndex');
    expect(result).toEqual({
      evenIndex: ['a', 'c'],
      oddIndex: ['b', 'd']
    });
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => arrayGroupByIteratee(null, x => x)).toThrow(TypeError);
    expect(() => arrayGroupByIteratee(undefined, x => x)).toThrow(TypeError);
    expect(() => arrayGroupByIteratee('string', x => x)).toThrow(TypeError);
    expect(() => arrayGroupByIteratee(123, x => x)).toThrow(TypeError);
  });

  test('should throw TypeError if second argument is not a function', () => {
    const arr = [1, 2, 3];
    expect(() => arrayGroupByIteratee(arr, null)).toThrow(TypeError);
    expect(() => arrayGroupByIteratee(arr, undefined)).toThrow(TypeError);
    expect(() => arrayGroupByIteratee(arr, 'not-a-function')).toThrow(TypeError);
    expect(() => arrayGroupByIteratee(arr, 123)).toThrow(TypeError);
  });
});
