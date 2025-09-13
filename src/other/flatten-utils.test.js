import { flatten } from './flatten-utils.js';

describe('flatten', () => {
  it('should flatten a nested array', () => {
    const array = [1, [2, [3, [4]], 5]];
    expect(flatten(array)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an already flat array', () => {
    const array = [1, 2, 3, 4, 5];
    expect(flatten(array)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an empty array', () => {
    const array = [];
    expect(flatten(array)).toEqual([]);
  });

  it('should handle an array with empty nested arrays', () => {
    const array = [1, [], [2, []], 3];
    expect(flatten(array)).toEqual([1, 2, 3]);
  });

  it('should handle non-array input', () => {
    expect(flatten(null)).toEqual([]);
    expect(flatten(undefined)).toEqual([]);
    expect(flatten({})).toEqual([]);
    expect(flatten(123)).toEqual([]);
  });
});