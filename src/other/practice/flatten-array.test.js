import { flatten } from './flatten-array';

describe('flatten', () => {
  it('should flatten a nested array', () => {
    const array = [1, [2, [3, [4]], 5]];
    const result = flatten(array);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return an empty array for an empty array', () => {
    expect(flatten([])).toEqual([]);
  });

  it('should not affect an already flat array', () => {
    const array = [1, 2, 3, 4, 5];
    expect(flatten(array)).toEqual(array);
  });

  it('should handle non-array input', () => {
    expect(flatten(1)).toEqual([1]);
    expect(flatten(null)).toEqual([null]);
    expect(flatten({ 'a': 1 })).toEqual([{ 'a': 1 }]);
  });

  it('should not affect the original array', () => {
    const array = [1, [2, 3]];
    flatten(array);
    expect(array).toEqual([1, [2, 3]]);
  });
});
