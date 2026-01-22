const { shuffle } = require('./array-shuffle-engine');

describe('shuffle', () => {
  it('should return an array with the same length', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffled = shuffle([...array]);
    expect(shuffled).toHaveLength(array.length);
  });

  it('should contain all original elements', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffled = shuffle([...array]);
    // Sorting both arrays to compare their contents
    expect(shuffled.sort()).toEqual(array.sort());
  });

  it('should handle an empty array', () => {
    expect(shuffle([])).toEqual([]);
  });

  it('should handle an array with one element', () => {
    expect(shuffle([1])).toEqual([1]);
  });

  it('should return an empty array for non-array inputs', () => {
    expect(shuffle(null)).toEqual([]);
    expect(shuffle(undefined)).toEqual([]);
    expect(shuffle({})).toEqual([]);
  });
});
