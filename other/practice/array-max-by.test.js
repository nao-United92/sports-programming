import { maxBy } from './array-max-by.js';

describe('maxBy', () => {
  it('returns the maximum value based on a function', () => {
    const arr = [{ n: 10 }, { n: 20 }, { n: 15 }];
    expect(maxBy(arr, (o) => o.n)).toEqual({ n: 20 });
  });

  it('handles strings with length function', () => {
    const arr = ['apple', 'banana', 'cherry'];
    expect(maxBy(arr, (s) => s.length)).toBe('banana');
  });

  it('works with numbers', () => {
    const arr = [1, 5, 2];
    expect(maxBy(arr, (x) => x)).toBe(5);
  });
});
