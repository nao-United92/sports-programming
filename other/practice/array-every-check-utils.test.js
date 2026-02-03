import { every } from './array-every-check-utils.js';

describe('every', () => {
  it('should return true if all elements satisfy the predicate', () => {
    const arr = [2, 4, 6];
    expect(every(arr, (n) => n % 2 === 0)).toBe(true);
  });

  it('should return false if at least one element does not satisfy the predicate', () => {
    const arr = [2, 4, 5, 6];
    expect(every(arr, (n) => n % 2 === 0)).toBe(false);
  });

  it('should return true for an empty array', () => {
    expect(every([], (n) => n > 0)).toBe(true);
  });

  it('should work with different types of predicates', () => {
    const arr = ['apple', 'banana', 'cherry'];
    expect(every(arr, (s) => typeof s === 'string')).toBe(true);
  });
});
