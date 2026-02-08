import { all } from './array-all.js';

describe('all', () => {
  it('should return true if all elements pass the predicate', () => {
    expect(all([1, 2, 3], (x) => x > 0)).toBe(true);
  });

  it('should return false if any element fails the predicate', () => {
    expect(all([1, -2, 3], (x) => x > 0)).toBe(false);
  });

  it('should use Boolean as the default predicate', () => {
    expect(all([true, true, true])).toBe(true);
    expect(all([true, false, true])).toBe(false);
  });

  it('should return true for an empty array', () => {
    expect(all([], (x) => x > 0)).toBe(true);
  });
});
