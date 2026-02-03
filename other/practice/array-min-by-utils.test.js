import { minBy } from './array-min-by-utils.js';

describe('minBy', () => {
  it('should return the minimum value based on a function', () => {
    const arr = [{ n: 1 }, { n: 4 }, { n: 2 }];
    expect(minBy(arr, (o) => o.n)).toBe(1);
  });

  it('should return the minimum value based on a property name', () => {
    const arr = [{ n: 1 }, { n: 4 }, { n: 2 }];
    expect(minBy(arr, 'n')).toBe(1);
  });

  it('should handle an empty array', () => {
    expect(minBy([], 'n')).toBe(Infinity);
  });

  it('should handle negative numbers', () => {
    const arr = [{ n: -1 }, { n: -4 }, { n: -2 }];
    expect(minBy(arr, 'n')).toBe(-4);
  });
});