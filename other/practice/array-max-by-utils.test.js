import { maxBy } from './array-max-by-utils.js';

describe('maxBy', () => {
  it('should return the maximum value based on a function', () => {
    const arr = [{ n: 1 }, { n: 4 }, { n: 2 }];
    expect(maxBy(arr, (o) => o.n)).toBe(4);
  });

  it('should return the maximum value based on a property name', () => {
    const arr = [{ n: 1 }, { n: 4 }, { n: 2 }];
    expect(maxBy(arr, 'n')).toBe(4);
  });

  it('should handle an empty array', () => {
    expect(maxBy([], 'n')).toBe(-Infinity);
  });

  it('should handle negative numbers', () => {
    const arr = [{ n: -1 }, { n: -4 }, { n: -2 }];
    expect(maxBy(arr, 'n')).toBe(-1);
  });
});