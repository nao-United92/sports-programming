import { groupWhile } from './array-group-while-utils.js';

describe('groupWhile', () => {
  test('should group consecutive elements based on predicate', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    const groups = groupWhile(numbers, (current, previous) => current === previous + 1);
    expect(groups).toEqual([[1, 2, 3, 4, 5, 6, 7, 8]]);
  });

  test('should create new group when predicate is false', () => {
    const numbers = [1, 2, 3, 5, 6, 8, 9, 10];
    const groups = groupWhile(numbers, (current, previous) => current === previous + 1);
    expect(groups).toEqual([[1, 2, 3], [5, 6], [8, 9, 10]]);
  });

  test('should handle empty array', () => {
    const groups = groupWhile([], (current, previous) => true);
    expect(groups).toEqual([]);
  });

  test('should handle single element array', () => {
    const groups = groupWhile([1], (current, previous) => true);
    expect(groups).toEqual([[1]]);
  });

  test('should group identical consecutive elements', () => {
    const chars = ['a', 'a', 'b', 'b', 'b', 'c'];
    const groups = groupWhile(chars, (current, previous) => current === previous);
    expect(groups).toEqual([['a', 'a'], ['b', 'b', 'b'], ['c']]);
  });

  test('should pass index and array to predicate', () => {
    const arr = [10, 20, 30, 40];
    const mockPredicate = jest.fn((current, previous, index, array) => current === previous + 10);
    groupWhile(arr, mockPredicate);

    expect(mockPredicate).toHaveBeenCalledTimes(3);
    expect(mockPredicate).toHaveBeenCalledWith(20, 10, 1, arr);
    expect(mockPredicate).toHaveBeenCalledWith(30, 20, 2, arr);
    expect(mockPredicate).toHaveBeenCalledWith(40, 30, 3, arr);
  });

  test('should handle non-array input gracefully', () => {
    const groups = groupWhile(null, () => true);
    expect(groups).toEqual([]);

    const groups2 = groupWhile(undefined, () => true);
    expect(groups2).toEqual([]);

    const groups3 = groupWhile('string', () => true);
    expect(groups3).toEqual([]);
  });
});
