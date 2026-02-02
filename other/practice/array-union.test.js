const union = require('./array-union');

describe('union', () => {
  test('should return the union of two arrays with unique values', () => {
    const arrA = [1, 2, 3, 4];
    const arrB = [3, 4, 5, 6];
    expect(union(arrA, arrB)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should work with arrays containing different data types', () => {
    const arrA = [1, 'hello', null];
    const arrB = ['hello', null, { a: 1 }];
    const result = union(arrA, arrB);
    // Note: object equality is by reference.
    expect(result).toHaveLength(4);
    expect(result).toContain(1);
    expect(result).toContain('hello');
    expect(result).toContain(null);
    expect(result).toContainEqual({ a: 1 });
  });

  test('should return a new array instance', () => {
    const arrA = [1, 2];
    const arrB = [3, 4];
    const result = union(arrA, arrB);
    expect(result).not.toBe(arrA);
    expect(result).not.toBe(arrB);
  });

  test('should handle empty arrays', () => {
    expect(union([], [])).toEqual([]);
    expect(union([1, 2], [])).toEqual([1, 2]);
    expect(union([], [3, 4])).toEqual([3, 4]);
  });
});