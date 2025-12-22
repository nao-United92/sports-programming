import { bifurcate } from './array-bifurcate-utils';

describe('bifurcate', () => {
  it('should split an array into two groups based on a filter array', () => {
    const result = bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]);
    expect(result).toEqual([['beep', 'boop', 'bar'], ['foo']]);
  });

  it('should handle an empty array', () => {
    expect(bifurcate([], [])).toEqual([[], []]);
  });

  it('should put all elements in the first group if all filters are true', () => {
    const result = bifurcate([1, 2, 3], [true, true, true]);
    expect(result).toEqual([[1, 2, 3], []]);
  });

  it('should put all elements in the second group if all filters are false', () => {
    const result = bifurcate([1, 2, 3], [false, false, false]);
    expect(result).toEqual([[], [1, 2, 3]]);
  });
});
