import { unique } from './unique-utils';

describe('unique', () => {
  test('should return an array with unique values', () => {
    const arr = [1, 2, 2, 3, 4, 4, 5];
    expect(unique(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle an empty array', () => {
    const arr = [];
    expect(unique(arr)).toEqual([]);
  });

  test('should handle an array with all unique values', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(unique(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle an array with mixed data types', () => {
    const arr = [1, '1', 2, '2', 1];
    expect(unique(arr)).toEqual([1, '1', 2, '2']);
  });

  test('should handle an array with null and undefined values', () => {
    const arr = [1, null, 2, undefined, null, 3];
    expect(unique(arr)).toEqual([1, null, 2, undefined, 3]);
  });

  test('should handle an array with objects (reference equality)', () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    const arr = [obj1, obj2, obj1];
    expect(unique(arr)).toEqual([obj1, obj2]);
  });

  test('should return an empty array if input is not an array', () => {
    expect(unique(null)).toEqual([]);
    expect(unique(undefined)).toEqual([]);
    expect(unique('string')).toEqual([]);
    expect(unique(123)).toEqual([]);
    expect(unique({})).toEqual([]);
  });
});
