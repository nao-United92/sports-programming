import { sumBy } from './array-sum-by-utils.js';

describe('sumBy', () => {
  it('should return the sum of values based on a function', () => {
    const arr = [{ n: 1 }, { n: 2 }, { n: 3 }];
    expect(sumBy(arr, (o) => o.n)).toBe(6);
  });

  it('should return the sum of values based on a property name', () => {
    const arr = [{ n: 1 }, { n: 2 }, { n: 3 }];
    expect(sumBy(arr, 'n')).toBe(6);
  });

  it('should handle an empty array', () => {
    expect(sumBy([], 'n')).toBe(0);
  });

  it('should handle negative numbers', () => {
    const arr = [{ n: 1 }, { n: -2 }, { n: 3 }];
    expect(sumBy(arr, 'n')).toBe(2);
  });
});