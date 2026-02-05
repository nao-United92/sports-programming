const { shuffle } = require('./array-shuffle');

describe('shuffle', () => {
  it('should return an array with the same elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    expect(shuffled).toHaveLength(arr.length);
    expect(shuffled.sort()).toEqual(arr.sort());
  });

  it('should handle an empty array', () => {
    const arr = [];
    const shuffled = shuffle(arr);
    expect(shuffled).toEqual([]);
  });

  it('should handle an array with one element', () => {
    const arr = [1];
    const shuffled = shuffle(arr);
    expect(shuffled).toEqual([1]);
  });
  
  it('should not modify the original array', () => {
    const originalArr = [1, 2, 3];
    shuffle(originalArr);
    expect(originalArr).toEqual([1, 2, 3]);
  });

  it('should throw an error if not given an array', () => {
    expect(() => shuffle('not an array')).toThrow(TypeError);
    expect(() => shuffle({ a: 1 })).toThrow(TypeError);
    expect(() => shuffle(null)).toThrow(TypeError);
  });
});
