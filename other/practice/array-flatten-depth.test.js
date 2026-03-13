import { flattenDepth } from './array-flatten-depth.js';

describe('flattenDepth', () => {
  it('flattens an array up to a specified depth', () => {
    expect(flattenDepth([1, [2, [3, [4, 5], 6], 7], 8], 2)).toEqual([1, 2, 3, [4, 5], 6, 7, 8]);
  });

  it('flattens an array up to depth 1 by default', () => {
    expect(flattenDepth([1, [2, [3, [4, 5], 6], 7], 8])).toEqual([1, 2, [3, [4, 5], 6], 7, 8]);
  });

  it('returns the same array if depth is 0', () => {
    expect(flattenDepth([1, [2]], 0)).toEqual([1, [2]]);
  });

  it('completely flattens an array if depth is high enough', () => {
    expect(flattenDepth([1, [2, [3, [4]]]], 10)).toEqual([1, 2, 3, 4]);
  });
});
