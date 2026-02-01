const arrayUniqueByPredicate = require('./array-unique-by-predicate');

describe('arrayUniqueByPredicate', () => {
  test('should return unique numbers based on their parity', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    // Keep first odd, first even
    expect(arrayUniqueByPredicate(arr, num => num % 2 === 0)).toEqual([1, 2]);
  });

  test('should return unique strings based on their length', () => {
    const arr = ['apple', 'cat', 'banana', 'dog', 'elephant'];
    // 'apple' (5), 'cat' (3), 'dog' (3), 'banana' (6), 'elephant' (8)
    // First unique lengths are 5, 3, 6, 8
    expect(arrayUniqueByPredicate(arr, word => word.length)).toEqual(['apple', 'cat', 'banana', 'elephant']);
  });

  test('should return unique objects based on a specific property', () => {
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
    expect(arrayUniqueByPredicate(users, user => user.id)).toEqual([{
      id: 1,
      name: 'Alice'
    }, {
      id: 2,
      name: 'Bob'
    }, {
      id: 3,
      name: 'Charlie'
    }]);
  });

  test('should handle empty array', () => {
    expect(arrayUniqueByPredicate([], x => x)).toEqual([]);
  });

  test('should handle all unique values by default iteratee (identity)', () => {
    const arr = [1, 2, 'a', 'b', null, undefined, {
      id: 1
    }];
    expect(arrayUniqueByPredicate(arr, x => x)).toEqual(arr);
  });

  test('should handle duplicate values with identity iteratee', () => {
    const arr = [1, 2, 1, 3, 2];
    expect(arrayUniqueByPredicate(arr, x => x)).toEqual([1, 2, 3]);
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => arrayUniqueByPredicate(null, x => x)).toThrow(TypeError);
    expect(() => arrayUniqueByPredicate(undefined, x => x)).toThrow(TypeError);
    expect(() => arrayUniqueByPredicate('string', x => x)).toThrow(TypeError);
    expect(() => arrayUniqueByPredicate(123, x => x)).toThrow(TypeError);
  });

  test('should throw TypeError if second argument is not a function', () => {
    const arr = [1, 2, 3];
    expect(() => arrayUniqueByPredicate(arr, null)).toThrow(TypeError);
    expect(() => arrayUniqueByPredicate(arr, undefined)).toThrow(TypeError);
    expect(() => arrayUniqueByPredicate(arr, 'not-a-function')).toThrow(TypeError);
    expect(() => arrayUniqueByPredicate(arr, 123)).toThrow(TypeError);
  });
});
