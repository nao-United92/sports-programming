const { unique } = require('./array-unique');

describe('unique', () => {
  it('should remove duplicate numbers from an array', () => {
    expect(unique([1, 2, 2, 3, 1, 4])).toEqual([1, 2, 3, 4]);
  });

  it('should remove duplicate strings from an array', () => {
    expect(unique(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
  });

  it('should handle an array with no duplicates', () => {
    expect(unique([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an empty array', () => {
    expect(unique([])).toEqual([]);
  });
  
  it('should handle various data types including objects and null', () => {
    const obj = { id: 1 };
    const arr = [1, 'a', obj, null, 'a', obj, null];
    expect(unique(arr)).toEqual([1, 'a', obj, null]);
  });

  it('should return an empty array for non-array inputs', () => {
    expect(unique(null)).toEqual([]);
    expect(unique({})).toEqual([]);
  });
});
