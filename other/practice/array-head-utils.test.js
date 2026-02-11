import { head } from './array-head-utils.js';

describe('head', () => {
  it('should return the first element of an array', () => {
    expect(head([1, 2, 3])).toBe(1);
  });

  it('should return undefined for an empty array', () => {
    expect(head([])).toBeUndefined();
  });

  it('should return undefined for a non-array input', () => {
    expect(head(null)).toBeUndefined();
    expect(head(undefined)).toBeUndefined();
    expect(head("string")).toBeUndefined();
    expect(head({})).toBeUndefined();
  });

  it('should return the only element for a single-element array', () => {
    expect(head([10])).toBe(10);
  });
});
