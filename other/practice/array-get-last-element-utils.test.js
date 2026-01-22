import { last } from './array-get-last-element-utils';

describe('last', () => {
  it('should return the last element of an array', () => {
    expect(last([1, 2, 3])).toBe(3);
  });

  it('should return undefined for an empty array', () => {
    expect(last([])).toBeUndefined();
  });

  it('should return undefined for non-array inputs', () => {
    expect(last(null)).toBeUndefined();
    expect(last(undefined)).toBeUndefined();
    expect(last({})).toBeUndefined();
  });

  it('should return the element for a single-element array', () => {
    expect(last(['a'])).toBe('a');
  });
});
