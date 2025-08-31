import { flattenDeep } from './array-flatten-deep-utils.js';

describe('flattenDeep', () => {
  it('should flatten a deeply nested array', () => {
    const array = [1, [2, [3, [4]], 5]];
    expect(flattenDeep(array)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return an empty array if given an empty array', () => {
    expect(flattenDeep([])).toEqual([]);
  });

  it('should handle an array with no nesting', () => {
    const array = [1, 2, 3, 4, 5];
    expect(flattenDeep(array)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle non-array input by wrapping it in an array', () => {
    expect(flattenDeep(1)).toEqual([1]);
    expect(flattenDeep({ a: 1 })).toEqual([{ a: 1 }]);
  });

  it('should handle arrays with mixed data types', () => {
    const array = [1, 'a', [2, true, [null, undefined]]];
    expect(flattenDeep(array)).toEqual([1, 'a', 2, true, null, undefined]);
  });
});
