const { uniq } = require('./array-unique-values.js');

describe('uniq', () => {
  test('should return a duplicate-free version of an array with primitives', () => {
    const arr = [1, 2, 1, 3, 2, 4];
    expect(uniq(arr)).toEqual([1, 2, 3, 4]);
  });

  test('should preserve the order of the first occurrence', () => {
    const arr = [1, 2, 'a', 1, 'b', 2, 'a'];
    expect(uniq(arr)).toEqual([1, 2, 'a', 'b']);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [1, '1', 1, true, 'true', false, null, undefined, null, undefined];
    expect(uniq(arr)).toEqual([1, '1', true, 'true', false, null, undefined]);
  });

  test('should handle objects and arrays by reference equality', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const obj3 = { a: 1 }; // Different reference
    const arr1 = [1, obj1, obj2, obj1, obj3, [1], [1]]; // [1] is different reference
    expect(uniq(arr1)).toEqual([1, obj1, obj2, obj3, [1], [1]]);
  });

  test('should return an empty array if the input array is empty', () => {
    expect(uniq([])).toEqual([]);
  });

  test('should return the same array if there are no duplicates', () => {
    const arr = [1, 2, 3, 'a', 'b'];
    expect(uniq(arr)).toEqual([1, 2, 3, 'a', 'b']);
  });

  test('should throw an error if the argument is not an array', () => {
    expect(() => uniq(null)).toThrow('Expected an array for the first argument.');
    expect(() => uniq(undefined)).toThrow('Expected an array for the first argument.');
    expect(() => uniq(123)).toThrow('Expected an array for the first argument.');
    expect(() => uniq('string')).toThrow('Expected an array for the first argument.');
    expect(() => uniq({})).toThrow('Expected an array for the first argument.');
  });
});
