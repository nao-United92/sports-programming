import { last } from './array-last.js';

describe('last', () => {
  it('returns the last element of an array', () => {
    expect(last([1, 2, 3])).toBe(3);
    expect(last(['a', 'b', 'c'])).toBe('c');
  });

  it('returns undefined for an empty array', () => {
    expect(last([])).toBeUndefined();
  });

  it('returns undefined for null or undefined', () => {
    expect(last(null)).toBeUndefined();
    expect(last(undefined)).toBeUndefined();
  });
});
