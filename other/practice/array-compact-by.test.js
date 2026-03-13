import { compactBy } from './array-compact-by.js';

describe('compactBy', () => {
  it('filters elements based on a predicate', () => {
    expect(compactBy([0, 1, 2, 3], (x) => x > 1)).toEqual([2, 3]);
  });

  it('removes negative numbers', () => {
    expect(compactBy([-1, 0, 1, 2], (x) => x >= 0)).toEqual([0, 1, 2]);
  });

  it('works with truthy values as default filter', () => {
    expect(compactBy([false, 0, '', null, undefined, NaN, 1, 'a'], (x) => !!x)).toEqual([1, 'a']);
  });
});
