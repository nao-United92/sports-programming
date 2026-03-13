import { head } from './array-head.js';

describe('head', () => {
  it('returns the first element of an array', () => {
    expect(head([1, 2, 3])).toBe(1);
    expect(head(['a', 'b', 'c'])).toBe('a');
  });

  it('returns undefined for an empty array', () => {
    expect(head([])).toBeUndefined();
  });

  it('returns undefined for null or undefined', () => {
    expect(head(null)).toBeUndefined();
    expect(head(undefined)).toBeUndefined();
  });
});
