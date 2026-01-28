const { shuffle } = require('./array-shuffle');

describe('shuffle', () => {
  it('should return an array with the same elements', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle([...originalArray]);
    expect(shuffledArray).toHaveLength(originalArray.length);
    originalArray.forEach(element => {
      expect(shuffledArray.includes(element)).toBe(true);
    });
  });

  it('should return an empty array for an empty array input', () => {
    expect(shuffle([])).toEqual([]);
  });
  
  it('should handle non-array inputs gracefully', () => {
    expect(shuffle(null)).toEqual([]);
    expect(shuffle(undefined)).toEqual([]);
    expect(shuffle({})).toEqual([]);
  });

  it('should modify the array in place', () => {
    const arrayToShuffle = [1, 2, 3];
    const shuffled = shuffle(arrayToShuffle);
    expect(shuffled).toBe(arrayToShuffle); // Check for same reference
  });
});