const { flatten } = require('./array-flatten-simple');

describe('flatten', () => {
  it('should flatten a nested array by one level', () => {
    const arr = [1, [2, 3], [4, [5]]];
    expect(flatten(arr)).toEqual([1, 2, 3, 4, [5]]);
  });

  it('should return the same array if it is already flat', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(flatten(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an empty array', () => {
    expect(flatten([])).toEqual([]);
  });

  it('should handle an array with empty nested arrays', () => {
    const arr = [1, [], [2, []]];
    expect(flatten(arr)).toEqual([1, 2, []]);
  });
  
  it('should not flatten more than one level deep', () => {
    const arr = [1, [2, [3, [4]]]];
    expect(flatten(arr)).toEqual([1, 2, [3, [4]]]);
  });

  it('should throw an error if not given an array', () => {
    expect(() => flatten('not an array')).toThrow(TypeError);
    expect(() => flatten({ a: 1 })).toThrow(TypeError);
  });
});
