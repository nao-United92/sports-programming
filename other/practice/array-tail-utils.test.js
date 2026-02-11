import { tail } from './array-tail-utils.js';

describe('tail', () => {
  it('should return all elements except the first', () => {
    expect(tail([1, 2, 3, 4])).toEqual([2, 3, 4]);
  });

  it('should return an empty array for an empty array', () => {
    expect(tail([])).toEqual([]);
  });

  it('should return an empty array for a single-element array', () => {
    expect(tail([1])).toEqual([]);
  });

  it('should return an empty array for non-array inputs', () => {
    expect(tail(null)).toEqual([]);
    expect(tail(undefined)).toEqual([]);
    expect(tail("string")).toEqual([]);
    expect(tail({})).toEqual([]);
  });
});