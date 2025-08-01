
import { unique } from './unique-utils.js';

describe('unique', () => {
  test('should return a duplicate-free array of numbers', () => {
    const array = [1, 2, 1, 3, 2, 4];
    expect(unique(array)).toEqual([1, 2, 3, 4]);
  });

  test('should return a duplicate-free array of strings', () => {
    const array = ['a', 'b', 'a', 'c', 'b'];
    expect(unique(array)).toEqual(['a', 'b', 'c']);
  });

  test('should handle mixed data types', () => {
    const array = [1, '1', 2, 1, '2', 3];
    expect(unique(array)).toEqual([1, '1', 2, '2', 3]);
  });

  test('should handle objects (reference equality)', () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    const array = [obj1, obj2, obj1];
    expect(unique(array)).toEqual([obj1, obj2]);
  });

  test('should handle null and undefined', () => {
    const array = [null, undefined, null, 1, undefined];
    expect(unique(array)).toEqual([null, undefined, 1]);
  });

  test('should handle NaN', () => {
    const array = [1, NaN, 2, NaN];
    expect(unique(array)).toEqual([1, NaN, 2]);
  });

  test('should return an empty array if the input array is empty', () => {
    expect(unique([])).toEqual([]);
  });

  test('should return an empty array if the input is not an array', () => {
    expect(unique(null)).toEqual([]);
    expect(unique(undefined)).toEqual([]);
    expect(unique({})).toEqual([]);
    expect(unique('string')).toEqual([]);
  });
});
