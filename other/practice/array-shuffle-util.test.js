const shuffle = require('./array-shuffle-util');

describe('shuffle', () => {
  it('should return an array with the same length', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(shuffle(arr)).toHaveLength(5);
  });

  it('should contain the same elements as the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    // A shuffled array, when sorted, should be identical to the original sorted array.
    expect(shuffle(arr).sort()).toEqual([...arr].sort());
  });

  it('should handle an empty array', () => {
    expect(shuffle([])).toEqual([]);
  });

  it('should handle an array with a single element', () => {
    expect(shuffle([1])).toEqual([1]);
  });

  it('should produce a different array order on subsequent calls (high probability)', () => {
    const arr = Array.from({ length: 100 }, (_, i) => i);
    const shuffled1 = shuffle(arr);
    const shuffled2 = shuffle(arr);
    // While there's a tiny chance they could be the same, it's astronomically low.
    expect(shuffled1).not.toEqual(shuffled2);
  });
});
