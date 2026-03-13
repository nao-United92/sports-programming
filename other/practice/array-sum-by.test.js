import { sumBy } from './array-sum-by.js';

describe('sumBy', () => {
  it('sums elements based on a function', () => {
    const arr = [{ n: 4 }, { n: 2 }, { n: 8 }];
    expect(sumBy(arr, (o) => o.n)).toBe(14);
  });

  it('sums elements based on a property name', () => {
    const arr = [{ n: 4 }, { n: 2 }, { n: 8 }];
    expect(sumBy(arr, 'n')).toBe(14);
  });

  it('works with numbers and identity function', () => {
    const arr = [1, 2, 3];
    expect(sumBy(arr, (x) => x)).toBe(6);
  });

  it('returns 0 for an empty array', () => {
    expect(sumBy([], (x) => x)).toBe(0);
  });
});
