import { flatMap } from './flatMap-utils';

describe('flatMap', () => {
  it('should map and flatten an array', () => {
    const arr = [1, 2, 3];
    const fn = (x) => [x, x * 2];
    const result = flatMap(arr, fn);
    expect(result).toEqual([1, 2, 2, 4, 3, 6]);
  });

  it('should work with an empty array', () => {
    const arr = [];
    const fn = (x) => [x, x * 2];
    const result = flatMap(arr, fn);
    expect(result).toEqual([]);
  });

  it('should handle functions that return empty arrays', () => {
    const arr = [1, 2, 3];
    const fn = (x) => (x % 2 === 0 ? [x] : []);
    const result = flatMap(arr, fn);
    expect(result).toEqual([2]);
  });
});
