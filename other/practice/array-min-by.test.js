import { minBy } from './array-min-by.js';

describe('minBy', () => {
  it('returns the minimum value based on a function', () => {
    const arr = [{ n: 10 }, { n: 20 }, { n: 5 }];
    expect(minBy(arr, (o) => o.n)).toEqual({ n: 5 });
  });

  it('handles strings with length function', () => {
    const arr = ['apple', 'banana', 'kiwi'];
    expect(minBy(arr, (s) => s.length)).toBe('kiwi');
  });

  it('works with numbers', () => {
    const arr = [1, 5, 2];
    expect(minBy(arr, (x) => x)).toBe(1);
  });
});
