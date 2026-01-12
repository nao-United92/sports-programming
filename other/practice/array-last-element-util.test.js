import { last } from './array-last-element-util';

describe('last', () => {
  it('should return the last element of an array', () => {
    expect(last([1, 2, 3])).toBe(3);
  });

  it('should return undefined for an empty array', () => {
    expect(last([])).toBe(undefined);
  });

  it('should return undefined for non-array values', () => {
    expect(last(null)).toBe(undefined);
    expect(last(undefined)).toBe(undefined);
    expect(last({})).toBe(undefined);
    expect(last('')).toBe(undefined);
    expect(last(123)).toBe(undefined);
  });

  it('should return the element for an array with one element', () => {
    expect(last([5])).toBe(5);
  });
});
