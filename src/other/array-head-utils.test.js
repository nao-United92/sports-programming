import { head } from './array-head-utils';

describe('head', () => {
  it('should return the first element of an array', () => {
    expect(head([1, 2, 3])).toBe(1);
  });

  it('should return undefined for an empty array', () => {
    expect(head([])).toBeUndefined();
  });

  it('should return undefined for null or undefined input', () => {
    expect(head(null)).toBeUndefined();
    expect(head(undefined)).toBeUndefined();
  });

  it('should return the first element even if it is null or undefined', () => {
    expect(head([null, 1, 2])).toBeNull();
    expect(head([undefined, 1, 2])).toBeUndefined();
  });
});
