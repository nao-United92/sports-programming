import { flattenOneLevel } from './array-flatten-one-level-utils.js';

describe('flattenOneLevel', () => {
  it('should flatten an array one level deep', () => {
    expect(flattenOneLevel([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
  });

  it('should handle nested arrays with multiple levels, flattening only one level', () => {
    expect(flattenOneLevel([1, [2, [3, 4]], 5])).toEqual([1, 2, [3, 4], 5]);
  });

  it('should handle an empty array', () => {
    expect(flattenOneLevel([])).toEqual([]);
  });

  it('should handle an array with no nested arrays', () => {
    expect(flattenOneLevel([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should handle an array with empty nested arrays', () => {
    expect(flattenOneLevel([1, [], 2])).toEqual([1, 2]);
  });
});