const arrayUniqueElements = require('./array-unique-elements');

describe('arrayUniqueElements', () => {
  test('should return an empty array for an empty input array', () => {
    expect(arrayUniqueElements([])).toEqual([]);
  });

  test('should return the same array if all elements are unique', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arrayUniqueElements(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should remove duplicate numbers', () => {
    const arr = [1, 2, 2, 3, 4, 4, 5];
    expect(arrayUniqueElements(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should remove duplicate strings', () => {
    const arr = ['a', 'b', 'b', 'c', 'd', 'd', 'e'];
    expect(arrayUniqueElements(arr)).toEqual(['a', 'b', 'c', 'd', 'e']);
  });

  test('should handle mixed types including objects and nulls', () => {
    const obj1 = {
      id: 1
    };
    const obj2 = {
      id: 2
    };
    const arr = [1, 'a', obj1, null, undefined, 1, 'a', obj2, null, undefined];
    expect(arrayUniqueElements(arr)).toEqual([1, 'a', obj1, null, undefined, obj2]);
  });

  test('should maintain order of first appearance', () => {
    const arr = [1, 2, 3, 2, 1, 4];
    expect(arrayUniqueElements(arr)).toEqual([1, 2, 3, 4]);
  });

  test('should throw TypeError if input is not an array', () => {
    expect(() => arrayUniqueElements(null)).toThrow(TypeError);
    expect(() => arrayUniqueElements(undefined)).toThrow(TypeError);
    expect(() => arrayUniqueElements('string')).toThrow(TypeError);
    expect(() => arrayUniqueElements(123)).toThrow(TypeError);
    expect(() => arrayUniqueElements({})).toThrow(TypeError);
  });
});