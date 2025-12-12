const { move } = require('./array-move-utils');

describe('move', () => {
  test('should move an element from one index to another', () => {
    expect(move([1, 2, 3, 4], 0, 2)).toEqual([2, 3, 1, 4]);
  });

  test('should move an element to the end of the array', () => {
    expect(move([1, 2, 3], 0, 2)).toEqual([2, 3, 1]);
  });

  test('should move an element to the beginning of the array', () => {
    expect(move([1, 2, 3], 2, 0)).toEqual([3, 1, 2]);
  });

  test('should not modify the original array', () => {
    const original = [1, 2, 3];
    move(original, 0, 1);
    expect(original).toEqual([1, 2, 3]);
  });

  test('should return a new array if indices are out of bounds', () => {
    expect(move([1, 2, 3], -1, 1)).toEqual([1, 2, 3]);
    expect(move([1, 2, 3], 0, -1)).toEqual([1, 2, 3]);
    expect(move([1, 2, 3], 3, 1)).toEqual([1, 2, 3]);
    expect(move([1, 2, 3], 1, 3)).toEqual([1, 2, 3]);
  });

  test('should return the same array if from and to are the same', () => {
    expect(move([1, 2, 3], 1, 1)).toEqual([1, 2, 3]);
  });
});