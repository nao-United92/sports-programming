import { last } from './array-last-utils';

describe('last', () => {
  it('should return the last element of an array', () => {
    expect(last([1, 2, 3])).toBe(3);
  });

  it('should return undefined for an empty array', () => {
    expect(last([])).toBeUndefined();
  });

  it('should return undefined for null or undefined input', () => {
    expect(last(null)).toBeUndefined();
    expect(last(undefined)).toBeUndefined();
  });

  it('should return the last element even if it is null or undefined', () => {
    expect(last([1, 2, null])).toBeNull();
    expect(last([1, 2, undefined])).toBeUndefined();
  });
});