import { unique } from './array-unique';

describe('unique', () => {
  test('should return unique elements from an array of numbers', () => {
    const arr = [1, 2, 2, 3, 4, 4, 5];
    expect(unique(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return unique elements from an array of strings', () => {
    const arr = ['a', 'b', 'b', 'c', 'a'];
    expect(unique(arr)).toEqual(['a', 'b', 'c']);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [1, '1', 2, '2', 1];
    expect(unique(arr)).toEqual([1, '1', 2, '2']);
  });

  test('should return an empty array if given an empty array', () => {
    const arr = [];
    expect(unique(arr)).toEqual([]);
  });

  test('should return the same array if all elements are unique', () => {
    const arr = [1, 2, 3];
    expect(unique(arr)).toEqual([1, 2, 3]);
  });

  test('should handle arrays with null and undefined values', () => {
    const arr = [1, null, undefined, 1, null];
    expect(unique(arr)).toEqual([1, null, undefined]);
  });

  test('should handle arrays with objects (by reference)', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const arr = [obj1, obj2, obj1];
    expect(unique(arr)).toEqual([obj1, obj2]);
  });
});
