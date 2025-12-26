import { flattenOnce } from './array-flatten-once-utils';

describe('flattenOnce', () => {
  it('should flatten an array one level deep', () => {
    expect(flattenOnce([1, [2, 3], [4, [5]]])).toEqual([1, 2, 3, 4, [5]]);
  });

  it('should return an empty array if given an empty array', () => {
    expect(flattenOnce([])).toEqual([]);
  });

  it('should not flatten an already flat array', () => {
    expect(flattenOnce([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
