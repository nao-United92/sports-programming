const union = require('./array-union-extended-utils');

describe('union', () => {
  test('should create a union of unique values from multiple arrays', () => {
    expect(union([2, 1], [1, 2], [1, 3])).toEqual([2, 1, 3]);
  });

  test('should maintain the order of appearance of unique values', () => {
    expect(union([2, 1, 5], [1, 2, 3], [4, 5, 6])).toEqual([2, 1, 5, 3, 4, 6]);
  });

  test('should handle empty arrays', () => {
    expect(union([], [1, 2], [])).toEqual([1, 2]);
    expect(union([], [], [])).toEqual([]);
  });

  test('should handle single array input', () => {
    expect(union([1, 2, 1])).toEqual([1, 2]);
  });

  test('should handle arrays containing different types of values', () => {
    expect(union([1, 'a'], ['a', 2], [3, null])).toEqual([1, 'a', 2, 3, null]);
  });

  test('should handle arrays containing objects (by reference)', () => {
    const obj1 = {
      a: 1
    };
    const obj2 = {
      b: 2
    };
    const obj3 = {
      a: 1
    }; // Same content, different reference

    expect(union([obj1, obj2], [obj2, obj3])).toEqual([obj1, obj2, obj3]);
    expect(union([obj1], [obj1])).toEqual([obj1]);
  });

  test('should return an empty array if no arrays are provided', () => {
    expect(union()).toEqual([]);
  });

  test('should ignore non-array arguments', () => {
    expect(union([1, 2], null, [3, 4], 'string', {
      a: 1
    })).toEqual([1, 2, 3, 4]);
  });
});
