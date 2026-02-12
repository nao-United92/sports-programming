import { remove } from './array-remove';

describe('remove', () => {
  test('should remove elements that satisfy the predicate and return them', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const evens = remove(arr, (n) => n % 2 === 0);
    expect(arr).toEqual([1, 3, 5]); // Original array mutated
    expect(evens).toEqual([2, 4, 6]); // Removed elements returned
  });

  test('should return an empty array if no elements are removed', () => {
    const arr = [1, 2, 3];
    const removed = remove(arr, (n) => n > 5);
    expect(arr).toEqual([1, 2, 3]);
    expect(removed).toEqual([]);
  });

  test('should return an empty array if predicate is always false', () => {
    const arr = [1, 2, 3];
    const removed = remove(arr, () => false);
    expect(arr).toEqual([1, 2, 3]);
    expect(removed).toEqual([]);
  });

  test('should remove all elements if predicate is always true', () => {
    const arr = [1, 2, 3];
    const removed = remove(arr, () => true);
    expect(arr).toEqual([]);
    expect(removed).toEqual([1, 2, 3]);
  });

  test('should handle empty input array', () => {
    const arr = [];
    const removed = remove(arr, (n) => n > 0);
    expect(arr).toEqual([]);
    expect(removed).toEqual([]);
  });

  test('should handle objects by reference', () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const obj3 = { id: 3 };
    const arr = [obj1, obj2, obj3];
    const removed = remove(arr, (obj) => obj.id === 2);
    expect(arr).toEqual([obj1, obj3]);
    expect(removed).toEqual([obj2]);
  });

  test('should handle non-array input by returning an empty array', () => {
    expect(remove(null, () => true)).toEqual([]);
    expect(remove(undefined, () => true)).toEqual([]);
    expect(remove('string', () => true)).toEqual([]);
  });

  test('should handle non-function predicate by returning an empty array', () => {
    const arr = [1, 2, 3];
    expect(remove(arr, null)).toEqual([]);
    expect(arr).toEqual([1, 2, 3]); // Array should not be mutated
  });
});
