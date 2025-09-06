import { paginate } from './array-pagination-utils.js';

describe('paginate', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  test('should return the first page', () => {
    expect(paginate(array, 1, 3)).toEqual([1, 2, 3]);
  });

  test('should return the second page', () => {
    expect(paginate(array, 2, 3)).toEqual([4, 5, 6]);
  });

  test('should return the last page', () => {
    expect(paginate(array, 4, 3)).toEqual([10]);
  });

  test('should return an empty array for out of bounds page', () => {
    expect(paginate(array, 5, 3)).toEqual([]);
  });

  test('should return an empty array for invalid inputs', () => {
    expect(paginate(array, 0, 3)).toEqual([]);
    expect(paginate(array, 1, 0)).toEqual([]);
    expect(paginate('not an array', 1, 3)).toEqual([]);
  });
});
