import { findLast } from './array-find-last-simple';

describe('findLast', () => {
  test('should find the last matching element', () => {
    const array = [1, 2, 3, 4, 5, 2];
    const result = findLast(array, n => n % 2 === 0);
    expect(result).toBe(2);
  });

  test('should return undefined if no element matches', () => {
    const array = [1, 3, 5];
    const result = findLast(array, n => n % 2 === 0);
    expect(result).toBeUndefined();
  });

  test('should provide index and array to the predicate', () => {
    const array = [1, 2, 3];
    const indices = [];
    findLast(array, (val, index) => {
      indices.push(index);
      return false;
    });
    expect(indices).toEqual([2, 1, 0]);
  });
});
