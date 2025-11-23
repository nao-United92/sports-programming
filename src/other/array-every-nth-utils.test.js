import { everyNth } from './array-every-nth-utils';

describe('everyNth', () => {
  it('should return every nth element', () => {
    expect(everyNth([1, 2, 3, 4, 5, 6], 2)).toEqual([2, 4, 6]);
    expect(everyNth([1, 2, 3, 4, 5, 6], 3)).toEqual([3, 6]);
    expect(everyNth([1, 2, 3, 4, 5, 6], 1)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should return an empty array if nth is not positive', () => {
    expect(everyNth([1, 2, 3, 4, 5, 6], 0)).toEqual([]);
    expect(everyNth([1, 2, 3, 4, 5, 6], -1)).toEqual([]);
  });

  it('should return an empty array for an empty input array', () => {
    expect(everyNth([], 2)).toEqual([]);
  });

  it('should handle non-array inputs gracefully', () => {
    expect(everyNth(null, 2)).toEqual([]);
    expect(everyNth(undefined, 2)).toEqual([]);
  });

  it('should handle nth being larger than the array length', () => {
    expect(everyNth([1, 2, 3], 5)).toEqual([]);
  });
});
