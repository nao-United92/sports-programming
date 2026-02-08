import { any } from './array-any.js';

describe('any', () => {
  it('should return true if any element passes the predicate', () => {
    expect(any([1, -2, 3], (x) => x > 0)).toBe(true);
  });

  it('should return false if all elements fail the predicate', () => {
    expect(any([-1, -2, -3], (x) => x > 0)).toBe(false);
  });

  it('should use Boolean as the default predicate', () => {
    expect(any([false, true, false])).toBe(true);
    expect(any([false, false, false])).toBe(false);
  });

  it('should return false for an empty array', () => {
    expect(any([], (x) => x > 0)).toBe(false);
  });
});
