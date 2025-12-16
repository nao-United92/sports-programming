const pullAt = require('./array-pull-at-utils');

describe('pullAt', () => {
  it('should remove elements from an array at specified indexes and return them', () => {
    const arr = ['a', 'b', 'c', 'd'];
    const indexes = [1, 3];
    const result = pullAt(arr, indexes);
    
    expect(result).toEqual(['b', 'd']);
    expect(arr).toEqual(['a', 'c']);
  });

  it('should handle unsorted and duplicate indexes', () => {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    const indexes = [3, 0, 3];
    const result = pullAt(arr, indexes);

    expect(result).toEqual(['a', 'd']);
    expect(arr).toEqual(['b', 'c', 'e']);
  });

  it('should not modify the array if indexes are out of bounds', () => {
    const arr = ['a', 'b', 'c'];
    const indexes = [5, -1];
    const result = pullAt(arr, indexes);

    expect(result).toEqual([]);
    expect(arr).toEqual(['a', 'b', 'c']);
  });

  it('should handle an empty indexes array', () => {
    const arr = ['a', 'b', 'c'];
    const result = pullAt(arr, []);

    expect(result).toEqual([]);
    expect(arr).toEqual(['a', 'b', 'c']);
  });

  it('should return an empty array for non-array inputs', () => {
    expect(pullAt(null, [1])).toEqual([]);
    expect(pullAt('abc', [0])).toEqual([]);
  });

  it('should return an empty array if indexes is not an array', () => {
    const arr = ['a', 'b', 'c'];
    expect(pullAt(arr, 1)).toEqual([]);
    expect(arr).toEqual(['a', 'b', 'c']);
  });
});
