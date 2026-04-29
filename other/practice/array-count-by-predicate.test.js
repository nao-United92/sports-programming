import { countByPredicate } from './array-count-by-predicate';

describe('countByPredicate', () => {
  test('should count elements satisfying the predicate', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(countByPredicate(arr, (x) => x % 2 === 0)).toBe(2);
    expect(countByPredicate(arr, (x) => x > 2)).toBe(3);
  });

  test('should return 0 for empty array', () => {
    expect(countByPredicate([], (x) => x === 1)).toBe(0);
  });
});
