import { shuffle } from './array-shuffler.js';

describe('shuffle', () => {
  test('should return an array with the same length', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(originalArray);
    expect(shuffledArray).toHaveLength(originalArray.length);
  });

  test('should contain the same elements as the original array', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(originalArray);
    expect(shuffledArray.sort()).toEqual(originalArray.sort());
  });

  test('should handle an empty array', () => {
    expect(shuffle([])).toEqual([]);
  });

  test('should handle an array with one element', () => {
    expect(shuffle([1])).toEqual([1]);
  });
  
  test('should return a new array instance', () => {
    const originalArray = [1, 2, 3];
    const shuffledArray = shuffle(originalArray);
    expect(shuffledArray).not.toBe(originalArray);
  });

  test('should return an empty array if the input is not an array', () => {
    expect(shuffle('not an array')).toEqual([]);
    expect(shuffle(null)).toEqual([]);
  });
});
