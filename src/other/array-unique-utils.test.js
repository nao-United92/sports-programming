import { unique, uniqueBy, uniqueByKey } from './array-unique-utils';

describe('unique', () => {
  test('should return a new array with unique values', () => {
    const arr = [1, 2, 2, 3, 1, 4, 5, 5];
    expect(unique(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle array with no duplicates', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(unique(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle empty array', () => {
    const arr = [];
    expect(unique(arr)).toEqual([]);
  });

  test('should handle array with mixed types', () => {
    const arr = [1, '1', 2, '2', 1, true, false, true, null, undefined, null];
    expect(unique(arr)).toEqual([1, '1', 2, '2', true, false, null, undefined]);
  });

  test('should handle array with objects (reference equality)', () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    const arr = [obj1, obj2, obj1];
    expect(unique(arr)).toEqual([obj1, obj2]);
  });

  test('should handle null or undefined input', () => {
    expect(unique(null)).toEqual([]);
    expect(unique(undefined)).toEqual([]);
  });

  test('should handle non-array input', () => {
    expect(unique(123)).toEqual([]);
    expect(unique('string')).toEqual([]);
    expect(unique({})).toEqual([]);
  });
});

describe('uniqueBy', () => {
  test('should return a new array with unique values based on iteratee', () => {
    const arr = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }, { id: 1, name: 'c' }];
    const iteratee = (item) => item.id;
    expect(uniqueBy(arr, iteratee)).toEqual([{ id: 1, name: 'a' }, { id: 2, name: 'b' }]);
  });

  test('should handle empty array', () => {
    const arr = [];
    const iteratee = (item) => item.id;
    expect(uniqueBy(arr, iteratee)).toEqual([]);
  });

  test('should handle non-array input', () => {
    const iteratee = (item) => item.id;
    expect(uniqueBy(null, iteratee)).toEqual([]);
    expect(uniqueBy(undefined, iteratee)).toEqual([]);
    expect(uniqueBy(123, iteratee)).toEqual([]);
  });

  test('should handle iteratee returning non-primitive values', () => {
    const arr = [{ id: { a: 1 }, name: 'x' }, { id: { a: 1 }, name: 'y' }];
    const iteratee = (item) => JSON.stringify(item.id);
    expect(uniqueBy(arr, iteratee)).toEqual([{ id: { a: 1 }, name: 'x' }]);
  });
});

describe('uniqueByKey', () => {
  test('should return a new array with unique values based on a key', () => {
    const arr = [
      { id: 1, name: 'a' },
      { id: 2, name: 'b' },
      { id: 1, name: 'c' },
      { id: 3, name: 'd' },
      { id: 2, name: 'e' },
    ];
    expect(uniqueByKey(arr, 'id')).toEqual([
      { id: 1, name: 'a' },
      { id: 2, name: 'b' },
      { id: 3, name: 'd' },
    ]);
  });

  test('should handle empty array', () => {
    expect(uniqueByKey([], 'id')).toEqual([]);
  });

  test('should handle non-array input', () => {
    expect(uniqueByKey(null, 'id')).toEqual([]);
    expect(uniqueByKey(undefined, 'id')).toEqual([]);
    expect(uniqueByKey(123, 'id')).toEqual([]);
  });

  test('should handle objects without the specified key', () => {
    const arr = [
      { id: 1, name: 'a' },
      { name: 'b' }, // Missing 'id' key
      { id: 2, name: 'c' },
    ];
    expect(uniqueByKey(arr, 'id')).toEqual([
      { id: 1, name: 'a' },
      { name: 'b' },
      { id: 2, name: 'c' },
    ]);
  });

  test('should handle different data types for the key value', () => {
    const arr = [
      { value: 1, type: 'number' },
      { value: '1', type: 'string' },
      { value: 1, type: 'another number' },
      { value: true, type: 'boolean' },
      { value: 'true', type: 'string' },
    ];
    expect(uniqueByKey(arr, 'value')).toEqual([
      { value: 1, type: 'number' },
      { value: '1', type: 'string' },
      { value: true, type: 'boolean' },
      { value: 'true', type: 'string' },
    ]);
  });
});
