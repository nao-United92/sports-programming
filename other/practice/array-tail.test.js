import { tail } from './array-tail.js';

describe('tail', () => {
  it('returns all elements of an array except the first', () => {
    expect(tail([1, 2, 3])).toEqual([2, 3]);
    expect(tail(['a', 'b', 'c'])).toEqual(['b', 'c']);
  });

  it('returns an empty array for an array with one element', () => {
    expect(tail([1])).toEqual([]);
  });

  it('returns an empty array for an empty array', () => {
    expect(tail([])).toEqual([]);
  });

  it('returns an empty array for null or undefined', () => {
    expect(tail(null)).toEqual([]);
    expect(tail(undefined)).toEqual([]);
  });
});
