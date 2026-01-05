const arrayDropRightWhile = require('./array-drop-right-while-utils');

describe('arrayDropRightWhile', () => {
  test('should drop elements from the end while predicate returns true', () => {
    const arr = [1, 2, 3, 4, 5];
    const isGreaterThanThree = (num) => num > 3;
    expect(arrayDropRightWhile(arr, isGreaterThanThree)).toEqual([1, 2, 3]);
  });

  test('should drop all elements if predicate is always true', () => {
    const arr = [1, 2, 3];
    const isAlwaysTrue = (num) => true;
    expect(arrayDropRightWhile(arr, isAlwaysTrue)).toEqual([]);
  });

  test('should drop no elements if predicate is always false', () => {
    const arr = [1, 2, 3];
    const isAlwaysFalse = (num) => false;
    expect(arrayDropRightWhile(arr, isAlwaysFalse)).toEqual([1, 2, 3]);
  });

  test('should handle an empty array', () => {
    const arr = [];
    const predicate = (num) => num > 0;
    expect(arrayDropRightWhile(arr, predicate)).toEqual([]);
  });

  test('should pass index and array to the predicate', () => {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    const isEvenIndex = (char, index) => index % 2 === 0; // Drop from right as long as index is even
    expect(arrayDropRightWhile(arr, isEvenIndex)).toEqual(['a', 'b', 'c', 'd']); // 'e' (index 4) is even, 'd' (index 3) is odd. So drops 'e' then stops.

    const arr2 = [1,2,3,4,5,6];
    const isGreaterThanThree = (num, index) => num > 3;
    expect(arrayDropRightWhile(arr2, isGreaterThanThree)).toEqual([1,2,3]);
  });

        test('should work with different types and values', () => {
          const arr = [1, 2, null, undefined, null];
          const isNullOrUndefined = (item) => item === null || item === undefined;
          expect(arrayDropRightWhile(arr, isNullOrUndefined)).toEqual([1, 2]);
        });
  test('should throw TypeError if first argument is not an array', () => {
    const predicate = (num) => num > 0;
    expect(() => arrayDropRightWhile(null, predicate)).toThrow(TypeError);
    expect(() => arrayDropRightWhile(123, predicate)).toThrow(TypeError);
    expect(() => arrayDropRightWhile('string', predicate)).toThrow(TypeError);
  });

  test('should throw TypeError if second argument is not a function', () => {
    const arr = [1, 2, 3];
    expect(() => arrayDropRightWhile(arr, null)).toThrow(TypeError);
    expect(() => arrayDropRightWhile(arr, 'string')).toThrow(TypeError);
    expect(() => arrayDropRightWhile(arr, 123)).toThrow(TypeError);
  });
});
