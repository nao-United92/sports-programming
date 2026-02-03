import { some } from './array-some-check-utils.js';

describe('some', () => {
  it('should return true if at least one element satisfies the predicate', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(some(arr, (n) => n % 2 === 0)).toBe(true);
  });

  it('should return false if no elements satisfy the predicate', () => {
    const arr = [1, 3, 5];
    expect(some(arr, (n) => n % 2 === 0)).toBe(false);
  });

  it('should return false for an empty array', () => {
    expect(some([], (n) => n > 0)).toBe(false);
  });

  it('should work with different types of predicates', () => {
    const arr = ['apple', 123, 'cherry'];
    expect(some(arr, (s) => typeof s === 'number')).toBe(true);
  });
});
