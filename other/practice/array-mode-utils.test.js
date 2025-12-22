import { mode } from './array-mode-utils';

describe('mode', () => {
  it('should return the mode of an array of numbers with a single mode', () => {
    expect(mode([1, 2, 2, 3, 3, 3, 4])).toEqual([3]);
  });

  it('should return the mode of an array of numbers with multiple modes', () => {
    expect(mode([1, 2, 2, 3, 3, 4])).toEqual([2, 3]);
  });

  it('should return an empty array for an empty input', () => {
    expect(mode([])).toEqual([]);
  });

  it('should handle array with all unique elements', () => {
    expect(mode([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });
});
