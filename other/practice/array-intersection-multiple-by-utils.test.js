const arrayIntersectionMultipleBy = require('./array-intersection-multiple-by-utils');

describe('arrayIntersectionMultipleBy', () => {
  const iterateeById = (obj) => obj.id;
  const iterateeByValue = (val) => val;

  test('should find the intersection of multiple arrays based on an iteratee', () => {
    const arr1 = [{
      id: 1,
      val: 'a'
    }, {
      id: 2,
      val: 'b'
    }, {
      id: 3,
      val: 'c'
    }];
    const arr2 = [{
      id: 2,
      val: 'x'
    }, {
      id: 3,
      val: 'y'
    }, {
      id: 4,
      val: 'z'
    }];
    const arr3 = [{
      id: 3,
      val: 'p'
    }, {
      id: 5,
      val: 'q'
    }];

    expect(arrayIntersectionMultipleBy(iterateeById, arr1, arr2, arr3)).toEqual([{
      id: 3,
      val: 'c'
    }]);
  });

  test('should handle empty arrays correctly', () => {
    const arr1 = [{
      id: 1
    }];
    const arr2 = [];
    const arr3 = [{
      id: 1
    }];
    expect(arrayIntersectionMultipleBy(iterateeById, arr1, arr2, arr3)).toEqual([]);
  });

  test('should return unique elements based on iteratee if only one array is provided', () => {
    const arr = [{
      id: 1,
      val: 'a'
    }, {
      id: 2,
      val: 'b'
    }, {
      id: 1,
      val: 'x'
    }];
    expect(arrayIntersectionMultipleBy(iterateeById, arr)).toEqual([{
      id: 1,
      val: 'a'
    }, {
      id: 2,
      val: 'b'
    }]);
  });

  test('should handle no arrays (only iteratee) and return empty array', () => {
    expect(arrayIntersectionMultipleBy(iterateeById)).toEqual([]);
  });

  test('should handle primitive arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 3, 4];
    const arr3 = [3, 5];
    expect(arrayIntersectionMultipleBy(iterateeByValue, arr1, arr2, arr3)).toEqual([3]);
  });

  test('should return empty array if no common elements', () => {
    const arr1 = [{
      id: 1
    }];
    const arr2 = [{
      id: 2
    }];
    expect(arrayIntersectionMultipleBy(iterateeById, arr1, arr2)).toEqual([]);
  });

  test('should throw TypeError if iteratee is not a function', () => {
    const arr = [{
      id: 1
    }];
    expect(() => arrayIntersectionMultipleBy(null, arr)).toThrow(TypeError);
    expect(() => arrayIntersectionMultipleBy('string', arr)).toThrow(TypeError);
  });

  test('should throw TypeError if subsequent arguments are not arrays', () => {
    const arr = [{
      id: 1
    }];
    expect(() => arrayIntersectionMultipleBy(iterateeById, arr, null)).toThrow(TypeError);
    expect(() => arrayIntersectionMultipleBy(iterateeById, arr, 123)).toThrow(TypeError);
  });
});
