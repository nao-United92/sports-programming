import { partition } from './array-partition.js';

describe('partition', () => {
  it('splits an array into two based on a predicate', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const isEven = (n) => n % 2 === 0;
    expect(partition(arr, isEven)).toEqual([[2, 4, 6], [1, 3, 5]]);
  });

  it('handles an empty array', () => {
    expect(partition([], (x) => x > 0)).toEqual([[], []]);
  });

  it('handles an array where all elements satisfy the predicate', () => {
    expect(partition([1, 2, 3], (x) => x > 0)).toEqual([[1, 2, 3], []]);
  });

  it('handles an array where no elements satisfy the predicate', () => {
    expect(partition([1, 2, 3], (x) => x < 0)).toEqual([[], [1, 2, 3]]);
  });
});
