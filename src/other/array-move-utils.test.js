import { move } from './array-move-utils';

describe('move', () => {
  it('should move an element to a new index', () => {
    const array = [1, 2, 3, 4, 5];
    const moved = move(array, 1, 3);
    expect(moved).toEqual([1, 3, 4, 2, 5]);
  });

  it('should not modify the original array', () => {
    const array = [1, 2, 3, 4, 5];
    const originalArray = [...array];
    move(array, 0, 2);
    expect(array).toEqual(originalArray);
  });

  it('should return a new array instance', () => {
    const array = [1, 2, 3];
    const moved = move(array, 0, 1);
    expect(moved).not.toBe(array);
  });

  it('should handle moving to the same index', () => {
    const array = [1, 2, 3];
    const moved = move(array, 1, 1);
    expect(moved).toEqual([1, 2, 3]);
  });

  it('should handle moving from the start to the end', () => {
    const array = ['a', 'b', 'c'];
    const moved = move(array, 0, 2);
    expect(moved).toEqual(['b', 'c', 'a']);
  });

  it('should handle moving from the end to the start', () => {
    const array = ['a', 'b', 'c'];
    const moved = move(array, 2, 0);
    expect(moved).toEqual(['c', 'a', 'b']);
  });

  it('should handle empty arrays', () => {
    expect(move([], 0, 0)).toEqual([]);
  });

  it('should handle single element arrays', () => {
    expect(move(['a'], 0, 0)).toEqual(['a']);
  });

  it('should handle out of bounds indexes', () => {
    const array = [1, 2, 3];
    expect(move(array, -1, 2)).toEqual(array);
    expect(move(array, 3, 2)).toEqual(array);
    expect(move(array, 1, -1)).toEqual(array);
    expect(move(array, 1, 4)).toEqual(array);
  });
});
