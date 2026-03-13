import { everyNth } from './array-every-nth.js';

describe('everyNth', () => {
  it('returns every nth element in an array', () => {
    expect(everyNth([1, 2, 3, 4, 5, 6], 2)).toEqual([2, 4, 6]);
    expect(everyNth([1, 2, 3, 4, 5, 6], 3)).toEqual([3, 6]);
  });

  it('returns an empty array if nth is greater than array length', () => {
    expect(everyNth([1, 2, 3], 4)).toEqual([]);
  });

  it('returns an empty array for null or undefined', () => {
    expect(everyNth(null, 2)).toEqual([]);
    expect(everyNth(undefined, 2)).toEqual([]);
  });
});
