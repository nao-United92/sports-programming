import { shuffle } from './array-shuffle-utils';

describe('shuffle', () => {
  it('should return an array of the same length', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffled = shuffle(array);
    expect(shuffled.length).toBe(array.length);
  });

  it('should contain the same elements as the original array', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffled = shuffle(array);
    expect(shuffled).toEqual(expect.arrayContaining(array));
    expect(array).toEqual(expect.arrayContaining(shuffled));
  });

  it('should not modify the original array', () => {
    const array = [1, 2, 3, 4, 5];
    const originalArray = [...array];
    shuffle(array);
    expect(array).toEqual(originalArray);
  });

  it('should return a new array instance', () => {
    const array = [1, 2, 3];
    const shuffled = shuffle(array);
    expect(shuffled).not.toBe(array);
  });

  it('should handle empty arrays', () => {
    expect(shuffle([])).toEqual([]);
  });

  it('should handle single element arrays', () => {
    expect(shuffle([1])).toEqual([1]);
  });
});
