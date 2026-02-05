const { unique } = require('./array-unique');

describe('unique', () => {
  it('should remove duplicate values from an array', () => {
    const arr = [1, 2, 2, 3, 4, 4, 5];
    expect(unique(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should work with an array of strings', () => {
    const arr = ['a', 'b', 'a', 'c', 'b'];
    expect(unique(arr)).toEqual(['a', 'b', 'c']);
  });

  it('should return an empty array if given an empty array', () => {
    expect(unique([])).toEqual([]);
  });

  it('should return the same array if it has no duplicates', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(unique(arr)).toEqual([1, 2, 3, 4, 5]);
  });
  
  it('should handle mixed types', () => {
    const arr = [1, '1', 2, '2', 1];
    expect(unique(arr)).toEqual([1, '1', 2, '2']);
  });

  it('should throw an error if not given an array', () => {
    expect(() => unique('not an array')).toThrow(TypeError);
    expect(() => unique({ a: 1 })).toThrow(TypeError);
    expect(() => unique(null)).toThrow(TypeError);
  });
});
