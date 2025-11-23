import { dropRight } from './array-drop-right-utils';

describe('dropRight', () => {
  it('should drop n elements from the end of an array', () => {
    expect(dropRight([1, 2, 3, 4, 5], 2)).toEqual([1, 2, 3]);
  });

  it('should drop 1 element if n is not specified', () => {
    expect(dropRight([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4]);
  });

  it('should return an empty array if n is greater than or equal to array length', () => {
    expect(dropRight([1, 2, 3], 3)).toEqual([]);
    expect(dropRight([1, 2, 3], 5)).toEqual([]);
  });

  it('should return the original array if n is 0', () => {
    expect(dropRight([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  it('should handle an empty input array', () => {
    expect(dropRight([], 2)).toEqual([]);
  });

  it('should handle non-array inputs gracefully', () => {
    expect(dropRight(null, 2)).toEqual([]);
    expect(dropRight(undefined, 2)).toEqual([]);
    expect(dropRight('string', 2)).toEqual([]);
  });
});
