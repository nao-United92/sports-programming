import { partition } from './array-partition-utils.js';

describe('partition', () => {
  test('should partition an array based on a predicate', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const [evens, odds] = partition(numbers, n => n % 2 === 0);
    expect(evens).toEqual([2, 4, 6]);
    expect(odds).toEqual([1, 3, 5]);
  });

  test('should handle an empty array', () => {
    const [truthy, falsy] = partition([], n => n > 0);
    expect(truthy).toEqual([]);
    expect(falsy).toEqual([]);
  });

  test('should handle a predicate that always returns true', () => {
    const numbers = [1, 2, 3];
    const [truthy, falsy] = partition(numbers, n => true);
    expect(truthy).toEqual([1, 2, 3]);
    expect(falsy).toEqual([]);
  });

  test('should handle a predicate that always returns false', () => {
    const numbers = [1, 2, 3];
    const [truthy, falsy] = partition(numbers, n => false);
    expect(truthy).toEqual([]);
    expect(falsy).toEqual([1, 2, 3]);
  });

  test('should pass index and array to predicate', () => {
    const arr = ['a', 'b', 'c'];
    const mockPredicate = jest.fn((item, index, array) => index % 2 === 0);
    partition(arr, mockPredicate);

    expect(mockPredicate).toHaveBeenCalledTimes(3);
    expect(mockPredicate).toHaveBeenCalledWith('a', 0, arr);
    expect(mockPredicate).toHaveBeenCalledWith('b', 1, arr);
    expect(mockPredicate).toHaveBeenCalledWith('c', 2, arr);
  });

  test('should handle non-array input gracefully', () => {
    const [truthy, falsy] = partition(null, n => true);
    expect(truthy).toEqual([]);
    expect(falsy).toEqual([]);

    const [truthy2, falsy2] = partition(undefined, n => true);
    expect(truthy2).toEqual([]);
    expect(falsy2).toEqual([]);

    const [truthy3, falsy3] = partition('string', n => true);
    expect(truthy3).toEqual([]);
    expect(falsy3).toEqual([]);
  });
});
