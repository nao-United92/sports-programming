import shuffle from './array-shuffle-utils';

describe('shuffle', () => {
  it('should return an array with the same length', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffled = shuffle(array);
    expect(shuffled).toHaveLength(array.length);
  });

  it('should return an array with the same elements', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffled = shuffle(array);
    expect(shuffled.sort()).toEqual(array.sort());
  });

  it('should not mutate the original array', () => {
    const array = [1, 2, 3, 4, 5];
    const original = [...array];
    shuffle(array);
    expect(array).toEqual(original);
  });

  it('should return a new array instance', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffled = shuffle(array);
    expect(shuffled).not.toBe(array);
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
