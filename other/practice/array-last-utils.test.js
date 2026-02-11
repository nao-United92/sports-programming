import { last } from './array-last-utils.js';

describe('last', () => {
  it('should return the last element of an array', () => {
    expect(last([1, 2, 3])).toBe(3);
  });

  it('should return undefined for an empty array', () => {
    expect(last([])).toBeUndefined();
  });

  it('should return undefined for a non-array input', () => {
    expect(last(null)).toBeUndefined();
    expect(last(undefined)).toBeUndefined();
    expect(last("string")).toBeUndefined();
    expect(last({})).toBeUndefined();
  });

  it('should return the only element for a single-element array', () => {
    expect(last([10])).toBe(10);
  });
});
