import filter from './array-filter-utils';

describe('filter', () => {
  test('should filter an array based on a predicate function', () => {
    const array = [1, 2, 3, 4, 5];
    expect(filter(array, (x) => x % 2 === 0)).toEqual([2, 4]);
  });

  test('should return an empty array if no elements satisfy the predicate', () => {
    const array = [1, 3, 5];
    expect(filter(array, (x) => x % 2 === 0)).toEqual([]);
  });

  test('should return all elements if all elements satisfy the predicate', () => {
    const array = [2, 4, 6];
    expect(filter(array, (x) => x % 2 === 0)).toEqual([2, 4, 6]);
  });

  test('should handle empty array', () => {
    expect(filter([], (x) => x % 2 === 0)).toEqual([]);
  });
});
