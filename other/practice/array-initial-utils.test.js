import { initial } from './array-initial-utils.js';

describe('initial', () => {
  it('should return all elements except the last', () => {
    expect(initial([1, 2, 3, 4])).toEqual([1, 2, 3]);
  });

  it('should return an empty array for an empty array', () => {
    expect(initial([])).toEqual([]);
  });

  it('should return an empty array for a single-element array', () => {
    expect(initial([1])).toEqual([]);
  });

  it('should return an empty array for non-array inputs', () => {
    expect(initial(null)).toEqual([]);
    expect(initial(undefined)).toEqual([]);
    expect(initial("string")).toEqual([]);
    expect(initial({})).toEqual([]);
  });
});