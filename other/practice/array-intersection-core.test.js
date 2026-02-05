const { intersection } = require('./array-intersection-core');

describe('intersection', () => {
  it('should return the intersection of two arrays', () => {
    expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });

  it('should return an empty array if there are no common elements', () => {
    expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
  });

  it('should return an empty array if one array is empty', () => {
    expect(intersection([1, 2, 3], [])).toEqual([]);
    expect(intersection([], [1, 2, 3])).toEqual([]);
  });

  it('should handle duplicates correctly', () => {
    expect(intersection([1, 2, 2, 3], [2, 3, 3, 4])).toEqual([2, 3]);
  });

  it('should work with strings', () => {
    expect(intersection(['a', 'b', 'c'], ['b', 'd', 'a'])).toEqual(['a', 'b']);
  });

  it('should throw an error if arguments are not arrays', () => {
    expect(() => intersection([1, 2], 'not an array')).toThrow(TypeError);
    expect(() => intersection('not an array', [1, 2])).toThrow(TypeError);
    expect(() => intersection(null, [])).toThrow(TypeError);
  });
});
