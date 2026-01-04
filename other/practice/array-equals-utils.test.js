import { equals } from './array-equals-utils.js';

describe('equals', () => {
  it('should return true for equal arrays of numbers', () => {
    expect(equals([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  it('should return false for unequal arrays of numbers', () => {
    expect(equals([1, 2, 3], [1, 3, 2])).toBe(false);
  });

  it('should return true for equal arrays of strings', () => {
    expect(equals(['a', 'b', 'c'], ['a', 'b', 'c'])).toBe(true);
  });

  it('should return false for arrays with different lengths', () => {
    expect(equals([1, 2, 3], [1, 2])).toBe(false);
  });

  it('should return true for empty arrays', () => {
    expect(equals([], [])).toBe(true);
  });

  it('should handle arrays with mixed types', () => {
    expect(equals([1, 'a', null], [1, 'a', null])).toBe(true);
    expect(equals([1, 'a', null], [1, 'a', undefined])).toBe(false);
  });

  it('should return false if one or both inputs are not arrays', () => {
    expect(equals([1, 2, 3], { 0: 1, 1: 2, 2: 3 })).toBe(false);
    expect(equals(null, [1, 2, 3])).toBe(false);
    expect(equals(undefined, undefined)).toBe(false);
  });
});
