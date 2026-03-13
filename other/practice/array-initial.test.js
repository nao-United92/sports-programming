import { initial } from './array-initial.js';

describe('initial', () => {
  it('returns all elements of an array except the last', () => {
    expect(initial([1, 2, 3])).toEqual([1, 2]);
    expect(initial(['a', 'b', 'c'])).toEqual(['a', 'b']);
  });

  it('returns an empty array for an array with one element', () => {
    expect(initial([1])).toEqual([]);
  });

  it('returns an empty array for an empty array', () => {
    expect(initial([])).toEqual([]);
  });

  it('returns an empty array for null or undefined', () => {
    expect(initial(null)).toEqual([]);
    expect(initial(undefined)).toEqual([]);
  });
});
