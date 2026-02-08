import { removeAt } from './array-remove-at.js';

describe('removeAt', () => {
  it('should remove an element at the specified index', () => {
    const arr = [1, 2, 3, 4];
    const expected = [1, 2, 4];
    expect(removeAt(arr, 2)).toEqual(expected);
  });

  it('should remove the first element', () => {
    const arr = [1, 2, 3];
    const expected = [2, 3];
    expect(removeAt(arr, 0)).toEqual(expected);
  });

  it('should remove the last element', () => {
    const arr = [1, 2, 3];
    const expected = [1, 2];
    expect(removeAt(arr, 2)).toEqual(expected);
  });

  it('should handle removing from an empty array', () => {
    expect(removeAt([], 0)).toEqual([]);
  });

  it('should not modify the original array', () => {
    const arr = [1, 2, 3];
    removeAt(arr, 1);
    expect(arr).toEqual([1, 2, 3]);
  });
});
