const { difference } = require('./array-difference-core');

describe('difference', () => {
  it('should return the difference between two arrays', () => {
    expect(difference([1, 2, 3], [2, 3, 4])).toEqual([1]);
  });

  it('should return the first array if the second array is empty', () => {
    expect(difference([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  it('should return an empty array if the first array is empty', () => {
    expect(difference([], [1, 2, 3])).toEqual([]);
  });

  it('should return an empty array if the arrays are identical', () => {
    expect(difference([1, 2, 3], [1, 2, 3])).toEqual([]);
  });
  
  it('should work with strings', () => {
    expect(difference(['a', 'b', 'c'], ['b', 'd'])).toEqual(['a', 'c']);
  });

  it('should throw an error if arguments are not arrays', () => {
    expect(() => difference([1, 2], 'not an array')).toThrow(TypeError);
    expect(() => difference('not an array', [1, 2])).toThrow(TypeError);
    expect(() => difference(null, [])).toThrow(TypeError);
  });
});
