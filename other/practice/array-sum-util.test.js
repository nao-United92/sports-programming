import { sum } from './array-sum-util';

describe('sum', () => {
  it('should return the sum of all numbers in an array', () => {
    expect(sum([1, 2, 3, 4, 5])).toBe(15);
  });

  it('should return 0 for an empty array', () => {
    expect(sum([])).toBe(0);
  });

  it('should ignore non-number values', () => {
    expect(sum([1, 'a', 2, 'b', 3])).toBe(6);
  });

  it('should return 0 for non-array values', () => {
    expect(sum(null)).toBe(0);
    expect(sum(undefined)).toBe(0);
    expect(sum({})).toBe(0);
    expect(sum('')).toBe(0);
    expect(sum(123)).toBe(0);
  });
});
